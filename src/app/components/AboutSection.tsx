import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiPytorch,
  SiRedis,
  SiOpencv,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGooglecloud,
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaAws,
  FaTerminal,
  FaLeaf,
  FaCode,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'cloud' | 'tools';
}

const categoryBorderColors = {
  languages: '#6BA8D1',     // Muted Blue
  frontend: '#D494B8',      // Muted Pink
  backend: '#D9A06F',       // Muted Orange
  databases: '#6BA876',     // Muted Green
  cloud: '#9B8FD4',         // Muted Purple
  tools: '#8A909A',         // Muted Gray
};

interface Interest {
  name: string;
  emoji: string;
}

const leftSkills: Skill[] = [
  // Languages (Blue) - 5 skills
  { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'languages' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'languages' },
  { name: 'Java', icon: FaJava, color: '#007396', category: 'languages' },
  { name: 'Bash', icon: FaTerminal, color: '#4EAA25', category: 'languages' },
  { name: 'C#', icon: FaCode, color: '#239120', category: 'languages' },
  // Frontend (Pink) - 7 skills
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'HTML', icon: SiHtml5, color: '#E34C26', category: 'frontend' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6', category: 'frontend' },
];

const rightSkills: Skill[] = [
  // Databases (Green) - 4 skills
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'databases' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'databases' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1', category: 'databases' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'databases' },
  // Backend (Orange) - 2 skills
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend' },
  { name: 'Celery', icon: FaLeaf, color: '#37B24D', category: 'backend' },
  // Cloud (Purple) - 2 skills
  { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'cloud' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4', category: 'cloud' },
  // Tools (Gray) - 4 skills
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'tools' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', category: 'tools' },
  { name: 'Git', icon: SiGit, color: '#F1502F', category: 'tools' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', category: 'tools' },
];

const interests: Interest[] = [
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Music', emoji: '🎵' },
  { name: 'Poker', emoji: '🃏' },
  { name: 'Chess', emoji: '♟️' },
  { name: 'Video Games', emoji: '🎮' },
  { name: 'Geography/Culture', emoji: '🌍' },
  { name: 'Gym', emoji: '💪' },
];

interface SkillBubbleProps {
  skill: Skill;
  idx: number;
  position: 'left' | 'right';
}

function SkillBubble({ skill, idx, position }: SkillBubbleProps) {
  const size = 70;
  const staggerRotation = Math.sin(idx * 1.5 + (position === 'right' ? 1 : 0)) * 8;
  const borderColor = categoryBorderColors[skill.category];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0, rotate: staggerRotation },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: staggerRotation,
          transition: {
            duration: 0.5,
            delay: idx * 0.08,
            ease: [0.34, 1.56, 0.64, 1],
          },
        },
      }}
      whileHover={{ scale: 1.15, rotate: staggerRotation + 5 }}
      className="group relative flex justify-center z-40"
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-full border-2 bg-gray-300/25 shadow-xl backdrop-blur-xl transition-all dark:bg-gray-500/25"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderColor: borderColor,
          boxShadow: `0 8px 32px ${skill.color}30, 0 0 24px ${skill.color}15, inset 0 1px 1px rgba(255,255,255,0.2), 0 0 12px ${borderColor}40`,
        }}
      >
        <skill.icon
          className="transition-all group-hover:scale-110"
          style={{
            width: `${size * 0.55}px`,
            height: `${size * 0.55}px`,
            color: skill.color,
            filter: `drop-shadow(0 0 8px ${skill.color}80)`,
          }}
        />
      </div>
        <div
          className="absolute z-[9999] right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-zinc-900 dark:bg-zinc-900/90 dark:text-white"
        >
        {skill.name}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex h-screen snap-start flex-col items-center justify-center px-6 py-8 scroll-mt-0"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto w-full max-w-5xl"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          About Me
        </motion.h2>

        {/* Main grid: left skills, center content, right skills */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center justify-items-center">
          {/* Center: About Text + Interests - Rendered first so bubbles can layer on top */}
          <div className="flex flex-col items-center gap-6 order-2">
            {/* About Text */}
            <motion.div
              variants={itemVariants}
              className="relative z-20 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-100/80 via-white to-indigo-100/80 p-8 shadow-2xl backdrop-blur-md dark:border-blue-800/50 dark:from-blue-950/95 dark:via-zinc-900/95 dark:to-indigo-950/95 w-full"
              style={{
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
              <div className="relative z-10">
                <p className="text-lg leading-8 text-zinc-800 dark:text-zinc-300">
                  I'm a <span className="font-semibold text-blue-700 dark:text-blue-400">Computer Science student at UCLA </span>
                  exploring my interests within software development, particularly in <span className="font-semibold">fullstack development</span> and
                  <span className="font-semibold"> distributed systems</span>.
                  I've previously interned at <span className="font-semibold text-purple-700 dark:text-purple-400">TikHub</span> and
                  <span className="font-semibold text-purple-700 dark:text-purple-400"> Scale AI</span>.
                  My campus activities include organizing <span className="font-semibold">LA Hacks</span> on the tech team, being a
                  <span className="font-semibold"> Dev Team Officer for ACM</span>, and researching how LLMs overthink at the
                  <span className="font-semibold"> Scalable Analytics Institute Lab</span>.
                </p>
              </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              variants={itemVariants}
              className="w-full"
            >
              <h3 className="mb-4 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Interests
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, idx) => (
                  <motion.div
                    key={interest.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          delay: idx * 0.06,
                          ease: 'easeOut',
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="group"
                  >
                    <div
                      className="flex items-center gap-2 rounded-full border border-gray-300/50 bg-gray-100/60 px-4 py-2 shadow-lg backdrop-blur-xl transition-all hover:shadow-xl dark:border-zinc-700/30 dark:bg-zinc-800/20"
                      style={{
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255,255,255,0.2)',
                      }}
                    >
                      <span className="text-lg">{interest.emoji}</span>
                      <span className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
                        {interest.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left Skill Bubbles - 2-3-2-3-2 Layout */}
          <motion.div className="flex flex-col gap-6 order-1">
            {/* Row 1: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {leftSkills.slice(0, 2).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx} position="left" />
              ))}
            </div>
            {/* Row 2: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {leftSkills.slice(2, 5).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 2} position="left" />
              ))}
            </div>
            {/* Row 3: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {leftSkills.slice(5, 7).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 5} position="left" />
              ))}
            </div>
            {/* Row 4: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {leftSkills.slice(7, 10).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 7} position="left" />
              ))}
            </div>
            {/* Row 5: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {leftSkills.slice(10, 12).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 10} position="left" />
              ))}
            </div>
          </motion.div>

          {/* Right Skill Bubbles - 2-3-2-3-2 Layout */}
          <motion.div className="flex flex-col gap-6 order-3">
            {/* Row 1: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {rightSkills.slice(0, 2).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx} position="right" />
              ))}
            </div>
            {/* Row 2: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {rightSkills.slice(2, 5).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 2} position="right" />
              ))}
            </div>
            {/* Row 3: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {rightSkills.slice(5, 7).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 5} position="right" />
              ))}
            </div>
            {/* Row 4: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {rightSkills.slice(7, 10).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 7} position="right" />
              ))}
            </div>
            {/* Row 5: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {rightSkills.slice(10, 12).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 10} position="right" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
