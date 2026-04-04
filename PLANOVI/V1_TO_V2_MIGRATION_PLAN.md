# Euroclub V1 → V2 Complete Migration Plan

> **CRITICAL RULE**: ALL text content must remain EXACTLY as it is in V1. Never modify, rewrite, or invent new text.

---

## Current State Summary

| Aspect | V1 | V2 |
|--------|----|----|
| **Stack** | Vite+React SPA, Wouter | Next.js 16, next-intl, Tailwind |
| **i18n** | Hardcoded ternary chains per page/component | `messages/*.json` + `useTranslations()` |
| **SEO** | Client-side `document.title` (invisible) | Server-side `generateMetadata()` |
| **Languages** | 10 (hr, en, de, it, sl, pl, hu, fr, cs, ru) | 8 so far (missing hu, ru) |
| **Pixel Tracking** | GTM `GTM-NHG3JQZ`, Meta Pixel `435008813366385` | ❌ Not yet implemented |
| **Cookie Consent** | Full GDPR w/ gtag + fbq consent mgmt | ❌ Not yet implemented |
| **Reservation Form** | 8 copies (one per language), POSTs to `/api/reservations` | 1 component with i18n (basic) |

---

## URL Preservation (CRITICAL for SEO)

> [!CAUTION]
> All V1 URLs are indexed by Google. V2 **MUST** produce identical URL paths via `next-intl` routing.

### Complete URL Map (from V1 `sitemap.xml`)

next-intl `pathnames` must produce these **exact** paths for each page:

| Page | hr | en | de | it | sl | pl | hu | fr | cs | ru |
|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Home | `/hr/` | `/en/` | `/de/` | `/it/` | `/sl/` | `/pl/` | `/hu/` | `/fr/` | `/cs/` | `/ru/` |
| About | `/hr/o-nama` | `/en/about-us` | `/de/about` | `/it/about` | `/sl/about` | `/pl/about` | `/hu/rolunk` | `/fr/a-propos` | `/cs/o-nas` | `/ru/o-nas` |
| Jr Programs | `/hr/programi` | `/en/programs` | `/de/programme` | `/it/programmi` | `/sl/programi` | `/pl/programy` | `/hu/junior-programs` | `/fr/` (!) | `/cs/junior-programs` | `/ru/programmy` |
| Jr Camp | `/hr/junior-programi` | `/en/junior-programs` | `/de/junior-programme` | `/it/junior-programmi` | `/sl/junior-programs` | `/pl/junior-programs` | `/hu/junior-programs` | `/fr/programme-junior` | `/cs/junior-programs` | `/ru/detskie-programmy` |
| Teen Programs | `/hr/teen-programi` | `/en/teen-programs` | `/de/teen-programme` | `/it/teen-programmi` | `/sl/teen-programs` | `/pl/teen-programs` | `/hu/teen-programs` | `/fr/programme-ado` | `/cs/teen-programs` | `/ru/molodezhnye-programmy` |
| Why Euroclub | `/hr/zasto-euroclub` | `/en/why-euroclub` | `/de/warum-euroclub` | `/it/perche-euroclub` | `/sl/zakaj-euroclub` | `/pl/dlaczego-euroclub` | `/hu/miert-euroclub` | `/fr/pourquoi-euroclub` | `/cs/proc-euroclub` | `/ru/pochemu-euroclub` |
| Accommodation | `/hr/smjestaj` | `/en/accommodation` | `/de/unterkunft` | `/it/alloggio` | `/sl/nastanitev` | `/pl/zakwaterowanie` | `/hu/szallas` | `/fr/hebergement` | `/cs/ubytovani` | `/ru/prozhivanie` |
| FAQ | `/hr/najcesca-pitanja` | `/en/faq` | `/de/haufige-fragen` | `/it/domande-frequenti` | `/sl/pogosta-vprasanja` | `/pl/faq` | `/hu/gyakori-kerdesek` | `/fr/faq` | `/cs/caste-dotazy` | `/ru/chasto-zadavaemye-voprosy` |
| Schedule | `/hr/dnevni-raspored` | `/en/daily-schedule` | `/de/tagesablauf` | `/it/programma-giornaliero` | `/sl/dnevni-urnik` | `/pl/plan-dnia` | `/hu/napi-program` | `/fr/emploi-du-temps` | `/cs/denni-rozvrh` | `/ru/rasporyadok-dnya` |
| Prices | `/hr/cijene` | `/en/prices` | `/de/preise` | `/it/prezzi` | `/sl/cene` | `/pl/cennik` | `/hu/arak` | `/fr/tarifs-euroclub` | `/cs/ceny` | `/ru/tseny` |
| Adventure | `/hr/adventure-paket` | `/en/adventure-package` | `/de/abenteuer-paket` | `/it/pacchetto-avventura` | `/sl/pustolovski-paket` | `/pl/pakiet-przygodowy` | `/hu/kaland-csomag` | `/fr/forfait-aventure` | `/cs/dobrodruzny-balik` | `/ru/paket-priklyucheniy` |
| Reservation | `/hr/rezervacija` | `/en/reservation` | `/de/buchen` | `/it/prenotazione` | `/sl/rezervacija` | `/pl/rezerwacja` | `/hu/foglalas` | `/fr/reservation` | `/cs/rezervace` | `/ru/bronirovaniye` |
| Transfer | `/hr/transfer` | `/en/transfer-service` | `/de/transfer` | `/it/servizio-transfer` | `/sl/transfer` | `/pl/transfer` | `/hu/transzfer` | `/fr/service-navette` | `/cs/transfer` | `/ru/transfer` |

