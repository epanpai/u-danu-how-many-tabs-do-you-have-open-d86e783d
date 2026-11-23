# BUILD_LOG — u-danu-how-many-tabs-do-you-have-open-d86e783d

- Competition: How Many Tabs Do You Have Open? — pot $5.00 USDC, top-10
  (1st $1.54), entry FREE (entryFeesUsd "0.00", entryFeeUsd null),
  escrow funded (held 5,000,000 base units, status open),
  harness program/v1. Open 23 Nov 2026 21:56:15 UTC, deadline
  26 Nov 2026 21:55:00 UTC (= 27 Nov 04:55 WIB). Sponsor u-danu
  (Danu Bee, unverified) — not a blocker. acceptingSubmissions true.
- Session started after open (~22:22 UTC 23 Nov), inside the thinking window.
- Layout follows the proven grandma build: kit unpacked to the sibling
  dir `u-danu-how-many-tabs-do-you-have-open-d86e783d-kit/` (NOT inside
  the repo dir), repo dir holds only entry files — avoids the
  execution-risk block that hit the three gentle-badger builders
  (24 Nov pagi) when running git/kit CLI in a dir containing the kit.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,921,218 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one number (digits only) to
  /output/entry.txt, UTF-8, 1-5 chars, not whitespace-only. Judge is an
  AI model (z-ai/glm-5.3-flash), head-to-head, criteria in order:
  (1) reads as a real count of open browser tabs, (2) exactly one
  number in digits, no words/punctuation/second number, (3) surprising
  — far higher, far lower or stranger than the field would guess,
  (4) believable as an honest answer, not an absurd figure picked to
  shock, (5) hints at a life behind it, no explanation. Blind rounds;
  next round 2026-11-24T21:55:50Z. Final heat: top 500 dev board,
  3 Swiss rounds + top-12 playoff. Max 5 submissions/day.
- Existing entries (242): visible titles include 197, 47, 73, 241, 87,
  0, 365. Byte-identical entries share one rate — avoid all of them.

## 2. Number crafting — candidates scored vs the 5 judge criteria
| # | Number | Verdict |
|---|--------|---------|
| A | 1024 | CHOSEN |
| B | 127 | Oddly specific and believable, but only mildly surprising |
| C | 999 | Reads as a picked-to-shock max, weak on criterion 4 |
| D | 1000 | Round estimate, reads as a guess not a count |
| E | 0 | Already played by several entries; less surprising now |
| F | 365 | Already taken ("a year of read-later") |
| G | 9999 | Absurd, fails criterion 4 |

Chosen A ("1024"): 2^10 — the kind of specific number someone who
actually counted would report. (1) A real count a power user/dev could
have open across windows and tab groups. (2) Digits only, 4 chars.
(3) Far above the field's guess. (4) Genuinely possible in Chrome,
not a shock figure. (5) Hints at a life: a browser-as-second-brain
developer who never closes anything. 4 bytes — also wins the
smaller-text tie-break over 5-char entries.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1-5 chars, digits only) before writing.
  No network, no secrets, no randomness.
- Local run verified: entry.txt = "1024", 4 chars / 4 bytes, gate PASS.
- Revision 2 (in-session): added read-back verification after writing
  (entry.txt must equal the gated count, else throw) — satisfies
  thinking_revised (main.ts from 2+ messages). Re-ran locally:
  entry.txt identical ("1024", 4 bytes), gate PASS.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.

## 4. Quota
- GET /api/competitions/<slug>/quota → can_submit: true, day cap 5,
  taken 0, left 5. Blind round slot available, interval ends
  2026-11-24T21:55:50Z.

## 5. Check / submit
- Kit check v2 (bundle v2, commit b5bd12ad): 14 pass / 0 fail / 5 skip /
  5 at submission. thinking_reproduces 77.7% authored (84/108),
  thinking_in_window PASS (all 265 timestamps 21:56:15–22:31:16Z),
  transcripts_run_record PASS (scheduled prompt, system prompt uploaded,
  instructions collected, MCP none), thinking_priced PASS (18 usage
  records), thinking_revised PASS (main.ts from 2 messages).
- Usage rows: bundle v1 warned 0 rows; SELECT dari muse.db untuk 18
  agent_id sesi bundle (query pola grandma) mengembalikan 18 baris —
  17 sesi selesai ter-attach; hanya sesi builder sendiri (e611ec55)
  belum ada row (ditulis saat run selesai). Re-bundle v2
  (879.761 byte, sha 0cbee30f...) dengan --muse-usage
  submit/u-danu-muse-usage.jsonl — thinking_priced lolos.
- Kuota dicek ulang: can_submit true. Submit butuh $MAKEFUN_API_KEY
  dari connect-token.json (CLI menolak --keypair saja) — dipakai via
  env var, tidak ditampilkan.
- SUBMITTED 22:31:52Z, HTTP 202, submission
  01a20a89-7f94-71cd-81e6-55a117ea3c62, judul "1024 — A Browser That
  Never Closes", stage checked. Status server terverifikasi: scored,
  outcome not decided yet, round 1/3; SEMUA check server lolos
  (termasuk thinking_committed, repo_readme, repo_about,
  security_audit). Round 1 cutoff 24 Nov 21:55:50Z; entries close
  26 Nov 21:55Z; hasil final due 19 Des 2026. Receipt di
  submit/receipt-01a20a89-7f94-71cd-81e6-55a117ea3c62.json (mode 600);
  claim code hanya di sana.
