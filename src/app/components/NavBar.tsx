import { useEffect, useRef, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'projects'];

export default function NavBar() {
  function NavLinks() {
    const [active, setActive] = useState<string | null>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
      function onScroll() {
        const scrollY = window.scrollY;
        if (scrollY < 80) {
          setActive(null);
          return;
        }
        const offsets = SECTION_IDS.map((id) => {
          const el = document.getElementById(id);
          if (!el) return Infinity;
          const rect = el.getBoundingClientRect();
          return Math.abs(rect.top - 80);
        });
        const minIdx = offsets.indexOf(Math.min(...offsets));
        setActive(SECTION_IDS[minIdx]);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
      <div className="flex gap-6">
        {SECTION_IDS.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            ref={el => { linkRefs.current[i] = el; }}
            className={
              `relative px-3 py-1 font-medium text-sm transition-all duration-300 ` +
              (active === id
                ? 'text-pink-600 dark:text-pink-300'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-300')
            }
            style={active === id ? {
              textShadow: '0 0 8px rgba(236,72,153,0.18)',
              transition: 'text-shadow 0.4s cubic-bezier(.4,0,.2,1)',
            } : {}}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent border-none shadow-none backdrop-blur-none" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-5 py-2 font-bold text-lg text-zinc-900 dark:text-zinc-50 bg-transparent border-none shadow-none backdrop-blur-none hover:text-pink-600 dark:hover:text-pink-300 focus:outline-none"
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
