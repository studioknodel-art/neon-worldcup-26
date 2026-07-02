// Refreshes the embedded SEED snapshot in index.html from the live ESPN feed.
// Updates states/scores in place and fills knockout placeholders with real teams,
// preserving seed ids and "Winner NN" feeder references the bracket depends on.
// Usage: node update-seed.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), 'index.html');
let html = fs.readFileSync(FILE, 'utf8');

const seedMatch = html.match(/const SEED=(\[.*?\]);/s);
if (!seedMatch) throw new Error('SEED array not found');
const SEED = JSON.parse(seedMatch[1]);
const api = html.match(/const API="([^"]+)"/)[1];

const res = await fetch(api);
if (!res.ok) throw new Error('ESPN HTTP ' + res.status);
const json = await res.json();

const team = c => ({ abbr: (c.team && c.team.abbreviation) || '', name: (c.team && (c.team.shortDisplayName || c.team.displayName)) || 'TBD' });
const evs = (json.events || []).map(ev => {
  const comp = (ev.competitions && ev.competitions[0]) || {};
  const cs = comp.competitors || [];
  const home = cs.find(c => c.homeAway === 'home') || cs[0] || {};
  const away = cs.find(c => c.homeAway === 'away') || cs[1] || {};
  const st = (comp.status && comp.status.type) || {};
  return {
    date: new Date(ev.date), a: team(home), b: team(away),
    sa: home.score != null && home.score !== '' ? parseInt(home.score) : null,
    sb: away.score != null && away.score !== '' ? parseInt(away.score) : null,
    winA: !!home.winner, winB: !!away.winner,
    state: st.state || 'pre'
  };
});

const dayKey = d => d.toISOString().slice(0, 10);
const minKey = d => d.toISOString().slice(0, 16);
const byTeams = {}, byTime = {};
evs.forEach(e => {
  if (e.a.abbr && e.b.abbr) byTeams[dayKey(e.date) + '|' + [e.a.abbr, e.b.abbr].sort().join('-')] = e;
  if (!byTime[minKey(e.date)]) byTime[minKey(e.date)] = e;
});

// ESPN placeholder teams carry fake abbrs ("TBD", "RD32 W11") — never treat those as real teams.
const PLACEHOLDER = /^(tbd|rd32|rd16|qf|sf|winner|runner|3rd|third|final)\b/i;
const isReal = t => t.abbr && !PLACEHOLDER.test(t.abbr) && !PLACEHOLDER.test(t.name || '');

// Repair any placeholder abbrs a previous run may have written into the seed.
SEED.forEach(s => {
  if (s.aAbbr && PLACEHOLDER.test(s.aAbbr)) s.aAbbr = '';
  if (s.bAbbr && PLACEHOLDER.test(s.bAbbr)) s.bAbbr = '';
});

let updated = 0, filled = 0;
SEED.forEach(s => {
  const d = new Date(s.iso);
  let e = (s.aAbbr && s.bAbbr) ? byTeams[dayKey(d) + '|' + [s.aAbbr, s.bAbbr].sort().join('-')] : null;
  if (!e) e = byTime[minKey(d)];
  if (!e) return;
  let sa = e.sa, sb = e.sb, A = e.a, B = e.b, wa = e.winA, wb = e.winB;
  if (s.aAbbr && s.bAbbr && e.a.abbr === s.bAbbr) { sa = e.sb; sb = e.sa; A = e.b; B = e.a; wa = e.winB; wb = e.winA; } // keep seed orientation
  if (s.state !== e.state || s.sa !== sa || s.sb !== sb) updated++;
  s.state = e.state; s.sa = sa; s.sb = sb;
  if (e.state === 'post' && (wa || wb)) { s.wa = wa; s.wb = wb; }  // persist knockout winner (matters for penalty ties)
  if (!s.aAbbr && isReal(A)) { s.aAbbr = A.abbr; s.aName = A.name; filled++; }
  if (!s.bAbbr && isReal(B)) { s.bAbbr = B.abbr; s.bName = B.name; }
});

const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }).formatToParts(new Date());
const g = t => fmt.filter(p => p.type === t).map(p => p.value).join('');
const stamp = `${g('month')} ${g('day')}, ${g('year')} · ${g('hour')}:${g('minute')} ${g('dayPeriod')} CDT`;

html = html.replace(seedMatch[0], 'const SEED=' + JSON.stringify(SEED) + ';');
html = html.replace(/const SNAPSHOT="[^"]*"/, 'const SNAPSHOT="' + stamp + '"');
fs.writeFileSync(FILE, html);
console.log(`events: ${evs.length} · results updated: ${updated} · knockout slots filled: ${filled} · snapshot: ${stamp}`);
