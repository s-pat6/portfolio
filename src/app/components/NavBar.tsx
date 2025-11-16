import { useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'projects'];

export default function NavBar() {
  function NavLinks() {
    const scrollY = useMotionValue(0);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);

    useEffect(() => {
      // Calculate max scroll height
      const updateMaxScroll = () => {
        setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
      };

      // Update scroll position
      const updateScrollY = () => {
        const newScrollY = window.scrollY;
        setCurrentScrollY(newScrollY);
        scrollY.set(newScrollY);
      };

      updateMaxScroll();
      window.addEventListener('resize', updateMaxScroll);
      window.addEventListener('scroll', updateScrollY, { passive: true });
      updateScrollY();

      return () => {
        window.removeEventListener('resize', updateMaxScroll);
        window.removeEventListener('scroll', updateScrollY);
      };
    }, [scrollY, currentScrollY]);

    // Calculate total character count across all labels
    const labels = SECTION_IDS.map(id => id.charAt(0).toUpperCase() + id.slice(1));
    const totalChars = labels.reduce((sum, label) => sum + label.length, 0);

    // Calculate how many total characters should be highlighted based on scroll
    const scrollPercent = Math.max(0, Math.min(1, currentScrollY / maxScroll));
    const totalHighlightedChars = Math.round(totalChars * scrollPercent);

    return (
      <div className="flex gap-6">
        {SECTION_IDS.map((id, linkIndex) => {
          const label = id.charAt(0).toUpperCase() + id.slice(1);

          // Calculate character offset for this link
          const charsBeforeThisLink = labels.slice(0, linkIndex).reduce((sum, l) => sum + l.length, 0);
          const charsInThisLink = label.length;

          // Determine how many characters in this link should be highlighted
          let coloredCount = 0;
          if (totalHighlightedChars > charsBeforeThisLink) {
            coloredCount = Math.min(charsInThisLink, totalHighlightedChars - charsBeforeThisLink);
          }
          return (
            <a
              key={id}
              href={`#${id}`}
              className={
                `relative px-3 py-1 font-medium text-lg transition-all duration-300 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-300`
              }
              style={{
                borderRadius: '0.75rem',
                transition: 'color 0.3s',
              }}
            >
              {label.split('').map((char, idx) => {
                // Highlight from left to right across entire navbar
                const isHighlighted = idx < coloredCount;

                return (
                  <span
                    key={idx}
                    style={{
                      color: isHighlighted ? 'rgb(236, 72, 153)' : undefined,
                      textShadow: isHighlighted ? '0 0 8px rgba(236,72,153,0.5), 0 0 16px rgba(236,72,153,0.3)' : undefined,
                      transition: 'color 0.3s, text-shadow 0.3s',
                    }}
                    className={isHighlighted ? 'dark:text-pink-400' : ''}
                  >
                    {char}
                  </span>
                );
              })}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent border-none shadow-none backdrop-blur-none" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
      <div className="w-full px-[25vw] py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-5 py-2 font-bold text-2xl text-zinc-900 dark:text-zinc-50 bg-transparent border-none shadow-none backdrop-blur-none hover:text-pink-600 dark:hover:text-pink-300 focus:outline-none"
          style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
          aria-label="Scroll to top"
        >
          Spandan Patel
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}
