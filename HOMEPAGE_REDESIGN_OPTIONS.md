# Homepage Redesign Options - SAVED FOR LATER

## OPTION A: Tighten Layout (IMPLEMENTED in homepagev2)
**Status:** ✅ COMPLETED

### Changes Made:
- Reduced `py-24` → `py-12` across all sections
- Removed `min-h-[70vh]`, `min-h-[80vh]`, `min-h-screen` constraints
- Reduced font sizes slightly for tighter visual hierarchy
- Let content flow naturally without forcing huge empty spaces

### Components Modified:
- HomeUnforgettableV2
- HomeAdventureV2
- HomeStoryV2
- HomeFutureV2
- HomeParentsV2
- HomeGalleryV2
- HomeTestimonialsV2

---

## OPTION B: Restructure + Visual Polish (SAVED)
**Status:** ⏳ PENDING

### Proposed New Section Order:
```
1. HERO (keep as-is)
   ↓
2. STATS BAR (NEW - floating cards with 133k, 35 years, etc.)
   ↓
3. PROGRAM CARDS (NEW - show 3 featured programs visually)
   ↓
4. UNFORGETTABLE EXPERIENCE (keep parallax glass)
   ↓
5. WHY PARENTS LOVE US (move up, redesign)
   ↓
6. GALLERY MASONRY (redesign - no blue bar)
   ↓
7. TESTIMONIALS (keep, maybe add reviewer photos)
   ↓
8. FINAL CTA (big "Prijavi se" section)
```

### Specific Changes:
1. **Add Stats Bar** (Below Hero)
   - 133k polaznika, 35 godina tradicije, 20 sati radionice, 1 resort
   - Floating cards with icons, slight overlap on hero section

2. **Program Preview Cards** (Replace Adventure Section)
   - Oxford English, Sports Academy, Digital Academy
   - Each card: image, title, short desc, "Saznaj više" link

3. **Redesign Gallery**
   - Remove blue bar
   - Masonry grid spanning full width
   - 6-8 images in uneven grid
   - Hover zoom effect

4. **Move Parents Section Up**
   - Background image with glass overlay
   - 3 bullet points (safety, education, fun)

5. **Add Final CTA Section**
   - "Spremni za najbolje ljeto?"
   - Two buttons: "7-12 godina" | "13-17 godina"
   - Sunset gradient or beach image background

---

## OPTION C: Full Visual Redesign (SAVED)
**Status:** ⏳ PENDING

### Ideas:
1. **Animated Counters** for stats (count up animation)
2. **Overlapping Sections** (next section overlaps previous by 50px)
3. **Floating Elements** (animated bubbles/shapes throughout)
4. **Diagonal Dividers** between sections
5. **Parallax Effects** on images
6. **Video Background** on more sections
7. **Interactive Hover States** on cards
8. **Gradient Text** on headings
9. **Sticky Navigation** enhancements
10. **Micro-interactions** on buttons

---

## How to Access homepagev2:
URL: `http://localhost:3000/hr/homepagev2`

## To Implement Option B or C Later:
1. Create `homepagev3` for Option B
2. Create `homepagev4` for Option C
3. Keep original homepage intact for comparison
