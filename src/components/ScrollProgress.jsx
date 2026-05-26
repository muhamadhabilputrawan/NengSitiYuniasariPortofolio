import { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        totalHeight > 0
          ? scrollTop / totalHeight
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      <div
        ref={progressRef}
        className="
          h-full
          origin-left
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-blue-500
          shadow-[0_0_12px_rgba(34,211,238,0.9)]
          transition-transform
          duration-75
        "
        style={{
          transform: 'scaleX(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ScrollProgress;