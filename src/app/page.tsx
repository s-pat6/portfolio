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
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <ParticlesBackground />
      <div className="relative z-10">
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
