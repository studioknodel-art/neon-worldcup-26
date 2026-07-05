# Handoff — Neon World Cup 2026

You're taking over an existing, shipped web app. **Read `CLAUDE.md` first** — it's the source of truth for architecture, conventions, data-flow gotchas, and deploy. This file adds only the handoff essentials.

## What it is
A single-page, no-build, vanilla-JS static site: live World Cup 2026 scores, group standings, filtered schedule, an interactive knockout bracket, follow-your-team (with countdowns + next-opponent projection), a Golden Boot stats tab, share + calendar (.ics) export, stadium mode, and a Kalshi-style implied-win-chance bar under upcoming matches. Neon/synthwave design, all times Dallas Central. Data: ESPN's unofficial public feed, with an embedded `SEED` snapshot in `app.js` as offline fallback.

## Where things live
- **Repo:** `studioknodel-art/neon-worldcup-26` (public; site carries `noindex` — unlisted link)
- **Live:** https://studioknodel-art.github.io/neon-worldcup-26/ (GitHub Pages, `main` root)
- **Files:** `index.html` (markup), `styles.css`, `app.js` (logic + `SEED`), `icon.png`, `manifest.webmanifest`, `update-seed.mjs` (refreshes the snapshot from ESPN — run it, never hand-edit `SEED`), `CLAUDE.md`, `HANDOFF.md`.

## Deploy = git push
GitHub Pages watches `main` and rebuilds in ~1 min. No Netlify, no build step.
```bash
node --check app.js
node update-seed.mjs        # optional: refresh scores from ESPN first
git add -A && git commit -m "..." && git push
```
Then confirm the live asset updated:
`curl -s "https://studioknodel-art.github.io/neon-worldcup-26/app.js?cb=$(date +%s)" | grep -c <new-symbol>`

## Sharp edges (full detail in CLAUDE.md — do not skip)
- `BRACKET` is a frozen, verified knockout tree — don't regenerate it from team names.
- ESPN sends `0` (not null) for unplayed scores, and gives placeholder teams fake abbrs like `RD32 W11` — both caused real bugs. Filter accordingly.
- Knockout winners use `winA/winB` flags (score alone misses penalty ties).
- `SEED` ids `s1`–`s104` are load-bearing; preserve them.

## Working agreement (the prior sessions held to this)
1. One logical change at a time.
2. Verify before claiming done: `node --check app.js` → run it in a browser preview and confirm behavior visually (console clean, feature works) → commit → push → curl-confirm the deployed asset.
3. Preserve the neon design identity and the accessibility standard (keyboard + ARIA on interactive elements, `prefers-reduced-motion`, focus-visible).
4. Anything outward-facing or gambling/compliance-adjacent (external APIs, analytics beacons, betting data) — surface the tradeoff and get owner sign-off before building.

## Current state
Backlog fully shipped (see the checked list in `CLAUDE.md`) plus the prediction bar. Open ideas, roughly prioritized:
1. **Second data source / feed failover** — the ESPN endpoint is a single unofficial point of failure; highest-value next step.
2. Knockout scenario/permutation view.
3. Canvas-rendered shareable image cards (beyond the current text summary).

**First task:** read `CLAUDE.md`, run the app locally to confirm it works in your environment, then propose a short plan for the feed-failover work (or say where you'd start instead and why) before writing code.
