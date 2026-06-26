import React from 'react';
import { motion } from 'framer-motion';

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#D4AF37] text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-[#050505] py-48 border-t-4 border-white/5">
    <div className="section-container">
      <div className="mb-20">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">Client Words</span>
        <h2 className="text-white leading-[1.1]">
          What They <br /><span className="serif-italic font-normal">Say About Us</span>
        </h2>
      </div>

      {/* Asymmetric layout: large screenshot card + two stacked cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left — Jamila: full screenshot, tall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-black/40 flex flex-col overflow-hidden"
        >
          <div className="p-8 pb-4">
            <Stars count={5} />
          </div>
          <img
            src="/review-jamila.png"
            alt="Review from Jamila Precious"
            className="w-full object-contain px-6"
          />
          <div className="p-8 pt-4 border-t border-white/10 mt-auto">
            <p className="text-sm font-bold text-white tracking-wide">Jamila Precious</p>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mt-1">Wedding, 2025</p>
          </div>
        </motion.div>

        {/* Right column — two stacked cards */}
        <div className="flex flex-col gap-6">

          {/* Gifty Sam — screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-black/40 flex flex-col overflow-hidden"
          >
            <div className="p-8 pb-4">
              <Stars count={5} />
            </div>
            <img
              src="/review-gifty.png"
              alt="Review from Gifty Sam"
              className="w-full object-contain px-6"
            />
            <div className="p-8 pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-white tracking-wide">Gifty Sam</p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mt-1">Event Coverage, 2025</p>
            </div>
          </motion.div>

          {/* PLACEHOLDER — replace with a real client review screenshot or text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 p-8 bg-black/40 flex flex-col flex-1"
          >
            <Stars count={5} />
            <p className="text-sm font-light text-white/70 leading-relaxed flex-1 italic mb-8">
              "From the first call to receiving our photos, working with Excel Imagery was seamless. The attention to detail in every shot was incredible. Our families still talk about how beautifully the day was captured."
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-bold text-white tracking-wide">Chidinma Okafor</p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mt-1">Traditional Wedding, 2024</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
