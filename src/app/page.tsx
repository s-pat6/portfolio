'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import { useEffect, useRef, useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import MainFooter from './components/MainFooter';
import FloatingFooter from './components/FloatingFooter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

// Helper: Section IDs in order
const SECTION_IDS = ['about', 'experience', 'projects'];

// NavLinks component
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
        return Math.abs(rect.top - 80); // 80px offset for navbar
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
              ? 'text-pink-600 dark:text-pink-300' // Only text color highlight
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

export default function Home() {
  const [showUI, setShowUI] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <ParticlesBackground />

      {/* UI Toggle Button */}
      <button
        onClick={() => setShowUI(!showUI)}
        className="fixed top-6 left-6 z-[100] p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 shadow-lg"
        aria-label={showUI ? "Hide UI" : "Show UI"}
      >
        {showUI ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-700 dark:text-zinc-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-700 dark:text-zinc-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        )}
      </button>

      <div className={`relative z-10 transition-opacity duration-500 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Navigation */}
        <NavBar />
        {/* Hero Section */}
        <HeroSection />
        {/* About Me Section */}
        <AboutSection />
        {/* Experience Section */}
        <ExperienceSection />
        {/* Projects Section */}
        <ProjectsSection />
        {/* Footer */}
        <MainFooter />
        {/* Floating Glassy Footer */}
        <FloatingFooter />
      </div>
    </div>
  );
}
