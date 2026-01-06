import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Terms', href: '#terms' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`section-container flex items-center justify-between transition-all duration-700 ${
        isScrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-3 px-8 mx-auto max-w-[900px]' : ''
      }`}>
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/Excel Imagery white logo format.png" 
            alt="Excel Imagery" 
            className={`transition-all duration-700 ${isScrolled ? 'h-8' : 'h-12'}`} 
            style={{ objectFit: 'contain' }}
          />
          {!isScrolled && (
            <span className="text-lg font-extrabold tracking-widest hidden sm:block">
              EXCEL <span className="gold-text">IMAGERY</span>
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className={`px-6 py-2 border border-[#D4AF37]/50 text-[10px] font-black tracking-widest uppercase rounded-full hover:bg-[#D4AF37] hover:text-black transition-all transform active:scale-95`}
          >
            Inquire
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <img src="/Excel Imagery white logo format.png" alt="Logo" className="h-10" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-4xl font-bold hover:gold-text transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                className="mt-10 py-5 bg-[#D4AF37] text-black text-center text-xl font-bold rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK NOW
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
