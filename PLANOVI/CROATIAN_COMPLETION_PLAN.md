# Croatian V2 Completion Plan
**Goal:** Croatian (hr) site must be an exact copy of V1 content — same texts, same pages, same SEO.

---

## PHASE 1: Fix en.json key structure mismatches (prerequisite)
**Why:** en.json is the reference. Some namespaces have wrong keys vs what page components expect.
**Action:** Update en.json to match page component key structure.

| Namespace | Issue | Fix |
|-----------|-------|-----|
| Sports | `features.teamwork/active/program` → needs `features.sports/seaLand/safety/certificate` | Rewrite keys |
| DigitalAcademy | `features.creativity/tech/program` → needs `features.creativity/media/tech/certificate` | Rewrite keys |
| ArtFashion | `features.creativity/glamour/program` → needs `features.makeup/dance/fashion/runway` | Rewrite keys |
| Leadership | `features.skills/business/program` → needs `features.skills/teamwork/projects/future` | Rewrite keys |
| TeenChallenger | Missing `about`, `features.adrenaline/challenges/safety/excitement` | Add keys |
| JuniorAnimator | `features.mentoring/training/certification` → needs `features.children/tourism/skills/future` | Rewrite keys |
| OxfordEnglish | `note.text` → `note.desc`; missing `availability.program`, `programsLabel`, etc. | Fix + add keys |

**Tasks:**
- [ ] 1.1 Update Sports keys in en.json
- [ ] 1.2 Update DigitalAcademy keys in en.json
- [ ] 1.3 Update ArtFashion keys in en.json
- [ ] 1.4 Update Leadership keys in en.json
- [ ] 1.5 Update TeenChallenger keys in en.json
- [ ] 1.6 Update JuniorAnimator keys in en.json
- [ ] 1.7 Fix OxfordEnglish keys in en.json

---

## PHASE 2: Add 15 missing Croatian translation namespaces to hr.json
**Source:** V1 Croatian TSX page files — text must match EXACTLY.

### 2A: Program/Academy pages (12 namespaces)

| Namespace | V1 Source File | V1 texts count |
|-----------|---------------|----------------|
| Transfer | (no V1 texts - new page) | 0 |
| OxfordEnglish | `pages/oxford-english.tsx` | 24 |
| Sports | `pages/sports.tsx` | 40 |
| DigitalAcademy | `pages/digital-academy.tsx` | 34 |
| ArtFashion | `pages/art-fashion.tsx` | 33 |
| Leadership | `pages/leadership.tsx` | 33 |
| TeenChallenger | `pages/teen-challenger.tsx` | 16 |
| JuniorAnimator | `pages/junior-animator.tsx` | 37 |
| CroatianCamp | `pages/kamp-hrvatskog-jezika.tsx` | 31 |
| GermanCamp | `pages/kamp-njemackog-jezika.tsx` | 29 |
| ItalianCamp | `pages/kamp-talijanskog-jezika.tsx` | 30 |
| FrenchCamp | `pages/kamp-francuskog-jezika.tsx` | 30 |

**Tasks:**
- [ ] 2.1 Add Transfer namespace to hr.json (translate from en.json — new page, no V1 equivalent)
- [ ] 2.2 Add OxfordEnglish namespace to hr.json (from V1 oxford-english.tsx)
- [ ] 2.3 Add Sports namespace to hr.json (from V1 sports.tsx)
- [ ] 2.4 Add DigitalAcademy namespace to hr.json (from V1 digital-academy.tsx)
- [ ] 2.5 Add ArtFashion namespace to hr.json (from V1 art-fashion.tsx)
- [ ] 2.6 Add Leadership namespace to hr.json (from V1 leadership.tsx)
- [ ] 2.7 Add TeenChallenger namespace to hr.json (from V1 teen-challenger.tsx)
- [ ] 2.8 Add JuniorAnimator namespace to hr.json (from V1 junior-animator.tsx)
- [ ] 2.9 Add CroatianCamp namespace to hr.json (from V1 kamp-hrvatskog-jezika.tsx)
- [ ] 2.10 Add GermanCamp namespace to hr.json (from V1 kamp-njemackog-jezika.tsx)
- [ ] 2.11 Add ItalianCamp namespace to hr.json (from V1 kamp-talijanskog-jezika.tsx)
- [ ] 2.12 Add FrenchCamp namespace to hr.json (from V1 kamp-francuskog-jezika.tsx)

