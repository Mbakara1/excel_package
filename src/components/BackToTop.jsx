import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-32 z-50 group"
      aria-label="Back to top"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle pulse */}
        <div className="absolute inset-0 bg-gray-800 rounded-full animate-pulse opacity-50"></div>
        
        {/* Main button - dark background for visibility on white */}
        <div className="relative bg-gray-900 hover:bg-black text-white rounded-full p-4 border border-white/10 shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center">
          <ArrowUp size={24} strokeWidth={2.5} className="flex-shrink-0" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Back to Top
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
        </div>
      </div>
    </button>
  );
};

export default BackToTop;
