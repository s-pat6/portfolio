import { motion } from 'framer-motion';
import Image from 'next/image';

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
    company: 'Scalable Analytics Institute (ScAI) Lab',
    role: 'LLMs Researcher',
    period: 'May 2025 - Present',
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
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="group relative rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 p-12 shadow-lg backdrop-blur-sm dark:border-indigo-500/30 dark:from-indigo-500/15 dark:to-purple-500/10 transition-all"
        style={{
          boxShadow: '0 12px 50px rgba(99, 102, 241, 0.1), 0 0 40px rgba(99, 102, 241, 0.05)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/5 via-transparent to-purple-400/5 group-hover:from-indigo-400/10 group-hover:to-purple-400/10 transition-all"></div>

        <div className="relative z-10">
          {/* Header with Logo and Info */}
          <div className="flex gap-6 mb-6">
            {/* Logo Spot */}
            <div
              className={`flex-shrink-0 h-36 w-36 rounded-2xl border border-indigo-400/30 dark:border-indigo-500/40 flex items-center justify-center overflow-hidden ${
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
                    ? exp.company === 'Scalable Analytics Institute (ScAI) Lab'
                      ? '/UCLA-square-logo.jpg'
                      : '/UTAustin.png'
                    : exp.company === 'TikHub'
                    ? '/TikHub.png'
                    : '/ScaleAI.png'
                }
                alt={exp.company}
                width={144}
                height={144}
                className={`w-full h-full ${
                  exp.company === 'UT Austin Swarm Nanorobotics Lab' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>

            {/* Title and Period on the Right */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-1">
                {exp.company}
              </h4>
              <p className="text-sm font-medium text-indigo-600/70 dark:text-indigo-400/70 mb-2">
                {exp.period}
              </p>
              <p className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
                {exp.role}
              </p>
            </div>
          </div>

          {/* Description Below */}
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface ExperienceGroupProps {
  title: string;
  experiences: typeof experiences;
}

function ExperienceGroup({ title, experiences: sectionExperiences }: ExperienceGroupProps) {
  return (
    <div className="h-screen snap-center flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="flex flex-col items-center gap-6 w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 text-center flex-shrink-0">
          {title}
        </h3>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 flex-shrink-0">
          {sectionExperiences.map((exp) => (
            <ExperienceCard key={`${exp.type}-${exp.company}`} exp={exp} />
          ))}
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
      className="relative"
    >
      {/* Sticky Header */}
      <div className="sticky top-20 z-40 w-full py-6">
        <h2
          className="text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          }}
        >
          Experience
        </h2>
      </div>

      {/* Experience Groups */}
      {sections.map((section) => (
        <ExperienceGroup
          key={section.title}
          title={section.title}
          experiences={section.experiences}
        />
      ))}
    </section>
  );
}