import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const experiences = [
  {
    type: 'work',
    company: 'TikHub',
    role: 'Software Engineer Intern',
    period: 'June 2025 – Sep. 2025',
    description: 'Built a real-time YouTube analytics service with Celery, Redis, FastAPI, Docker, that delivers insights to 1,000+ users about social media campaign performance.',
    tags: ['FastAPI', 'Celery', 'Redis', 'Docker'],
  },
  {
    type: 'work',
    company: 'Scale AI',
    role: 'Technical Advisor Intern',
    period: 'Dec. 2024 – June 2025',
    description: 'Worked on an array of projects to improve enterprise LLM capabilities, including designing C++ algorithms that boosted Codeforces Elo rating by 500+ points, and auditing problems for Humanity\'s Last Exam benchmark.',
    tags: ['LLMs', 'C++', 'Algorithms'],
  },
  {
    type: 'research',
    company: 'UT Austin Swarm Nanorobotics Lab',
    role: 'Software Engineer',
    period: 'May 2024 – July 2024',
    description: 'Developed a computer vision pipeline and A-star pathfinding algorithm to help swarm nanobots navigate through microscopic environments.',
    tags: ['Python', 'OpenCV', 'A*', 'AWS'],
  },
  {
    type: 'research',
    company: 'ScAI Lab',
    role: 'LLMs Researcher',
    period: 'Present',
    description: 'Researching methods to evaluate overthinking in LLMs and develop a benchmark to identify prompts that induce the greatest amount of overthinking.',
    tags: ['LLMs', 'AI/ML', 'Research'],
  },
  {
    type: 'activities',
    company: 'LA Hacks',
    role: 'Technology Coordinator',
    period: 'October 2025 - Present',
    description: 'Member of the organization team of Southern California\'s largest hackathon. Currently developing the application platform land landing site, with more to come!',
    tags: ['Leadership', 'Event Tech'],
  },
  {
    type: 'activities',
    company: 'ACM at UCLA',
    role: 'Dev Team Officer',
    period: 'October 2025 - Present',
    description: 'Officer for the largest computer science organization at UCLA. On the infrastructure team, migrating services to physical servers to reduce costs and improve reliability.',
    tags: ['Mentorship', 'Community'],
  },
];

interface ExperienceCardProps {
  exp: typeof experiences[0];
  progress: any;
  range: number[];
  targetScale: number;
}

function ExperienceCard({ exp, progress, range, targetScale }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate scale based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.6]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
      }}
      className="w-full"
    >
      <div
        className="group relative rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 p-6 shadow-lg backdrop-blur-sm dark:border-indigo-500/30 dark:from-indigo-500/15 dark:to-purple-500/10 transition-all"
        style={{
          boxShadow: '0 12px 50px rgba(99, 102, 241, 0.1), 0 0 40px rgba(99, 102, 241, 0.05)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/5 via-transparent to-purple-400/5 group-hover:from-indigo-400/10 group-hover:to-purple-400/10 transition-all"></div>

        <div className="relative z-10">
          {/* Header with Logo and Info */}
          <div className="flex gap-4 mb-4">
            {/* Logo Spot */}
            <div
              className={`flex-shrink-0 h-24 w-24 rounded-2xl border border-indigo-400/30 dark:border-indigo-500/40 flex items-center justify-center overflow-hidden ${
                exp.company === 'UT Austin Swarm Nanorobotics Lab'
                  ? 'bg-[#BF5700]'
                  : 'bg-gradient-to-br from-indigo-400/20 to-purple-400/20'
              }`}
            >
              <Image
                src={
                  exp.type === 'activities'
                    ? exp.company === 'LA Hacks'
                      ? '/LAHacks.png'
                      : '/ACM.png'
                    : exp.type === 'research'
                    ? exp.company === 'ScAI Lab'
                      ? '/UCLA-square-logo.jpg'
                      : '/UTAustin.png'
                    : exp.company === 'TikHub'
                    ? '/TikHub.png'
                    : '/ScaleAI.png'
                }
                alt={exp.company}
                width={96}
                height={96}
                className={`w-full h-full ${
                  exp.company === 'UT Austin Swarm Nanorobotics Lab' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>

            {/* Title and Period on the Right */}
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 mb-1">
                {exp.company}
              </h4>
              <p className="text-xs font-medium text-indigo-600/70 dark:text-indigo-400/70 mb-2">
                {exp.period}
              </p>
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {exp.role}
              </p>
            </div>
          </div>

          {/* Description Below */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface SectionCardsProps {
  title: string;
  experiences: typeof experiences;
}

function SectionCards({ title, experiences: sectionExperiences }: SectionCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const numCards = sectionExperiences.length;

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-20 h-screen flex flex-col items-center justify-start pt-12 pb-24">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
          {title}
        </h3>

        <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionExperiences.map((exp, idx) => {
            // Calculate scroll ranges for each card
            const cardStart = idx / numCards;
            const cardEnd = (idx + 1) / numCards;
            const targetScale = 1 - (numCards - idx) * 0.05;

            return (
              <div key={idx} className="relative" style={{ zIndex: numCards - idx }}>
                <ExperienceCard
                  exp={exp}
                  progress={scrollYProgress}
                  range={[cardStart, cardEnd]}
                  targetScale={targetScale}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  // Group experiences by type
  const sections = [
    {
      title: 'Activities',
      experiences: experiences.filter((exp) => exp.type === 'activities'),
    },
    {
      title: 'Research',
      experiences: experiences.filter((exp) => exp.type === 'research'),
    },
    {
      title: 'Work',
      experiences: experiences.filter((exp) => exp.type === 'work'),
    },
  ];

  return (
    <section
      id="experience"
      className="relative snap-start scroll-mt-20 bg-white dark:bg-zinc-950"
    >
      {/* Fixed Header */}
      <div className="sticky top-20 z-30 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm py-8">
        <h2
          className="text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          }}
        >
          Experience
        </h2>
      </div>

      {/* Sections with stacking cards */}
      {sections.map((section) => (
        <SectionCards
          key={section.title}
          title={section.title}
          experiences={section.experiences}
        />
      ))}

      {/* Spacer for last section */}
      <div className="h-screen"></div>
    </section>
  );
}