Plus **individual program pages** (Oxford English, Sports Academy, Digital Academy, Art & Fashion, French/German/Italian/Croatian Camp, Sea Sun Fun, Leadership, Junior Counselor, Junior Animator, Teen Challenger) — each with 10 locale variants.

---

## Phase 0: Foundation

### 0.1 Copy Assets from V1
- [ ] Copy entire `Euroclub/public/uploads/` folder to `Euroclubv2/public/uploads/`  
- [ ] Copy `attached_assets/` (logo, etc.)
- [ ] Preserve exact folder structure for URL compatibility

### 0.2 Add Missing Locales
- [ ] Add `hu` (Hungarian) and `ru` (Russian) to `src/i18n/routing.ts` locales array
- [ ] Create `messages/hu.json` and `messages/ru.json` (content comes in Phase 6)
- [ ] Add all new page pathnames to routing config using exact URL map above

### 0.3 GTM + Meta Pixel Setup
- [ ] Add Google Consent Mode v2 default script to `src/app/layout.tsx` via `<Script strategy="beforeInteractive">`
- [ ] Add GTM script (`GTM-NHG3JQZ`) 
- [ ] Add Meta Pixel init script (`435008813366385`) with `fbq('consent','revoke')` default
- [ ] Add GTM noscript iframe and Meta noscript pixel to `<body>`

### 0.4 Structured Data (JSON-LD)
- [ ] Copy V1's full schema.org JSON-LD (TravelAgency + EducationalOrganization + Camp) to layout
- [ ] Include offers, amenityFeature, aggregateRating, geo, contact data
- [ ] All OG/Twitter meta tags from V1 `index.html`

---

## Phase 1: Homepage (Croatian Match)

### 1.1 HomeHero → Video background, gradient overlay, glassmorphism card, JUNIOR/TEEN CTAs
### 1.2 HomeUnforgettable → Parallax bg, full-screen, dark overlay
### 1.3 HomeAdventure → Light blue `#A3E3FF`, two CTA pill buttons
### 1.4 HomeStory → Background image, glassmorphism card, "O NAMA" CTA
### 1.5 HomeFuture → Split 2/5+3/5 grid, decorative circles
### 1.6 HomeParents → Background image, V1 has fuller text than V2's current `hr.json` — update JSON
### 1.7 HomeGallery → Auto-rotating 4-image sets, lightbox, bullet nav, bg `#168CC4`
### 1.8 HomeTestimonials → Auto-play 5s, pause on hover, arrows, progress bar; add 4 missing HR testimonials from V1

---

## Phase 2: Core Pages (Croatian)

### 2.1 [NEW] Zašto Euroclub — Hero, circular stats, info cards, CTA
### 2.2 [NEW] Smještaj — Hero, video+text, photo galleries (rooms, safety, fun, location)
### 2.3 [NEW] Dnevni Raspored — Hero, color-coded timeline, CTA
### 2.4 [NEW] Adventure Paket — Hero video, description, trip gallery, why-choose cards, CTA
### 2.5 About — Verify V1 parity, add CircularStatistic component
### 2.6 FAQ — Update truncated answers in `hr.json` to V1's full text; add FAQSchema
### 2.7 Prices — Add missing adventure rows; update V2's data to match V1 completely
### 2.8 Junior Camp — Match V1 hero, sections, ribbon title, video, CTA
### 2.9 Teen Camp — Match V1 layout, teen-specific content
### 2.10 Junior Programs — 3-column expandable cards, program data from V1
### 2.11 Teen Programs — Same structure, teen programs
### 2.12 [NEW] Transfer Service — Create from V1
### 2.13 [NEW] Individual Program Pages (9 pages) — Oxford English, Sports Academy, Digital Academy, Art & Fashion, French/German/Italian/Croatian Camp, Sea Sun Fun

---

## Phase 3: Conversion Tracking & Forms

> [!IMPORTANT]
> The reservation form connects to the V1 backend (Google Sheets + booking manager). This must work identically.

