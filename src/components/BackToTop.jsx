import React, { useState, useEffect } from 'react';

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
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 group"
      aria-label="Back to top"
      style={{ width: '56px', height: '56px' }}
    >
      {/* Subtle pulse - lighter */}
      <div className="absolute inset-0 bg-gray-600 rounded-full animate-pulse opacity-30"></div>
      
      {/* Main button - lighter gray for subtlety */}
      <div className="relative w-full h-full bg-gray-700 hover:bg-gray-800 text-white rounded-full border border-gray-500/40 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {/* Custom SVG arrow with no internal padding for perfect centering */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Back to Top
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
      </div>
    </button>
  );
};

export default BackToTop;
