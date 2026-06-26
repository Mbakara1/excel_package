import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Maternity', 'Burials', 'Portraits'];

// Replace src values with real images — keep the category/alt fields
const IMAGES = [
  // Favorite Portrait - First in All (1)
  { id: 11, src: '/images/portfolio/portrait-man-bowtie.jpg', category: 'Portraits', alt: 'Studio portrait of smiling gentleman in navy pinstripe suit and bowtie' },

  // Weddings (5)
  { id: 1,  src: '/images/portfolio/wedding-traditional-couple.jpg', category: 'Weddings', alt: 'Traditional wedding couple photoshoot' },
  { id: 2,  src: '/images/portfolio/wedding-traditional-throne.jpg', category: 'Weddings', alt: 'Traditional wedding couple seated on thrones' },
  { id: 3,  src: '/images/portfolio/wedding-traditional-standing.jpg', category: 'Weddings', alt: 'Traditional wedding couple portrait standing' },
  { id: 4,  src: '/images/portfolio/wedding-traditional-blessing.jpg', category: 'Weddings', alt: 'Traditional wedding blessing ceremony' },
  { id: 5,  src: '/images/portfolio/wedding-cake-cutting.jpg', category: 'Weddings', alt: 'Bride and groom cutting wedding cake' },
  
  // Pre-Wedding (2)
  { id: 6,  src: '/images/portfolio/pre-wedding-champagne.jpg', category: 'Pre-Wedding', alt: 'Pre-wedding couple clinking champagne glasses' },
  { id: 7,  src: '/images/portfolio/pre-wedding-embrace.jpg', category: 'Pre-Wedding', alt: 'Pre-wedding couple warm studio embrace' },
  
  // Maternity (2)
  { id: 8,  src: '/images/portfolio/maternity-white-draped.jpg', category: 'Maternity', alt: 'Maternity studio shoot with white draped fabric' },
  { id: 9,  src: '/images/portfolio/maternity-bw-studio.jpg', category: 'Maternity', alt: 'Black and white maternity portrait' },
  
  // Burials (1)
  { id: 10, src: '/images/portfolio/burial-memorial-banner.jpg', category: 'Burials', alt: 'Burial memorial banner and tribute photoshoot' },
  
  // Portraits (7)
  { id: 12, src: '/images/portfolio/portrait-family-maroon.jpg', category: 'Portraits', alt: 'Family studio portrait in matching maroon outfits' },
  { id: 13, src: '/images/portfolio/portrait-couple-christmas-white.jpg', category: 'Portraits', alt: 'Couple studio portrait in white shirts by Christmas tree' },
  { id: 14, src: '/images/portfolio/portrait-couple-christmas-plaid.jpg', category: 'Portraits', alt: 'Couple studio portrait in plaid pajamas by Christmas tree' },
  { id: 15, src: '/images/portfolio/portrait-man-polo.jpg', category: 'Portraits', alt: 'Male studio portrait in dark polo shirt' },
  { id: 16, src: '/images/portfolio/portrait-woman-black-dress.jpg', category: 'Portraits', alt: 'Female portrait in elegant black structured dress' },
  { id: 17, src: '/images/portfolio/portrait-woman-lace-chin.jpg', category: 'Portraits', alt: 'Close-up female studio portrait in black lace with hand on chin' },
  { id: 18, src: '/images/portfolio/portrait-woman-lace-sitting.jpg', category: 'Portraits', alt: 'Sitting female studio portrait in black lace' },
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
    <section id="portfolio" className="bg-black py-48">
      <div className="section-container">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">Our Work</span>
          <h2 className="text-white mb-16 leading-[1.1]">
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
