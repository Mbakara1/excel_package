import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-[#D4AF37]" />
            <span className="font-bold tracking-tighter">
              EXCEL <span className="gold-text">IMAGERY</span>
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-y border-white/5 py-12 mb-12">
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/30">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+2340000000" className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-[#D4AF37]">
                <Phone className="w-4 h-4" />
                <span>+234 (0) 800 000 0000</span>
              </a>
              <a href="mailto:hello@excelimagery.com" className="flex items-center justify-center md:justify-start gap-3 text-white/60 hover:text-[#D4AF37]">
                <Mail className="w-4 h-4" />
                <span>hello@excelimagery.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/30">Office</h4>
            <p className="text-white/60 leading-relaxed">
              31 Itiam Street,<br />
              Uyo, Akwa Ibom State,<br />
              Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/30">Hours</h4>
            <p className="text-white/60">
              Mon - Sat: 9:00 AM - 6:00 PM<br />
              Sunday: By Appointment
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-white/20">
          <p>© {new Date().getFullYear()} Excel Imagery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
