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

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto w-full max-w-4xl"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
          }}
        >
          About Me
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 p-10 shadow-2xl backdrop-blur-sm dark:border-blue-800/50 dark:from-blue-950/90 dark:via-zinc-900 dark:to-indigo-950/90"
          style={{
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)',
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
          <div className="relative z-10">
            <p className="mb-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I'm a passionate software engineering student currently pursuing my degree at university.
              I love solving complex problems and turning ideas into reality through code. My journey in
              software development has been driven by curiosity and a desire to create meaningful impact
              through technology.
            </p>
            <p className="mb-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or collaborating with peers on exciting initiatives. I'm always eager to learn and
              take on new challenges that push me to grow as a developer.
            </p>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Skills & Technologies
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Python',
                  'Java',
                  'Git',
                  'HTML/CSS',
                  'Tailwind CSS',
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-md transition-colors dark:bg-blue-900/50 dark:text-blue-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
