import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Background Media */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute right-0 top-0 w-full md:w-3/5 h-[80vh] md:h-screen pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/20 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        <img 
          src="/wedding-hero.png" 
          alt="Luxury Photography" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
        />
      </motion.div>

      <div className="section-container relative z-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[10px] font-black tracking-[0.5em] text-[#D4AF37] uppercase mb-8 ml-1">
              Elevating the visual narrative
            </span>
            
            <h1 className="mb-8 relative leading-[0.9]">
              Capturing your <br />
              <span className="serif text-[#D4AF37]">Timeless</span> Moments
              <div className="absolute -left-12 top-0 h-full w-[2px] bg-gradient-to-b from-[#D4AF37] to-transparent hidden lg:block" />
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end gap-12 mt-12">
              <motion.p 
                style={{ y: y2 }}
                className="max-w-md text-lg text-white/50 font-light leading-relaxed"
              >
                Premier photography and cinematography consultancy based in Uyo. 
                We don't just take pictures; we craft enduring legacies through 
                sophisticated visual storytelling.
              </motion.p>

              <div className="flex flex-col gap-6">
                <a href="#packages" className="btn-premium">
                  View Collections
                  <ChevronRight size={18} />
                </a>
                <p className="text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-white/20" />
                  31 Itiam Street, Uyo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase vertical-text">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}} />
    </section>
  );
};

export default Hero;
