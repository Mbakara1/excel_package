import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-sm">
             <img src="/Excel Imagery white logo format.png" alt="Logo" className="h-10 mb-8 grayscale" />
             <p className="text-white/30 text-xs font-light tracking-widest uppercase leading-loose">
                Capturing the essence of time through a strictly monochrome lens. Dedicated to the pursuit of visual perfection.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
             <div className="flex flex-col gap-6">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/50">Navigation</span>
                <nav className="flex flex-col gap-4 text-xs font-medium text-white/30 tracking-widest uppercase">
                   <a href="#gallery" className="hover:text-white transition-colors">Portfolio</a>
                   <a href="#packages" className="hover:text-white transition-colors">Investment</a>
                   <a href="#terms" className="hover:text-white transition-colors">Bureau</a>
                </nav>
             </div>
             
             <div className="flex flex-col gap-6">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/50">Connect</span>
                <nav className="flex flex-col gap-4 text-xs font-medium text-white/30 tracking-widest uppercase">
                   <a href="#" className="hover:text-white transition-colors">Instagram</a>
                   <a href="#" className="hover:text-white transition-colors">Twitter</a>
                   <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </nav>
             </div>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">© 2026 Excel Imagery Archive</p>
           <div className="flex gap-10">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">Uyo, Nigeria</span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">Studio Arca</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
