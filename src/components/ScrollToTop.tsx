import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-30 p-2.5 rounded-full bg-[#123C42] text-white shadow-lg hover:bg-[#0E2C31] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B477] focus-visible:ring-offset-2 hover:scale-105"
    >
      <ChevronUp className="w-5 h-5 text-[#D6B477]" />
    </button>
  );
};
