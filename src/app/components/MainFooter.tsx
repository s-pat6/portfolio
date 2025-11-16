import { motion } from 'framer-motion';

export default function MainFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-zinc-200 py-8 text-center text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
    >
      <p>© {new Date().getFullYear()} Portfolio. Built with Next.js and Tailwind CSS.</p>
    </motion.footer>
  );
}
