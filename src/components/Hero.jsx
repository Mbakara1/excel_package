import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden pt-[200px]">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
             <motion.div
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
               className="mask-reveal h-[60vh] md:h-[80vh] w-full mb-12"
             >
                <motion.img 
                   style={{ y: yImage }}
                   src="/wedding-hero.png" 
                   alt="Craft" 
                   className="h-full w-full object-cover grayscale brightness-75"
                />
             </motion.div>
          </div>
          
          <div className="lg:col-span-4 lg:pl-12">
            <motion.div style={{ opacity: opacityText }}>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block text-white/40">Established 2024</span>
                <h1 className="mb-8 font-serif leading-[0.85] text-white">
                  Essence <br />
                  <span className="serif-italic lg:ml-8 font-normal">Captured</span>
                </h1>
                <p className="max-w-xs text-sm font-light tracking-wide leading-relaxed text-white/50 mb-10">
                   A strictly monochrome approach to visual storytelling. We believe elegance is found in the absence of noise.
                </p>
                <div className="flex gap-4">
                   <a href="#book" className="cta-editorial">Enquiry</a>
                </div>
            </motion.div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] transform -rotate-90 origin-left">
           <span className="text-[20vw] font-black uppercase tracking-[0.2em] whitespace-nowrap">AUTHENTICITY</span>
        </div>
      </div>
      
      {/* Editorial Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-white/20" />
    </section>
  );
};

export default Hero;
