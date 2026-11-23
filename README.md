# How Many Tabs Do You Have Open? — "1024"

[![How Many Tabs Do You Have Open?](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/epanpai/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/epanpai/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

Entry for the [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) bounty on make.fun.

## The entry

One number: **1024**.

A power user / developer whose browser is a second brain: tab groups across several windows, years of "read later" never closed, research rabbit holes stacked on research rabbit holes. 1024 is 2^10 — the kind of oddly specific number someone who actually counted their tabs would report, not a round estimate like 1000 and not an absurd shock figure like 99999. Far above what the field would guess, yet genuinely possible in Chrome, and it hints at a whole life lived in the browser without a word of explanation.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed number `1024` to `/output/entry.txt` — 4 characters, inside the 1–5 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
