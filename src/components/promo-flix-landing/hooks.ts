import { useEffect, useState } from 'react';

function getWindowWidth() {
  return typeof window === 'undefined' ? 1440 : window.innerWidth;
}

export function useViewportWidth() {
  const [width, setWidth] = useState(getWindowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export function useScrollTopVisibility(threshold: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
}
