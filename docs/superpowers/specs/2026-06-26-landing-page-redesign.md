# Excel Imagery — Conversion Landing Page Redesign

**Date:** 2026-06-26  
**Goal:** Transform the current pricing-focused site into a conversion-optimised landing page that hooks visitors and drives them to fill the booking enquiry form.

---

## Page Structure (top to bottom)

```
Header
Hero
StatsBar          ← NEW
Portfolio         ← REPLACES GalleryPreview
Testimonials      ← NEW
Showreel          ← NEW
Pricing           ← existing
Terms             ← existing
WhyUs             ← NEW
BookingForm       ← existing (add urgency line above form)
Footer
WhatsAppButton
BackToTop
```

---

## New Components

### 1. StatsBar
- Slim horizontal band, dark background (`#050505`), gold (`#D4AF37`) on the numbers
- 4 stats separated by thin vertical dividers:
  - `200+` Weddings Covered
  - `7` Years Experience
  - `15+` Cities
  - `4.9★` Google Rating
- Animate numbers counting up on scroll-into-view

### 2. Portfolio
Replaces the existing `GalleryPreview` component entirely.

**Filter tabs:** All | Weddings | Pre-Wedding | Maternity | Burials | Portraits

**Grid:** Masonry-style, 3 cols desktop / 2 cols tablet / 1 col mobile. 18 placeholder images from Unsplash (real people, similar aesthetic). Image data lives in a single array at top of file for easy replacement.

**Image breakdown:**
- Weddings: 8
- Pre-Wedding: 3
- Maternity: 3
- Burials: 2
- Portraits: 2

**Hover state:** Gold overlay + category label fades in.

**Lightbox:** Click any image → full-screen overlay, prev/next arrows, click outside or press Esc to close.

**Placeholder images:** Sourced from Unsplash (royalty-free). Owner replaces URLs in the data array with real work.

### 3. Testimonials
3 cards in a row (stack on mobile).

- **Card 1 — Jamila Precious** (real): Full review text extracted from screenshot `/public/review-jamila.png`. Displayed as styled quote card — NOT as image embed.
- **Card 2 — Gifty Sam** (real): "Excel has been reliable over the years, I give it to them at all time." from `/public/review-gifty.png`. Styled as quote card.
- **Card 3 — fabricated placeholder**: Nigerian name, wedding context. Clearly marked in code as placeholder for easy replacement.

Each card: 5 gold stars, quote text, client name, event type + year.

### 4. WhyUs
3-column grid (stack on mobile). Gold number (01/02/03) instead of icons.

- **01 — Cinematic Eye**: We don't just shoot — we direct your story.
- **02 — On-time Delivery**: Your gallery delivered within the agreed timeline. Always.
- **03 — Personal Experience**: From first enquiry to final delivery, Promise is with you.

---

## Existing Component Changes

### Hero
- Add `id="home"` for nav anchor
- Minor copy: change "View Booking" CTA to "See Our Work" linking to `#portfolio`

### BookingForm
- Add urgency line above form: *"Dates fill up fast — especially December and February. Secure yours today."*

---

## Design Constraints
- All new components must match existing dark editorial aesthetic: `#050505` / `#000` backgrounds, white text, `#D4AF37` gold accents, serif + tracking typography
- Framer Motion used for all animations (already installed)
- No new dependencies

---

### 5. Showreel / Reels Section
Sits between Testimonials and Pricing — right after social proof, before the ask.

**Layout:** A featured hero reel at the top (full-width embed, autoplay muted loop), followed by a 3-column grid of shorter event reels below it.

**Video source:** YouTube or Instagram embeds (no hosting cost, no bandwidth). Owner drops in their YouTube/Instagram reel URLs into a data array. Placeholder uses a royalty-free cinematic wedding reel from YouTube.

**Featured reel:** Large, cinematic — 16:9 embed with a thin gold border, subtle caption: *"Watch how we tell your story."*

**Reel grid:** 3 cards, each with a thumbnail-style embed + event label (e.g. "Chidi & Ada — Traditional Wedding, 2024"). Placeholder labels used until real content is provided.

**Mobile:** Featured reel stacks full-width, grid becomes single column.

---

## Out of Scope
- Blog / journal section
- Multi-page routing
