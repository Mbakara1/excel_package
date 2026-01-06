import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
            Premium Photography & Cinematography
          </span>
          
          <h1 className="font-bold mb-6 leading-tight">
            Capturing Your <br />
            <span className="gold-text">Timeless Moments</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg mb-10 text-white/60">
            Professional storytelling through high-end imagery based in Uyo, Akwa Ibom. 
            Because every frame should be a masterpiece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#packages"
              className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg flex items-center gap-2 hover:bg-[#FFDF00] transition-all transform hover:scale-105 active:scale-95"
            >
              Explore Our Packages
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-white/40 italic">
              31 Itiam Street, Uyo
            </p>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          background: radial-gradient(circle at center, #111 0%, #0a0a0a 100%);
        }
        @media (min-width: 768px) {
          .text-7xl { font-size: 4.5rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