### 3.1 ReservationForm — Full V1 Parity
- [ ] 2-step form: Page 1 POSTs to `/api/reservations/page1`, Page 2 POSTs to `/api/reservations`
- [ ] Fields: childFirstName, childLastName, parentEmail, parentPhone, city, campType, selectedDate, stayDuration, howDidYouHear, parentName, completedGrade, birthDate, transportNeeded, insurance[], paymentMethod, termsAccepted, isNotRobot, questions
- [ ] Dynamic program selection based on date + availability matrix (11 date slots × varying programs)
- [ ] Adventure package checkbox logic (changes stay duration options)
- [ ] All labels/messages via `useTranslations('Reservation')` 
- [ ] API calls to same V1 backend

### 3.2 Meta Pixel Events (from V1 `ReservationForm.tsx`)
- [ ] On Step 1 complete: `fbq('track', 'InitiateCheckout', { content_name, content_category, num_items })`
- [ ] On Submit success: `fbq('track', 'Lead', { content_name, content_category, value: 890, currency: 'EUR' })`
- [ ] On Submit success: `dataLayer.push({ event: 'generate_lead', value: 890, currency: 'EUR', transaction_id, program })`

### 3.3 Page-Level Pixel Tracking (from V1 `usePixelTracking.ts`)
- [ ] Create `src/hooks/usePixelTracking.ts` — fires `fbq('track','PageView')` per route change
- [ ] Fire `fbq('track','ViewContent')` on high-value pages (reservation, prices)
- [ ] Page category detection matching V1's `getPageCategory()` function
- [ ] Consent gating via `useConsent()` hook

### 3.4 Consent Management (from V1 `useConsent.ts`)
- [ ] Create `src/hooks/useConsent.ts` — localStorage-based consent state
- [ ] On consent update: `gtag('consent','update', {...})` + `dataLayer.push({event:'consent_updated'})`
- [ ] On consent update: `fbq('consent','grant'/'revoke')`
- [ ] Consent types: `analytics` (granted/denied), `marketing` (granted/denied), `necessary` (always granted)

### 3.5 Cookie Consent Component (from V1 `CookieConsent.tsx`)
- [ ] Bottom-right floating banner with "Accept all" + "Manage cookies..."
- [ ] Management dialog with toggles for Analytics/Marketing cookies
- [ ] GDPR compliant: necessary always on, others opt-in
- [ ] Text via `useTranslations('CookieConsent')` (V1 has translations for 8 languages — copy to JSON files)

### 3.6 Contact Form Modal (from V1 `ContactFormModal.tsx`)
- [ ] Contact form with `fbq('track', 'Contact')` on submit

---

## Phase 4: Shared Components

### 4.1 CircularStatistic — Animated SVG counter (About, WhyEuroclub pages)
### 4.2 PhotoGallery — Reusable grid + lightbox (Smještaj, Adventure pages)
### 4.3 ScrollToTop — Route-change scroll + floating button
### 4.4 MobileContactFooter — Sticky bottom bar (phone, WhatsApp)
### 4.5 404 Page

---

## Phase 5: Navbar & Footer V1 Parity

### 5.1 Navbar — O NAMA dropdown (6 items), JUNIOR, TEEN, ADVENTURE, PROGRAMI dropdown, CIJENE, PRIJAVI SE button, language switcher, mobile hamburger
### 5.2 Footer — 4 columns (Brand+Social, Programs, Informacije, Kontakt), bottom copyright bar

---

## Phase 6: SEO Optimization

### 6.1 `generateMetadata()` on every page with OG, Twitter cards, per-locale titles/descriptions
### 6.2 `src/app/sitemap.ts` — Dynamic sitemap matching V1's XML exactly (with hreflang alternates)
### 6.3 `src/app/robots.ts`
### 6.4 FAQ Schema (FAQPage structured data)
### 6.5 OG image, geo tags, AI optimization tags from V1's `index.html`

---

## Phase 7: Multi-Language Content Import

### 7.1 Audit & complete `hr.json` — ensure 100% V1 parity
### 7.2 Import V1 content for: en, de, it, sl, pl, fr, cs → corresponding JSON files
### 7.3 Create `hu.json` and `ru.json` from V1 Hungarian/Russian pages
### 7.4 Update routing pathnames for all locales (using URL map above)

---

## Phase 8: Enhancements (Deferred)
To be defined later: WhatsApp button, sticky CTA, Google Reviews, exit-intent popup, blog, interactive map.

---

## Verification Plan

### Automated Tests
1. **Build verification**: `npm run build` must complete without errors for all locales
2. **URL verification**: Script to check that all V1 sitemap URLs return 200 in V2

### Manual Verification
1. **Side-by-side comparison**: Open V1 and V2 Croatian pages in split browser — text must be identical
2. **Reservation form test**: Submit test booking on V2, verify it appears in Google Sheets
3. **Pixel verification**: Use Meta Pixel Helper browser extension to confirm PageView, InitiateCheckout, Lead events fire
4. **GTM verification**: Use GTM Preview mode to confirm consent events
5. **Mobile responsive**: Test all pages on mobile viewport
6. **Language switching**: Navigate between all 10 locales, verify correct URL paths
7. **User manual QA**: User to review each page for visual + content accuracy
