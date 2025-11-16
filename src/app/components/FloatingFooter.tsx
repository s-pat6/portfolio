import { motion } from 'framer-motion';

export default function FloatingFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-blue-200/50 bg-gradient-to-br from-blue-50/80 via-white/70 to-indigo-50/80 px-12 py-5 shadow-2xl backdrop-blur-md dark:border-blue-800/50 dark:from-blue-950/80 dark:via-zinc-900/70 dark:to-indigo-950/80"
      style={{
        boxShadow: '0 8px 32px rgba(59,130,246,0.15), 0 0 24px rgba(99,102,241,0.08)',
      }}
    >
      {/* LinkedIn */}
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/spandan-p/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform hover:scale-110"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-blue-600 dark:text-blue-400">
            <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
            <path d="M7.5 9.5v5h2v-5h-2zm1-1.5a1 1 0 110-2 1 1 0 010 2zm3 1.5v5h2v-2.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V14.5h2v-2.5c0-1.7-1.3-3-3-3s-3 1.3-3 3z" fill="currentColor"/>
          </svg>
        </a>
        <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
          LinkedIn
        </span>
      </div>
      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com/s-pat6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-transform hover:scale-110"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-zinc-700 dark:text-zinc-200">
            <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
          </svg>
        </a>
        <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
          GitHub
        </span>
      </div>
      {/* Email */}
      <div className="relative group">
        <a
          href="mailto:spandanpatel@ucla.edu"
          aria-label="Email"
          className="transition-transform hover:scale-110"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-pink-600 dark:text-pink-400">
            <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
            <path d="M4 8.5V16a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0020 16V8.5l-8 5-8-5zM20 7a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 004 7l8 5 8-5z" fill="currentColor"/>
          </svg>
        </a>
        <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
          Email
        </span>
      </div>
    </motion.footer>
  );
}