### 2B: UI/Utility namespaces (3 namespaces)

| Namespace | Source |
|-----------|--------|
| CookieConsent | Translate from en.json |
| ContactForm | Translate from en.json |
| NotFound | Translate from en.json |

**Tasks:**
- [ ] 2.13 Add CookieConsent namespace to hr.json
- [ ] 2.14 Add ContactForm namespace to hr.json
- [ ] 2.15 Add NotFound namespace to hr.json

---

## PHASE 3: Fix SEO meta texts for existing pages
**Source:** V1 PAGE_TITLE, PAGE_DESCRIPTION, PAGE_KEYWORDS constants.
**Action:** Add/update SEO keys in hr.json for pages that already have content.

| Page | V1 source |
|------|-----------|
| / (home) | home.tsx — PAGE_DESCRIPTION, PAGE_KEYWORDS |
| /about | about.tsx |
| /prices | cijene.tsx |
| /junior-camp | junior-camp.tsx |
| /teen-camp | teen-program.tsx |
| /faq | najcesca-pitanja.tsx |
| /accommodation | smjestaj.tsx |
| /why-euroclub | zasto-euroclub.tsx |
| /daily-schedule | dnevni-raspored.tsx |

**Tasks:**
- [ ] 3.1 Add missing SEO meta texts to hr.json for homepage
- [ ] 3.2 Add missing SEO meta texts to hr.json for About page
- [ ] 3.3 Add missing SEO meta texts to hr.json for Prices page
- [ ] 3.4 Add missing SEO meta texts to hr.json for Junior Camp
- [ ] 3.5 Add missing SEO meta texts to hr.json for Teen Camp
- [ ] 3.6 Add missing SEO meta texts to hr.json for FAQ
- [ ] 3.7 Add missing SEO meta texts to hr.json for Accommodation
- [ ] 3.8 Add missing SEO meta texts to hr.json for Why Euroclub
- [ ] 3.9 Add missing SEO meta texts to hr.json for Daily Schedule

---

## PHASE 4: Fix minor content gaps on working pages
**Pages that have translations but still have missing V1 text matches.**

| Page | Issue |
|------|-------|
| /about | Missing "Prouči naše programe i odaberi onaj baš za sebe!" button text |
| /accommodation | Missing 3 descriptive paragraphs from V1 |
| /programs | Code artifacts from V1 extractor (ignore) |

**Tasks:**
- [ ] 4.1 Add missing About page button/CTA text to hr.json
- [ ] 4.2 Add missing Accommodation descriptive texts to hr.json
- [ ] 4.3 Verify /programs page renders correctly (code artifacts are false positives)

---

## PHASE 5: Fix PAGE_MAP and middleware for Croatian-specific URLs
**Issue:** Some V1 Croatian filenames aren't in the page mapping.

| V1 File | Should map to |
|---------|---------------|
| `adventure-paket.tsx` | /adventure-package (already exists in V2, just needs mapping entry) |
| `rezervacija.tsx` | /reservation (already exists) |
| `teen-programi.tsx` | /programs/teen (already exists) |

**Tasks:**
- [ ] 5.1 Add `adventure-paket` → `/adventure-package` to PAGE_MAP in page-mapping.mjs
- [ ] 5.2 Verify all Croatian V1 files map correctly to V2 routes

---

## PHASE 6: Verification & QA
**Run QA agent to confirm Croatian is 100% complete.**

**Tasks:**
- [ ] 6.1 Run QA crawl for Croatian (all 25 pages must return 200)
- [ ] 6.2 Run text comparison (target: >90% match rate, 0 critical missing)
- [ ] 6.3 Manual spot-check of 5 key pages (home, prices, sports, oxford-english, croatian-camp)
- [ ] 6.4 Verify all SEO meta tags render in page source

---

## Execution Order
1. Phase 1 (fix en.json keys) — do first, other phases depend on this
2. Phase 2 (add 15 missing HR namespaces) — bulk of work
3. Phase 3 (fix SEO) — can be parallel with Phase 2
4. Phase 4 (minor fixes) — after Phase 2
5. Phase 5 (page mapping) — quick fix
6. Phase 6 (verification) — final

## Estimated scope
- **15 new translation namespaces** to add to hr.json
- **~6 namespaces** to fix in en.json  
- **~9 pages** need SEO meta added
- **~350+ lines** of Croatian text to add to hr.json
- All text sourced EXACTLY from V1 TSX files
