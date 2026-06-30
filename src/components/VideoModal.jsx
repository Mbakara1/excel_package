import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, videoUrl, posterUrl, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl transition-all duration-300 z-50 cursor-pointer p-2 rounded-full hover:bg-white/5"
          aria-label="Close video"
        >
          ✕
        </button>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl aspect-video bg-[#050505] border border-white/10 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Custom Video Player */}
          <video
            src={videoUrl}
            poster={posterUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
            style={{ outline: 'none' }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
