import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/60 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="flex items-center gap-2 group">
          <img src="/favicon.png" alt="Excel Imagery Logo" className="w-8 h-8 rounded-md group-hover:scale-110 transition-transform object-cover" />
          <span className="text-xl font-bold tracking-tighter">
            EXCEL <span className="gold-text">IMAGERY</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className="px-6 py-2 bg-[#D4AF37] text-black text-sm font-bold rounded-full hover:bg-[#FFDF00] transition-all transform hover:scale-105 active:scale-95"
          >
            BOOK NOW
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-black/95 backdrop-blur-2xl z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-bold text-white/70 hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book" 
              className="w-full text-center px-8 py-4 bg-[#D4AF37] text-black text-lg font-bold rounded-full hover:bg-[#FFDF00] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </nav>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .md\\:hidden { display: block !important; }
          .md\\:flex { display: none !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
