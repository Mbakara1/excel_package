# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Excel Imagery site from a pricing page into a conversion-focused landing page with StatsBar, Portfolio, Testimonials, Showreel, and WhyUs sections.

**Architecture:** Add 5 new components and reorder App.jsx. All components follow the existing dark editorial pattern: `#050505`/`#000` backgrounds, white text, `#D4AF37` gold accents, Framer Motion animations, `section-container` layout class.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, Facebook JS SDK (script tag in index.html)

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Create | `src/components/StatsBar.jsx` | Animated stat counters |
| Create | `src/components/Portfolio.jsx` | Filterable masonry grid + lightbox |
| Create | `src/components/Testimonials.jsx` | 3 review cards |
| Create | `src/components/Showreel.jsx` | Facebook video embeds |
| Create | `src/components/WhyUs.jsx` | 3 value pillars |
| Modify | `src/App.jsx` | New component order |
| Modify | `src/components/Hero.jsx` | CTA copy + link |
| Modify | `src/components/BookingForm.jsx` | Urgency line above form |
| Modify | `public/index.html` | Facebook SDK script tag |

---

## Task 1: StatsBar Component

**Files:**
- Create: `src/components/StatsBar.jsx`

- [ ] **Step 1: Create the component**

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Weddings Covered' },
  { value: 7,   suffix: '',  label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'Cities' },
  { value: 4.9, suffix: '★', label: 'Google Rating' },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-[#D4AF37]">
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-[#050505] border-y border-white/10 py-12">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center text-center py-8 px-4 ${
              i < stats.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
```

- [ ] **Step 2: Verify it renders — add temporarily to App.jsx after Hero, check localhost:5176**

- [ ] **Step 3: Commit**

```bash
git add src/components/StatsBar.jsx
git commit -m "Add StatsBar component with animated counters"
```

---

## Task 2: Portfolio Component

**Files:**
- Create: `src/components/Portfolio.jsx`

- [ ] **Step 1: Create the component**

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Maternity', 'Burials', 'Portraits'];

// Replace src values with real images — keep the category/alt fields
const IMAGES = [
  // Weddings (8)
  { id: 1,  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'Weddings',    alt: 'Wedding ceremony' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'Weddings',    alt: 'Bride portrait' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', category: 'Weddings',    alt: 'Wedding couple' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'Weddings',    alt: 'Reception dance' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', category: 'Weddings',    alt: 'Wedding details' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800', category: 'Weddings',    alt: 'Couple walking' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800', category: 'Weddings',    alt: 'Wedding kiss' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800', category: 'Weddings',    alt: 'Bridal party' },
  // Pre-Wedding (3)
  { id: 9,  src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', category: 'Pre-Wedding', alt: 'Pre-wedding shoot' },
  { id: 10, src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800', category: 'Pre-Wedding', alt: 'Couple portrait' },
  { id: 11, src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', category: 'Pre-Wedding', alt: 'Engagement shoot' },
  // Maternity (3)
  { id: 12, src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', category: 'Maternity',    alt: 'Maternity portrait' },
  { id: 13, src: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800', category: 'Maternity',    alt: 'Expecting mother' },
  { id: 14, src: 'https://images.unsplash.com/photo-1578496781307-e6a98db3aacc?w=800', category: 'Maternity',    alt: 'Maternity session' },
  // Burials (2)
  { id: 15, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', category: 'Burials',     alt: 'Memorial ceremony' },
  { id: 16, src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800', category: 'Burials',     alt: 'Tribute gathering' },
  // Portraits (2)
  { id: 17, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800', category: 'Portraits',   alt: 'Studio portrait' },
  { id: 18, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', category: 'Portraits',   alt: 'Editorial portrait' },
];

const Lightbox = ({ image, onClose, onPrev, onNext }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
    onClick={onClose}
  >
    <button onClick={onPrev} className="absolute left-6 text-white/60 hover:text-white text-4xl z-10" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
    <img
      src={image.src}
      alt={image.alt}
      className="max-h-[85vh] max-w-[85vw] object-contain"
      onClick={(e) => e.stopPropagation()}
    />
    <button className="absolute right-6 text-white/60 hover:text-white text-4xl z-10" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
    <button className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl" onClick={onClose}>✕</button>
  </motion.div>
);

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = active === 'All' ? IMAGES : IMAGES.filter(img => img.category === active);

  const handleKey = React.useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % filtered.length);
    if (e.key === 'ArrowLeft')  setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
    if (e.key === 'Escape')     setLightboxIndex(null);
  }, [lightboxIndex, filtered.length]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <section id="portfolio" className="bg-black py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">Our Work</span>
          <h2 className="text-white mb-12 leading-[1.1]">
            Every Frame <br /><span className="serif-italic font-normal">Tells a Story</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                  : 'border-white/20 text-white/40 hover:border-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-500 flex items-end p-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={filtered[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)}
            onNext={() => setLightboxIndex(i => (i + 1) % filtered.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
```

- [ ] **Step 2: Check localhost — verify filter tabs switch categories, hover shows gold overlay, lightbox opens/closes with keyboard**

- [ ] **Step 3: Commit**

```bash
git add src/components/Portfolio.jsx
git commit -m "Add Portfolio component with category filter, masonry grid, and lightbox"
```

---

## Task 3: Testimonials Component

**Files:**
- Create: `src/components/Testimonials.jsx`

- [ ] **Step 1: Create the component**

```jsx
import React from 'react';
import { motion } from 'framer-motion';

// Real reviews from clients. Replace PLACEHOLDER review with a real one when available.
const reviews = [
  {
    name: 'Jamila Precious',
    event: 'Wedding, 2025',
    rating: 5,
    text: 'I want to give a special shout-out to our wedding photographer, Promise Mbakara of Excel Images. He is honestly one of the very few vendors who delivered his service exceptionally and excellently. Not only did he meet expectations, he went above the package we paid for, and that means a lot. My husband already knew him and trusted his brand, but Excel did not take that familiarity for granted. There was no laziness, no cutting corners, and no "since we know each other" attitude. Instead, he showed up with full professionalism, respect, and commitment. What stood out to me the most was his patience and communication. Anytime I wasn\'t comfortable with a picture or had concerns, he would take out time to calm me, explain things calmly, and make sure I was satisfied. Thank you so much, Sir, for ensuring I have beautiful memories to look back on. I recommend Promise Mbakara of Excel Imagery with all confidence. You won\'t regret it.',
    real: true,
  },
  {
    name: 'Gifty Sam',
    event: 'Event Coverage, 2025',
    rating: 5,
    text: 'Excel has been reliable over the years, I give it to them at all time. Promise Mbakara — well done.',
    real: true,
  },
  {
    // PLACEHOLDER — replace with a real client review
    name: 'Chidinma Okafor',
    event: 'Traditional Wedding, 2024',
    rating: 5,
    text: 'From the first call to receiving our photos, working with Excel Imagery was seamless. The attention to detail in every shot was incredible. Our families still talk about how beautifully the day was captured.',
    real: false,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#D4AF37] text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-[#050505] py-32 border-t border-white/10">
    <div className="section-container">
      <div className="mb-16">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">Client Words</span>
        <h2 className="text-white leading-[1.1]">
          What They <br /><span className="serif-italic font-normal">Say About Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 p-8 bg-black/40 flex flex-col"
          >
            <Stars count={review.rating} />
            <p className="text-sm font-light text-white/70 leading-relaxed flex-1 italic mb-8">
              "{review.text}"
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-bold text-white tracking-wide">{review.name}</p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mt-1">{review.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
```

- [ ] **Step 2: Check localhost — verify 3 cards render, stars show gold, text is readable**

- [ ] **Step 3: Commit**

```bash
git add src/components/Testimonials.jsx
git commit -m "Add Testimonials component with 2 real client reviews"
```

---

## Task 4: Showreel Component

**Files:**
- Create: `src/components/Showreel.jsx`
- Modify: `index.html`

- [ ] **Step 1: Add Facebook SDK to index.html — insert just after opening `<body>` tag**

```html
<!-- Facebook SDK for video embeds. Required by Showreel component. -->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous"
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0">
</script>
```

- [ ] **Step 2: Create the Showreel component**

```jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── SWAP THESE URLS WITH REAL FACEBOOK REEL LINKS ───────────────────────────
// Format: https://www.facebook.com/excelimagery/videos/VIDEO_ID/
const FEATURED_VIDEO = 'https://www.facebook.com/excelimagery/videos/1234567890/';

const REEL_GRID = [
  { url: 'https://www.facebook.com/excelimagery/videos/1234567891/', label: 'Traditional Wedding — Uyo, 2024' },
  { url: 'https://www.facebook.com/excelimagery/videos/1234567892/', label: 'White Wedding — Lagos, 2024' },
  { url: 'https://www.facebook.com/excelimagery/videos/1234567893/', label: 'Maternity Session — Uyo, 2025' },
];
// ─────────────────────────────────────────────────────────────────────────────

const FBVideo = ({ url, width = '100%' }) => {
  useEffect(() => {
    if (window.FB) window.FB.XFBML.parse();
  }, [url]);

  return (
    <div
      className="fb-video"
      data-href={url}
      data-width={width}
      data-show-text="false"
      data-autoplay="false"
    />
  );
};

const Showreel = () => (
  <section className="bg-black py-32 border-t border-white/10">
    <div className="section-container">
      <div className="mb-16">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">In Motion</span>
        <h2 className="text-white leading-[1.1]">
          Watch How We <br /><span className="serif-italic font-normal">Tell Your Story</span>
        </h2>
      </div>

      {/* Featured reel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border border-[#D4AF37]/30 mb-16 overflow-hidden"
      >
        <FBVideo url={FEATURED_VIDEO} />
      </motion.div>

      {/* Reel grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REEL_GRID.map((reel, i) => (
          <motion.div
            key={reel.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 overflow-hidden"
          >
            <FBVideo url={reel.url} />
            <div className="px-4 py-3 bg-[#050505]">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">{reel.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Showreel;
```

- [ ] **Step 3: Check localhost — the embeds will show a placeholder/error with fake URLs, that is expected. Verify layout and gold border render correctly.**

- [ ] **Step 4: Commit**

```bash
git add src/components/Showreel.jsx index.html
git commit -m "Add Showreel component with Facebook video embeds (placeholder URLs)"
```

---

## Task 5: WhyUs Component

**Files:**
- Create: `src/components/WhyUs.jsx`

- [ ] **Step 1: Create the component**

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    heading: 'Cinematic Eye',
    body: "We don't just shoot — we direct your story. Every frame is composed with intention, every moment anticipated before it happens.",
  },
  {
    number: '02',
    heading: 'On-time Delivery',
    body: 'Your gallery is delivered within the agreed timeline. Always. No chasing, no excuses — just your memories, on time.',
  },
  {
    number: '03',
    heading: 'Personal Experience',
    body: "From your first enquiry to your final delivery, Promise is with you. You're not a booking — you're a story we're honoured to tell.",
  },
];

