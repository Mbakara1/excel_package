import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

// Cinematic Wedding Teaser Films hosted on Cloudinary
const CINEMATIC_VIDEOS = [
  {
    id: 'enwongo_trad_teaser',
    title: 'Enwongo & Partner — Traditional Teaser',
    videoUrl: 'https://res.cloudinary.com/lyc8ft9s/video/upload/q_90,f_auto/enwongo_trad_teaser.mp4',
    posterUrl: 'https://res.cloudinary.com/lyc8ft9s/video/upload/q_90,f_auto,so_2/enwongo_trad_teaser.jpg',
  },
  {
    id: 'johnny_trado',
    title: 'Johnny & Partner — Traditional Teaser',
    videoUrl: 'https://res.cloudinary.com/lyc8ft9s/video/upload/q_90,f_auto/johnny_trado.mp4',
    posterUrl: 'https://res.cloudinary.com/lyc8ft9s/video/upload/q_90,f_auto,so_2/johnny_trado.jpg',
  }
];

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
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F864307963331902%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Reel' },
  { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1012334547986420%2F&show_text=false&width=267&t=0', w: 267, h: 476, label: 'Wedding Reel' },
];

// Uses exact w/h from the FB embed URL to set a pixel-perfect aspect ratio.
// Iframe is oversized and shifted up to clip FB header (~62px) and footer (~50px).
const FBEmbed = ({ src, w, h }) => {
  const ratio = (h / w) * 100;
  const isPortrait = h > w;
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${ratio - 12}%`, overflow: 'hidden' }}>
      <iframe
        src={src}
        style={{
          border: 'none',
          overflow: 'hidden',
          position: 'absolute',
          top: '-8%',
          left: 0,
          width: '100%',
          height: '116%',
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

const Showreel = () => {
  const [videoState, setVideoState] = useState({
    isOpen: false,
    url: '',
    poster: ''
  });

  return (
    <section className="bg-black py-48 border-t-4 border-white/5">
      <div className="section-container">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">In Motion</span>
          <h2 className="text-white leading-[1.1]">
            Watch How We <br /><span className="serif-italic font-normal">Tell Your Story</span>
          </h2>
        </div>

        {/* Cinematic Teasers — 2-column landscape grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CINEMATIC_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 overflow-hidden cursor-pointer bg-[#050505] shadow-2xl transition-all duration-500"
              onClick={() => setVideoState({
                isOpen: true,
                url: video.videoUrl,
                poster: video.posterUrl
              })}
            >
              {/* Aspect Ratio Container (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={video.posterUrl}
                  alt={video.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 brightness-[0.7] group-hover:brightness-50"
                  loading="lazy"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover:bg-[#D4AF37] transition-all duration-300 shadow-xl"
                  >
                    <Play className="w-6 h-6 text-[#D4AF37] group-hover:text-black fill-current translate-x-[2px] transition-colors duration-300" />
                  </motion.div>
                </div>
              </div>
              
              {/* Title Bar */}
              <div className="px-5 py-4 bg-[#080808] border-t border-white/5 flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {video.title}
                </p>
                <span className="text-[9px] font-bold tracking-[0.1em] text-[#D4AF37]/60 uppercase">Cinematic Teaser</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Divider / Label for archive highlights */}
        <div className="mb-16 border-t border-white/10 pt-16">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-4 block">Archive & Facebook Highlights</span>
        </div>

        {/* Featured — full width landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-white/10 overflow-hidden mb-20 hover:border-white/30 transition-all duration-500"
        >
        <FBEmbed src={FEATURED.src} w={FEATURED.w} h={FEATURED.h} />
        <div className="px-4 py-3 bg-[#050505]">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">{FEATURED.label}</p>
        </div>
      </motion.div>

      {/* Reel grid — 4 cols of portrait social reels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
        {REELS.map((reel, i) => (
          <motion.div
            key={reel.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300"
          >
            <FBEmbed src={reel.src} w={reel.w} h={reel.h} />
            <div className="px-4 py-3 bg-[#050505]">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40">{reel.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
      
      <VideoModal
        isOpen={videoState.isOpen}
        videoUrl={videoState.url}
        posterUrl={videoState.poster}
        onClose={() => setVideoState({ ...videoState, isOpen: false })}
      />
    </section>
  );
};

export default Showreel;
