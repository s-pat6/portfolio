import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaDev, FaInstagram, FaAppStoreIos, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

interface ProjectLink {
  url: string;
  icon: IconType;
  label: string;
}

interface Project {
  name: string;
  image: string;
  description: string;
  tags: string[];
  award?: string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  devpostURL?: string;
  additionalLinks?: ProjectLink[];
  isGroupProject?: boolean;
}

const projects: Project[] = [
  {
    name: 'Portfolio',
    image: '/Portfolio.png',
    description: 'Personal portfolio website showcasing my projects, experience, and skills, built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    projectUrl: '#',
    sourceCodeUrl: 'https://github.com/s-pat6/Portfolio',
  },
  {
    name: 'Safer Story',
    image: '/SaferStory.png',
    description: 'Safety-first navigation app that generates walking routes with maximum streetlight coverage, prioritizing user security.',
    tags: ['React Native', 'Node.js', 'Google Cloud Platform', 'MongoDB', 'Firebase'],
    projectUrl: '#',
    sourceCodeUrl: 'https://github.com/s-pat6/saferstory',
  },
  {
    name: 'Guess The City',
    image: '/GuessTheCity.png',
    description: 'Web app where users guess cities based on distance-related clues from previous guesses.',
    tags: ['React'],
    projectUrl: 'https://s-pat6.github.io/city-game/',
    sourceCodeUrl: 'https://github.com/s-pat6/city-game'
  },
  {
    name: 'BLink',
    image: '/BLink.png',
    description: 'Mobile app that advertises popups around UCLA campus to help students discover local events and promotions.',
    tags: ['React Native', 'Firebase', 'Expo', 'MongoDB', 'Google Cloud Platform'],
    additionalLinks: [
      {
        url: 'https://apps.apple.com/us/app/ucla-blink/id6742316697',
        icon: FaAppStoreIos,
        label: 'App Store'
      },
      {
        url: 'https://www.instagram.com/uclablink/',
        icon: FaInstagram,
        label: 'Instagram'
      }
    ],
    isGroupProject: true,
  },
  {
    name: 'ForgetMeNot',
    image: '/ForgetMeNot.png',
    description: 'AI-powered communication assistant that analyzes facial expressions in real-time to provide emotionally intelligent responses. Submitted to CalHacks 12.',
    tags: ['Python', 'DeepFace', 'OpenCV', 'Llama 3', 'Groq', 'Deepgram'],
    projectUrl: '#',
    sourceCodeUrl: 'https://github.com/s-pat6/calhacks',
    devpostURL: 'https://devpost.com/software/forgetmenot-a1hbm5',
    isGroupProject: true,
  },
  {
    name: 'TradeOff',
    image: '/TradeOff.png',
    description: 'Web application that simulates stock market trading, allowing users to practice buying and selling stocks in a risk-free environment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: '#',
    sourceCodeUrl: 'https://github.com/utahorange/tradeoff',
    isGroupProject: true,
  },
  {
    name: 'UniSync',
    image: '/UniSync.png',
    award: 'Winner - HackSMU V',
    description: "AI-powered platform that groups together notes, assignments, and study materials for university courses, enabling students to collaborate and share resources effectively.",
    tags: ['React', 'Node.js', 'Flask', 'SQLAlchemy'],
    devpostURL: 'https://devpost.com/software/unisync',
    sourceCodeUrl: 'https://github.com/CRD716/UniSync',
    isGroupProject: true,
  },
  {
    name: 'PaveGuard',
    image: '/PaveGuard.png',
    award: 'Winner - AIFAHacks',
    description: 'AI-driven platform that identifies and reports road hazards to local authorities, enhancing urban safety and infrastructure maintenance.',
    tags: ['React', 'Bootstrap', 'Insonmia', 'Firebase', 'YOLO'],
    devpostURL: 'https://devpost.com/software/paveguard',
    sourceCodeUrl: 'https://github.com/Thinkerious/PaveGuard',
    isGroupProject: true,
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 pt-[80px] scroll-mt-20"
    >
      <motion.div variants={itemVariants} className="mx-auto w-full max-w-6xl">
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          }}
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 shadow-lg backdrop-blur-sm dark:border-indigo-500/30 dark:from-indigo-500/15 dark:to-purple-500/10 transition-all overflow-hidden"
              style={{
                boxShadow:
                  '0 12px 50px rgba(99, 102, 241, 0.1), 0 0 40px rgba(99, 102, 241, 0.05)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/5 via-transparent to-purple-400/5 dark:from-indigo-500/5 dark:to-purple-500/5 group-hover:from-indigo-400/10 group-hover:to-purple-400/10 transition-all"></div>

              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/10 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="relative z-10 flex flex-col flex-grow p-6">
                {/* Title and Group Badge */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    {project.name}
                  </h3>
                  {project.isGroupProject && (
                    <div className="group/badge relative">
                      <div className="bg-indigo-600/70 dark:bg-indigo-500/70 rounded-lg p-2 shadow-lg backdrop-blur-sm">
                        <FaUsers className="text-white text-sm" />
                      </div>
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black text-white px-2 py-1 text-xs font-medium opacity-0 group-hover/badge:opacity-100 transition-opacity">
                        Collaborator
                      </span>
                    </div>
                  )}
                </div>

                {/* Award */}
                {project.award && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🏆</span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                      {project.award}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 mb-4">
                  {project.projectUrl && project.projectUrl !== '#' && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-200/50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-300/50 dark:hover:bg-indigo-800/50 transition-colors group/icon relative"
                      title="View Project"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        View Project
                      </span>
                    </a>
                  )}
                  {project.sourceCodeUrl && project.sourceCodeUrl !== '#' && (
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-200/50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-300/50 dark:hover:bg-indigo-800/50 transition-colors group/icon relative"
                      title="View Source Code"
                    >
                      <FaGithub className="text-lg" />
                      <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        Source Code
                      </span>
                    </a>
                  )}
                  {project.devpostURL && project.devpostURL !== '#' && (
                    <a
                      href={project.devpostURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-200/50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-300/50 dark:hover:bg-indigo-800/50 transition-colors group/icon relative"
                      title="View on Devpost"
                    >
                      <FaDev className="text-lg" />
                      <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        View on Devpost
                      </span>
                    </a>
                  )}
                  {project.additionalLinks && project.additionalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-200/50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-300/50 dark:hover:bg-indigo-800/50 transition-colors group/icon relative"
                      title={link.label}
                    >
                      <link.icon className="text-lg" />
                      <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-indigo-300/30 dark:border-indigo-700/30">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg bg-indigo-100/80 px-3 py-1.5 text-xs font-medium text-indigo-800 backdrop-blur-sm dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
