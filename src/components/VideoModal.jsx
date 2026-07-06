import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, videoUrl, posterUrl, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
          onClick={onClose}
        >
          {/* Floating video panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[90vw] max-w-4xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden"
            style={{ borderRadius: '4px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full border border-white/15 bg-black/70 text-white/60 hover:text-white hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>

            {/* Video */}
            <div className="aspect-video w-full">
              <video
                src={videoUrl}
                poster={posterUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                style={{ outline: 'none', display: 'block' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
