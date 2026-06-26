import React from 'react';
import { motion } from 'framer-motion';

// Featured — landscape (16:9), shown full width at top
const FEATURED = {
  src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpromise.mbakara%2Fvideos%2F478648703623527%2F&show_text=false&width=560&t=0',
  w: 560, h: 314,
  label: 'Excel Imagery — Cinematic Showreel',
};

// w/h from the FB embed URL — used to set exact aspect ratio per card
const REELS = [
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1331476399027615%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Reel' },
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1709675653807365%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Coverage' },
  { src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpromise.mbakara%2Fvideos%2F1435881600256019%2F&show_text=false&width=560&t=0', w: 560, h: 314, label: 'Cinematic Edit' },
  { src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpromise.mbakara%2Fvideos%2F864345431656648%2F&show_text=false&width=560&t=0', w: 560, h: 314, label: 'Wedding Reel' },
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F864307963331902%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Reel' },
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1012334547986420%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Reel' },
];

// Uses exact w/h from the FB embed URL to set a pixel-perfect aspect ratio.
// The iframe is slightly oversized and shifted up to hide the FB header bar.
const FBEmbed = ({ src, w, h }) => {
  const ratio = (h / w) * 100;
  const isPortrait = h > w;
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${ratio}%`, overflow: 'hidden' }}>
      <iframe
        src={src}
        style={{
          border: 'none',
          overflow: 'hidden',
          position: 'absolute',
          top: isPortrait ? '-8%' : 0,
          left: 0,
          width: '100%',
          height: isPortrait ? '116%' : '100%',
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
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

      {/* Featured — full width landscape */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border border-[#D4AF37]/30 overflow-hidden mb-20"
      >
        <FBEmbed src={FEATURED.src} w={FEATURED.w} h={FEATURED.h} />
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
            <FBEmbed src={reel.src} w={reel.w} h={reel.h} />
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
