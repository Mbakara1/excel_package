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
    <>
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

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 mt-4 group"
          >
            <div className="h-[1px] w-8 bg-white" />
            <div className="h-[1px] w-5 bg-white ml-auto group-hover:w-8 transition-all" />
            <div className="h-[1px] w-8 bg-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-black z-[300] flex flex-col p-8 md:p-20 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-20">
               <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase mt-4">Menu</span>
               <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 mr-[-20px] group"
               >
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute h-[1px] w-full bg-white rotate-45 transition-transform group-hover:rotate-[135deg]" />
                    <div className="absolute h-[1px] w-full bg-white -rotate-45 transition-transform group-hover:rotate-[45deg]" />
                  </div>
               </button>
            </div>

            <nav className="flex flex-col gap-12">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  href={link.href}
                  className="text-5xl font-serif italic text-white hover:text-[#D4AF37] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <span className="text-xs font-sans not-italic font-bold tracking-widest mr-6 opacity-20">0{idx + 1}</span>
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-20 pt-20 border-t border-white/10"
              >
                  <a 
                    href="#book" 
                    className="text-xl font-bold tracking-[0.3em] uppercase text-[#D4AF37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Immediate Inquiry [→]
                  </a>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 left-8 md:left-20">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">© 2026 Archive</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
