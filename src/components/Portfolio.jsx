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
  { id: 14, src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800', category: 'Maternity',    alt: 'Maternity session' },
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
    <button
      className="absolute left-6 text-white/60 hover:text-white text-4xl z-10"
      onClick={(e) => { e.stopPropagation(); onPrev(); }}
    >‹</button>
    <img
      src={image.src}
      alt={image.alt}
      className="max-h-[85vh] max-w-[85vw] object-contain"
      onClick={(e) => e.stopPropagation()}
    />
    <button
      className="absolute right-6 text-white/60 hover:text-white text-4xl z-10"
      onClick={(e) => { e.stopPropagation(); onNext(); }}
    >›</button>
    <button
      className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
      onClick={onClose}
    >✕</button>
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
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">Our Work</span>
          <h2 className="text-white mb-12 leading-[1.1]">
            Every Frame <br /><span className="serif-italic font-normal">Tells a Story</span>
          </h2>
        </div>

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
