'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationDotsProps {
  current: number;
  total: number;
  onDotClick: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationDots({
  current,
  total,
  onDotClick,
  onPrevious,
  onNext,
}: NavigationDotsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-40">
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-600 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Navigation Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all ${
              current === index
                ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-slate-blue-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
          />
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-600 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="ml-4 text-sm font-semibold text-gray-600 min-w-12 text-right"
      >
        {current + 1}/{total}
      </motion.div>
    </div>
  );
}
