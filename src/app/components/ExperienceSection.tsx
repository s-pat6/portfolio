import { motion } from 'framer-motion';

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

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
    >
      <motion.div variants={itemVariants} className="mx-auto w-full max-w-4xl">
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
            filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))',
          }}
        >
          Experience
        </motion.h2>
        <motion.div variants={containerVariants} className="space-y-6">
          {/* School Involvement / Clubs */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Club/Organization Name
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Role/Position
                </p>
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Present
              </span>
            </div>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              Description of your involvement, responsibilities, and achievements in this club or organization.
              Highlight any technical projects, leadership roles, or initiatives you've led or contributed to.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>Key achievement or responsibility</li>
              <li>Another significant contribution</li>
              <li>Technical project or initiative you worked on</li>
            </ul>
          </motion.div>

          {/* Additional Experience Item */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Another Experience
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Role/Position • Date Range
                </p>
              </div>
            </div>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              Description of this experience, what you learned, and how it contributed to your growth
              as a software engineer.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>Notable achievement or project</li>
              <li>Skills developed or technologies used</li>
              <li>Impact or results of your work</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
