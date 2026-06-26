import React from 'react';
import { motion } from 'framer-motion';

// Featured — landscape (16:9), shown full width at top
const FEATURED = {
  src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpromise.mbakara%2Fvideos%2F478648703623527%2F&show_text=false&width=560&t=0',
  label: 'Excel Imagery — Cinematic Showreel',
};

// Portrait reels (9:16) — shown in grid below
const REELS = [
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1511446293261227%2F&show_text=false&width=267&t=0',
    label: 'Wedding Reel',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1315540819750644&show_text=false&width=267&t=0',
    label: 'Wedding Coverage',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpromise.mbakara%2Fvideos%2F4050018845271475%2F&show_text=false&width=267&t=0',
    label: 'Cinematic Edit',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1515366417053891%2F&show_text=false&width=267&t=0',
    label: 'Wedding Reel',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F864307963331902%2F&show_text=false&width=267&t=0',
    label: 'Wedding Reel',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1012334547986420%2F&show_text=false&width=267&t=0',
    label: 'Wedding Reel',
  },
];

// Wrapper clips the Facebook header bar off the top so video content leads.
// The iframe is taller than the container and shifted up by 62px (FB header height).
const FBEmbed = ({ src, landscape = false }) => (
  <div style={{ height: landscape ? '480px' : '700px', overflow: 'hidden', position: 'relative' }}>
    <iframe
      src={src}
      width="100%"
      style={{
        border: 'none',
        overflow: 'hidden',
        display: 'block',
        position: 'absolute',
        top: landscape ? 0 : '-62px',
        height: landscape ? '480px' : '824px',
      }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  </div>
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

      {/* Featured — full width landscape */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border border-[#D4AF37]/30 overflow-hidden mb-20"
      >
        <FBEmbed src={FEATURED.src} landscape />
        <div className="px-4 py-3 bg-[#050505]">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">{FEATURED.label}</p>
        </div>
      </motion.div>

      {/* Portrait reel grid — 3 cols × 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REELS.map((reel, i) => (
          <motion.div
            key={reel.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 overflow-hidden"
          >
            <FBEmbed src={reel.src} />
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
