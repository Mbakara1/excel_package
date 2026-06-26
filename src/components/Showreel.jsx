import React from 'react';
import { motion } from 'framer-motion';

// Facebook plugin embed URLs — use /plugins/video.php format for reliable embedding
// To update: get embed code from Facebook → Share → Embed → copy the src URL
const FEATURED = {
  src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1511446293261227%2F&show_text=false&width=267&t=0',
  label: 'Featured Reel — Excel Imagery',
};

const REELS = [
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1315540819750644&show_text=false&width=267&t=0',
    label: 'Wedding Coverage — Excel Imagery',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D4050018845271475&show_text=false&width=267&t=0',
    label: 'Cinematic Edit — Excel Imagery',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1515366417053891%2F&show_text=false&width=267&t=0',
    label: 'Wedding Reel — Excel Imagery',
  },
];

const FBEmbed = ({ src, className = '' }) => (
  <iframe
    src={src}
    width="100%"
    style={{ border: 'none', overflow: 'hidden', display: 'block' }}
    scrolling="no"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    className={className}
  />
);

const Showreel = () => (
  <section className="bg-black py-48 border-t-4 border-white/5">
    <div className="section-container">
      <div className="mb-20">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">In Motion</span>
        <h2 className="text-white leading-[1.1]">
          Watch How We <br /><span className="serif-italic font-normal">Tell Your Story</span>
        </h2>
      </div>

      {/* Featured reel — centred portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-20"
      >
        <div className="border border-[#D4AF37]/30 overflow-hidden w-full max-w-sm">
          <FBEmbed src={FEATURED.src} className="h-[476px]" />
          <div className="px-4 py-3 bg-[#050505]">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">{FEATURED.label}</p>
          </div>
        </div>
      </motion.div>

      {/* Reel grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REELS.map((reel, i) => (
          <motion.div
            key={reel.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 overflow-hidden"
          >
            <FBEmbed src={reel.src} className="h-[476px]" />
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
