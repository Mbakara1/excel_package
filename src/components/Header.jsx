import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Investment', href: '#packages' },
    { name: 'Protocol', href: '#terms' },
    { name: 'Archive', href: '#gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[200] mix-blend-difference pointer-events-none">
      <div className="section-container pt-8 md:pt-12 flex justify-between items-start pointer-events-auto">
        <a href="/" className="group flex flex-col items-center">
            <img 
               src="/Excel Imagery white logo format.png" 
               alt="Brand" 
               className="h-12 md:h-16 w-auto object-contain transition-transform duration-700 group-hover:scale-105" 
            />
            <span className="text-[10px] font-bold tracking-[0.5em] mt-2 opacity-60 group-hover:opacity-100 transition-opacity">EXCEL IMAGERY</span>
        </a>

        <nav className="hidden md:flex flex-col items-end gap-3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all transform hover:translate-x-[-10px]"
            >
              {link.name}
            </a>
          ))}
          <div className="h-[40px] w-[1px] bg-white/20 mt-4 self-center mr-0" />
          <a 
            href="#book" 
            className="text-[12px] font-bold tracking-[0.3em] uppercase underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all"
          >
            Inquiry
          </a>
        </nav>

        {/* Mobile menu trigger could be here, but for extreme elegance we'll keep it as a vertical slash on mobile */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-2 p-2 mt-4"
        >
          <div className={`h-[1px] w-8 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <div className={`h-[1px] w-8 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[190] flex flex-col justify-center p-12 pointer-events-auto"
          >
            <nav className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-6xl font-serif italic hover:text-white/40 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                className="text-2xl font-bold tracking-widest uppercase mt-12 underline underline-offset-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Journey
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
