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

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center text-center"
    >
      <motion.p
        variants={itemVariants}
        className="mb-10 text-5xl text-zinc-600 dark:text-zinc-400 sm:text-10xl"
      >
        Hello, I'm
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="mb-12 text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl"
        style={{
          textShadow:
            '-10px 0 6px rgba(0, 191, 255, 0.4), -12px 0 12px rgba(0, 150, 255, 0.35), -15px 0 18px rgba(0, 100, 255, 0.3), -18px 0 24px rgba(0, 150, 255, 0.25), ' +
            '0 0 6px rgba(138, 43, 226, 0.3), 0 0 12px rgba(148, 0, 211, 0.25), 0 0 18px rgba(138, 43, 226, 0.2), 0 0 24px rgba(148, 0, 211, 0.15), ' +
            '10px 0 6px rgba(255, 20, 147, 0.4), 12px 0 12px rgba(255, 0, 150, 0.35), 15px 0 18px rgba(255, 20, 147, 0.3), 18px 0 24px rgba(255, 0, 150, 0.25), 20px 0 30px rgba(255, 20, 147, 0.2)',
          filter:
            'drop-shadow(-10px 0 10px rgba(0, 191, 255, 0.3)) drop-shadow(-12px 0 15px rgba(0, 150, 255, 0.25)) ' +
            'drop-shadow(0 0 12px rgba(138, 43, 226, 0.2)) drop-shadow(0 0 18px rgba(148, 0, 211, 0.15)) ' +
            'drop-shadow(10px 0 10px rgba(255, 20, 147, 0.3)) drop-shadow(12px 0 15px rgba(255, 0, 150, 0.25)) drop-shadow(15px 0 20px rgba(255, 20, 147, 0.2))',
        }}
      >
        Spandan Patel
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl"
      >
        I'm a <span
          className="relative font-semibold text-pink-600 dark:text-pink-400"
          style={{
            textShadow: '0 0 12px rgba(236, 72, 153, 0.7), 0 0 24px rgba(236, 72, 153, 0.4)',
            filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
          }}
        >
          computer science
        </span> major at
        <br />
        <img src="/UCLA-square-logo.jpg" alt="UCLA Logo" className="mt-4 h-20 w-auto rounded-xl shadow-lg mx-auto" />
      </motion.p>
    </motion.section>
  );
}
