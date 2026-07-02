# World Cup 2026 Live Tracker

Unofficial fan site: live scores, group standings, schedule, interactive knockout bracket, follow-your-team. Neon/synthwave design. All times Dallas Central (`TZ='America/Chicago'`).

**Production:** https://neon-worldcup-26.netlify.app (Netlify site id `f191c838-3bcf-4803-ba27-c4f0f6a2f88c`, name `neon-worldcup-26`)

## Architecture

Static site, no build step, no framework, ES5-ish vanilla JS.

- `index.html` (~8KB) — markup only
- `styles.css` — all styling; CSS vars in `:root` (`--cyan --magenta --amber --mint --live --dallas`); design identity is neon-on-dark, don't add themes
- `app.js` — all logic **plus the embedded `SEED` array** (104 matches, the offline snapshot). Key parts in order: helpers → ESPN parse (`parseEvents`) → `seedToMatches`/`applyLive` merge → standings → renders (`renderSchedule`, `renderToday`, `renderR32`, bracket) → follow-team module → `load()`/polling → controls wiring → init
- `update-seed.mjs` — refreshes SEED in app.js from the live ESPN feed in place. Run `node update-seed.mjs` then deploy. Never edit SEED by hand; never replace SEED wholesale (seed ids `s1..s104` are load-bearing)
- `icon.png`, `manifest.webmanifest` — PWA bits

## Data flow

1. `SEED` renders instantly (offline fallback, snapshot date in `SNAPSHOT`)
2. `load()` fetches ESPN (`API` const, unofficial endpoint), overlays live data via `applyLive` (match by date+team-abbrs, fallback date-minute)
3. Poll: 30s live / 60s near kickoff / 5m idle. Unchanged payload short-circuits re-render (preserves open dropdowns/selections) — guard with `lastLoadOk`
4. ESPN pre-match scores are `0` not null — only show scores when state is `in`/`post`. ESPN placeholder "teams" have fake abbrs (`TBD`, `RD32 W11`) — never treat as real (see `PLACEHOLDER` regex in update-seed.mjs, `bIsPlaceholder` in app.js)

## Bracket

`BRACKET` const in app.js is the **frozen, verified** knockout tree (column position `p` feeds parent `floor(p/2)`). Ids are seed ids in feeder order, NOT chronological — QF pairings cross (QF2 takes R16 winners 5&6). Verified against ESPN's `RD16 W1`-style refs. Don't regenerate it from names.

## Conventions

- Match object: `{id,date,grp,stage(group|r32|r16|qf|sf),state(pre|in|post),a/b:{abbr,name},sa,sb,winA,winB,ch,venueCity,dallas}`
- `r32Outcome(m)` decides knockout winners (uses winA/winB flags for penalty ties — score alone is insufficient)
- Followed team: `FOLLOW` (abbr) in localStorage key `wc2026_follow_team`; `isFav(m)` drives `.fav` amber highlighting in all four render paths
- Accessibility is established: keyboard + ARIA on tabs/cards/bracket nodes, `prefers-reduced-motion`, focus-visible — keep new UI to that standard
- git is live in this folder; commit each logical change separately

## Verify & deploy (do all three before claiming done)

```bash
node --check app.js
node update-seed.mjs        # optional: refresh snapshot before deploying
netlify deploy --prod --dir . --site f191c838-3bcf-4803-ba27-c4f0f6a2f88c
```
Netlify CLI lives in `~/.npm-global/bin` (add to PATH). For visual verification, serve this folder (`python3 -m http.server`) and check: console clean, follow flow, bracket connectors, mobile width (`max-width:560px` breakpoints).

## Backlog (agreed with owner, rough priority)

1. Match countdowns on today's cards ("Kicks off in 2h 14m")
2. Group permutation hints are moot now (knockouts underway) — instead: "what a win means" line for followed team (projected next opponent)
3. Golden Boot / stats tab (ESPN feed family)
4. Share cards (copy result summary)
5. "Stadium mode" (bigger glanceable fonts)
6. Calendar .ics export per team
7. Compliance pass: "unofficial fan site" disclaimer wording, ESPN ToS review
8. Error beacon/analytics so feed breakage is visible
