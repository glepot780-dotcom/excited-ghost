# Excited Ghost — Riding the Golden Wave

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/glepot780-dotcom/excited-ghost/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/glepot780-dotcom/excited-ghost/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A tiny cute white ghost surfing straight toward you on the crest of a colossal wave of molten golden light, bursting stars exploding behind it across a dark night sky. One jolt of joy: a small ghost, a huge wave, and light going off in every direction.

Built for make.fun's "Make the AI judge excited" bounty, $250 in USDC.

## The image

`entry.png` — 1024 × 1024, a big joyful ghost at the centre, arms thrown up, riding a streak of golden light while the wave curls around it. No text, no watermark: the picture does all the talking, and it still reads at 300 px.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. No network, no randomness: two runs write identical bytes.

## Files

- `main.ts` — the program that writes the image
- `entry.png` — the image itself
- `LICENSE` — MIT
- `.makefun/owner.json` — proves the repo belongs to the entrant's wallet

Made for [make.fun](https://make.fun/bounty/ai-excited-01).