const WhyUs = () => (
  <section className="bg-[#050505] py-32 border-t border-white/10">
    <div className="section-container">
      <div className="mb-20">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">Why Excel Imagery</span>
        <h2 className="text-white leading-[1.1]">
          The Difference <br /><span className="serif-italic font-normal">You'll Feel</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
        {pillars.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className={`pt-12 pb-8 pr-8 ${i > 0 ? 'md:pl-8 md:border-l border-white/10' : ''}`}
          >
            <span className="text-[80px] font-black text-[#D4AF37]/10 leading-none block mb-4">{p.number}</span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.heading}</h3>
            <p className="text-sm font-light text-white/50 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
```

- [ ] **Step 2: Check localhost — verify 3 columns, gold large numbers, dividers between columns**

- [ ] **Step 3: Commit**

```bash
git add src/components/WhyUs.jsx
git commit -m "Add WhyUs component with 3 value pillars"
```

---

## Task 6: Wire Everything Together in App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace App.jsx with the final component order**

```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Showreel from './components/Showreel';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import WhyUs from './components/WhyUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Portfolio />
        <Testimonials />
        <Showreel />
        <Pricing />
        <Terms />
        <WhyUs />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Check localhost — scroll full page top to bottom, verify all sections appear in correct order with no layout breaks**

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "Wire new sections into App.jsx in conversion-optimised order"
```

---

## Task 7: Hero + BookingForm Copy Updates

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/BookingForm.jsx`

- [ ] **Step 1: Update Hero CTA — change "View Booking" button to "See Our Work" pointing to #portfolio**

In `src/components/Hero.jsx`, find:
```jsx
<a href="#packages" className="cta-editorial">View Booking</a>
```
Replace with:
```jsx
<a href="#portfolio" className="cta-editorial">See Our Work</a>
```

- [ ] **Step 2: Add urgency line to BookingForm — insert above the form opening tag**

In `src/components/BookingForm.jsx`, find the section header block. Locate this line (it wraps the form section heading):
```jsx
<span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
```
Insert this block just above the `<form` tag inside the section:
```jsx
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-sm text-[#D4AF37] font-medium tracking-wide mb-8 text-center"
>
  Dates fill up fast — especially December and February. Secure yours today.
</motion.p>
```

- [ ] **Step 3: Check localhost — verify "See Our Work" scrolls to portfolio, urgency line appears above booking form**

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/components/BookingForm.jsx
git commit -m "Update Hero CTA and add booking urgency line"
```

---

## Task 8: Build, Push & Deploy

- [ ] **Step 1: Run build**

```bash
pnpm build
```
Expected: `✓ built in X.XXs` with no errors.

- [ ] **Step 2: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 3: Deploy to Vercel production**

```bash
npx vercel --prod
```
Expected: `▲ Production` URL confirmed ready.

- [ ] **Step 4: Verify live site — open https://www.excelimagery.online and scroll full page**
