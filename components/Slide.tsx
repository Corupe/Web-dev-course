'use client';

import { motion } from 'framer-motion';
import { SlideContent } from '@/app/data/slides';

interface SlideProps {
  slide: SlideContent;
  isActive: boolean;
  index: number;
}

export function Slide({ slide, isActive, index }: SlideProps) {
  const getTitleSlideGradient = (bg?: string) => {
    if (bg === 'from-purple-900 to-slate-blue-900') {
      return 'from-[#5a189a] to-[#4e56a4]';
    }
    if (bg === 'from-slate-blue-900 to-purple-900') {
      return 'from-[#4e56a4] to-[#5a189a]';
    }
    return 'from-[#5a189a] to-[#4e56a4]';
  };

  if (slide.type === 'title') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 bg-gradient-to-br ${getTitleSlideGradient(slide.backgroundColor)} flex flex-col items-center justify-center text-white px-8`}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-6 text-balance">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-3xl font-light text-blue-100">{slide.subtitle}</p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  if (slide.type === 'section') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-br from-[#5a189a] via-purple-900 to-[#4e56a4] flex flex-col items-center justify-center text-white px-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <div className="text-6xl font-bold mb-4">Day {slide.day}</div>
          <h2 className="text-5xl font-bold mb-8">{slide.title}</h2>
          {slide.content && (
            <p className="text-2xl text-blue-100 font-light leading-relaxed">{slide.content}</p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // Content slide
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 bg-white flex flex-col justify-between p-16"
    >
      <div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-lg text-sm font-semibold mb-4">
            Day {slide.day}
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4 text-balance">{slide.title}</h2>
          {slide.content && (
            <p className="text-2xl text-gray-700 font-light leading-relaxed">{slide.content}</p>
          )}
        </motion.div>

        {slide.bulletPoints && (
          <motion.ul className="space-y-5 mt-10">
            {slide.bulletPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="text-xl text-gray-700 flex items-start"
              >
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-5 mt-2 flex-shrink-0"></span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-right text-gray-400 text-sm"
      >
        Slide {index + 1}
      </motion.div>
    </motion.div>
  );
}
