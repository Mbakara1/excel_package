import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── SWAP THESE URLS WITH UPDATED FACEBOOK REEL LINKS AS NEEDED ──────────────
const FEATURED_VIDEO = 'https://www.facebook.com/reel/1511446293261227';

const REEL_GRID = [
  { url: 'https://www.facebook.com/watch/?v=1315540819750644', label: 'Wedding Coverage — Excel Imagery' },
  { url: 'https://www.facebook.com/watch/?v=4050018845271475', label: 'Cinematic Edit — Excel Imagery' },
  { url: 'https://www.facebook.com/reel/1515366417053891',    label: 'Wedding Reel — Excel Imagery' },
];
// ─────────────────────────────────────────────────────────────────────────────

const FBVideo = ({ url }) => {
  useEffect(() => {
    if (window.FB) window.FB.XFBML.parse();
  }, [url]);

  return (
    <div
      className="fb-video w-full"
      data-href={url}
      data-width="auto"
      data-show-text="false"
      data-autoplay="false"
    />
  );
};

const Showreel = () => (
  <section className="bg-black py-48 border-t-4 border-white/5">
    <div className="section-container">
      <div className="mb-20">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">In Motion</span>
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
