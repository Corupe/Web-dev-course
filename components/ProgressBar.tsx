'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-slate-blue-600 origin-left"
      style={{ width: `${progress}%` }}
    />
  );
}
