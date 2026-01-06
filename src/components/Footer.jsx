import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="md:col-span-1">
             <img src="/Excel Imagery white logo format.png" alt="Excel Imagery Logo" className="h-10 mb-8 grayscale hover:grayscale-0 transition-all duration-500" />
             <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
                Uyo's premier cinematography and photography consultancy. We provide 
                a strictly monochrome foundation for historical visual preservation.
             </p>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6">
             <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase text-white mb-2">Navigation</h4>
             <nav className="flex flex-col gap-4 text-sm font-light text-white/50 tracking-wide">
                <a href="#packages" className="hover:text-white transition-colors">Booking Packages</a>
                <a href="#terms" className="hover:text-white transition-colors">Service Protocol</a>
                <a href="#gallery" className="hover:text-white transition-colors">Visual Archive</a>
                <a href="#book" className="hover:text-white transition-colors">Commission Request</a>
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
                <p>+234 812 345 6789</p>
                <p className="text-white font-medium">hello@excelimagery.com</p>
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
      <div className="mt-20 overflow-hidden select-none pointer-events-none">
         <h2 className="text-[30vw] font-black uppercase tracking-tighter leading-none text-white/[0.03] whitespace-nowrap -mb-[5vw]">
            EXCEL
         </h2>
      </div>

      {/* Developer Credit */}
      <div className="mt-8 text-center pointer-events-auto">
         <p className="text-[10px] font-medium tracking-widest uppercase text-white/20">
            Built by{' '}
            <a 
              href="https://x.com/goodnesmbakara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Goodness Mbakara
            </a>
         </p>
      </div>
    </footer>
  );
};

export default Footer;
