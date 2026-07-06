import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCloseButton = ({ onClose, containerRef }) => {
  const [pos, setPos] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;

      if (rect.bottom < 80 || rect.top > viewH - 80) {
        setPos(null);
        return;
      }

      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewH);
      const centre = visibleTop + (visibleBottom - visibleTop) / 2;

      setPos({ top: centre });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [containerRef]);

  if (!pos) return null;

  const btnClass = "flex items-center justify-center w-7 h-7 rounded-full border border-white/15 bg-black/70 text-white/50 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-black transition-all duration-300 backdrop-blur-sm";
  const icon = (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M1 1l10 10M11 1L1 11" />
    </svg>
  );

  return (
    <>
      {/* Left button — always shown */}
      <button
        onClick={onClose}
        aria-label="Collapse section"
        style={{ position: 'fixed', top: pos.top, left: 12, transform: 'translateY(-50%)', zIndex: 40 }}
        className={btnClass}
      >
        {icon}
      </button>
      {/* Right button — desktop only */}
      {!isMobile && (
        <button
          onClick={onClose}
          aria-label="Collapse section"
          style={{ position: 'fixed', top: pos.top, right: 12, transform: 'translateY(-50%)', zIndex: 40 }}
          className={btnClass}
        >
          {icon}
        </button>
      )}
    </>
  );
};

const CollapsibleSection = ({ title, number, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-white/5 bg-black">
      {/* Clickable Header Banner */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-12 px-6 md:px-12 text-left hover:bg-white/[0.01] transition-all duration-300 group cursor-pointer focus:outline-none"
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300 font-sans">
            {number}
          </span>
          <h3 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-all duration-300 font-sans">
            {title}
          </h3>
        </div>

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
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#020202]"
          >
            <div className="border-t border-white/5">
              {children}
            </div>

            <StickyCloseButton onClose={() => setIsOpen(false)} containerRef={contentRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
