import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="md:col-span-1">
             <img src="/Excel Imagery white logo format.png" alt="Excel Imagery Logo" className="h-10 mb-8 grayscale hover:grayscale-0 transition-all duration-500" />
             <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
                Leading luxury wedding photography and cinematography. Continuously innovating 
                to capture your unique, timeless moments and tell your story beautifully.
             </p>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6">
             <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase text-white mb-2">Navigation</h4>
             <nav className="flex flex-col gap-4 text-sm font-light text-white/50 tracking-wide">
                <a href="#packages" className="hover:text-white transition-colors">Booking Packages</a>
                <a href="#terms" className="hover:text-white transition-colors">Service Protocol</a>
                <a href="#gallery" className="hover:text-white transition-colors">Visual Archive</a>
                <a href="#book" className="hover:text-white transition-colors">Enquiry</a>
             </nav>
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-6">
             <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase text-white mb-2">Connect</h4>
             <nav className="flex flex-col gap-4 text-sm font-light text-white/50 tracking-wide">
                <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2 font-medium">Instagram [↗]</a>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2 font-medium">Twitter [↗]</a>
                <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2 font-medium">Facebook [↗]</a>
             </nav>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6">
             <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase text-white mb-2">Contact</h4>
             <div className="text-sm font-light text-white/50 space-y-2">
                <p>31 Itiam Street, Uyo</p>
                <p>+234 703 766 7266</p>
                <p className="text-white font-medium">excelimagery@gmail.com</p>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium tracking-widest uppercase text-white/30">
           <p>© 2026 Excel Imagery Archive. All Rights Reserved.</p>
           <div className="flex gap-10">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Bureau</span>
           </div>
        </div>
      </div>

      {/* Massive Brand Narrative */}
      <div className="mt-20 overflow-hidden select-none pointer-events-none text-center">
         <h2 className="text-[30vw] font-black uppercase tracking-tighter leading-none -mb-[5vw] text-white/60 relative" style={{
           backdropFilter: 'blur(10px)',
           WebkitBackdropFilter: 'blur(10px)',
           textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
           WebkitBackgroundClip: 'text',
           backgroundClip: 'text'
         }}>
            EXCEL
         </h2>
      </div>

      {/* Developer Credit */}
      <div className="mt-12 pt-8 border-t border-white/5 text-center pointer-events-auto">
         <p className="text-xs font-medium tracking-wider uppercase text-white/40 flex items-center justify-center gap-2">
            Built by{' '}
            <a 
              href="https://x.com/goodnesmbakara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#D4AF37] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer border-b border-white/30 hover:border-[#D4AF37] pb-0.5"
            >
              <span className="group-hover:tracking-wide transition-all">Goodness Mbakara</span>
              <svg 
                viewBox="0 0 24 24" 
                className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform"
                aria-label="X (formerly Twitter)"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
         </p>
      </div>
    </footer>
  );
};

export default Footer;
