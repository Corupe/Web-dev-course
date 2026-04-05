'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 flex items-center px-8 z-50">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        {/* Skill Boost Logo */}
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%201-eJ0In77NrXHW0mk1R4CMFyCMlMUiTR.png"
          alt="Skill Boost logo"
          className="w-10 h-10 object-contain"
        />
        <div>
          <h1 className="font-bold text-lg text-gray-900">Web Dev Course</h1>
          <p className="text-xs text-gray-500">3-Day Intensive</p>
        </div>
      </motion.div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ml-auto text-sm text-gray-500 hidden sm:block"
      >
        Use <span className="font-semibold">← →</span> or click dots to navigate
      </motion.div>
    </header>
  );
}
