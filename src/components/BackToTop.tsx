'use client';

import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fb-back-to-top ${isVisible ? 'show' : ''}`}
      id="btn-backtotop"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
