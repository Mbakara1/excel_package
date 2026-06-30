import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollapsibleSection = ({ title, number, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/5 bg-black">
      {/* Clickable Header Banner */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-12 px-6 md:px-12 text-left hover:bg-white/[0.01] transition-all duration-300 group cursor-pointer focus:outline-none"
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          {/* Section Number */}
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300 font-sans">
            {number}
          </span>
          {/* Section Title */}
          <h3 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-all duration-300 font-sans">
            {title}
          </h3>
        </div>

        {/* Toggle Icon */}
        <div className="relative w-8 h-8 rounded-full border border-white/10 group-hover:border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 bg-white/[0.02]">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-white/60 group-hover:text-[#D4AF37] text-lg font-light flex items-center justify-center"
          >
            {isOpen ? '✕' : '＋'}
          </motion.span>
        </div>
      </button>

      {/* Collapsible Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#020202]"
          >
            <div className="border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
