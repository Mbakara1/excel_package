import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Portraits'];

// Replace src values with real images — keep the category/alt fields
const IMAGES = [
  // Favorite Portrait - First in All (1)
  { id: 11, src: '/images/portfolio/portrait-man-bowtie.jpg', category: 'Portraits', alt: 'Studio portrait of smiling gentleman in navy pinstripe suit and bowtie' },

  // Pre-Wedding (3)
  { id: 6,  src: '/images/portfolio/_DSC4411.jpg', category: 'Pre-Wedding', alt: 'Couple in casual wear walking hand-in-hand down an outdoor street' },
  { id: 7,  src: '/images/portfolio/_DSC4448.jpg', category: 'Pre-Wedding', alt: 'A close couple in matching tan coats sharing an intimate moment, hugging and smiling' },
  { id: 21, src: '/images/portfolio/_DSC4482.jpg', category: 'Pre-Wedding', alt: 'A close-up portrait of a couple in matching tan coats smiling at the camera' },

  // Weddings (10)
  { id: 1,  src: '/images/portfolio/DSC00139.jpg', category: 'Weddings', alt: 'Romantic close-up of a couple in traditional white and turquoise lace outfits embracing' },
  { id: 2,  src: '/images/portfolio/DSC00410_060017.jpg', category: 'Weddings', alt: 'Full-length portrait of a couple standing outdoors on a lawn in matching traditional white and turquoise green attire' },
  { id: 3,  src: '/images/portfolio/DSC01245.jpg', category: 'Weddings', alt: 'A sweet moment of a groom kissing his bride on the cheek in matching brown traditional attire and orange beads' },
  { id: 4,  src: '/images/portfolio/EXL04364.jpg', category: 'Weddings', alt: 'A couple posing on a balcony overlooking the city, man in native outfit holding a walking stick, woman in a matching brown/gold lace gown' },
  { id: 5,  src: '/images/portfolio/EXL04411.jpg', category: 'Weddings', alt: 'A couple standing indoors in matching brown and gold traditional attire in front of a wall painting' },
  { id: 8,  src: '/images/portfolio/IMG_5827.jpg', category: 'Weddings', alt: 'Close-up portrait of a woman smiling, wearing a lavender-purple gele headtie and matching lace outfit' },
  { id: 9,  src: '/images/portfolio/IMG_5924.jpg', category: 'Weddings', alt: 'A couple posing; the woman in a purple lace dress and gele, and the man in a white native outfit with a walking stick' },
  { id: 10, src: '/images/portfolio/IMG_5948.jpg', category: 'Weddings', alt: 'A group photo of a bridal party, with bridesmaids in red dresses posing around the couple in a large hotel lobby with a blue chandelier' },
  { id: 12, src: '/images/portfolio/_DSC4513.jpg', category: 'Weddings', alt: 'Close-up of a couple in matching black traditional attire, smiling and leaning in together' },
  { id: 13, src: '/images/portfolio/_DSC4526.jpg', category: 'Weddings', alt: 'A couple posing indoors with the man seated in black native outfit and the woman standing beside him in a black lace dress' }
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
