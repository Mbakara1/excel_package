import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacityText = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden pt-[100px]">
      <div className="section-container relative z-10 w-full text-center">
        <motion.div style={{ opacity: opacityText }}>
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block text-white/40">Luxury Wedding Photography & Cinematography</span>
            <h1 className="mb-12 font-serif leading-[0.85] text-white">
              The Standard of <br />
              <span className="serif-italic font-normal">Authenticity</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm font-light tracking-[0.05em] leading-relaxed text-white/60 mb-12">
               Where innovation meets artistry to preserve your most precious moments.
            </p>
            <div className="flex justify-center gap-6">
               <a href="#packages" className="cta-editorial">View Booking</a>
               <a href="#book" className="cta-editorial cta-outline">Start Enquiry</a>
            </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-white/10" />
    </section>
  );
};

export default Hero;
