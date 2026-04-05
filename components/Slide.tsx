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
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 overflow-hidden"
      >
        {slide.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 blur-sm" 
            style={{ backgroundImage: `url(${slide.image})` }} 
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${getTitleSlideGradient(slide.backgroundColor)} ${slide.image ? 'opacity-85 mix-blend-multiply' : ''} z-10`} />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center relative z-20"
        >
          <h1 className="text-7xl font-bold mb-6 text-balance drop-shadow-xl">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-3xl font-light text-white/90 drop-shadow-md">{slide.subtitle}</p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  if (slide.type === 'section') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 ${slide.backgroundColor ? `bg-gradient-to-br ${slide.backgroundColor}` : 'bg-gradient-to-br from-[#5a189a] via-purple-900 to-[#4e56a4]'} flex flex-col items-center justify-center text-white px-8 overflow-hidden`}
      >
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], x: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent"
          />
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-2xl relative z-10"
        >
          <div className="text-6xl font-bold mb-4 drop-shadow-md">Day {slide.day}</div>
          <h2 className="text-5xl font-bold mb-8 drop-shadow-lg">{slide.title}</h2>
          {slide.content && (
            <p className="text-2xl text-blue-100 font-light leading-relaxed drop-shadow-sm">{slide.content}</p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // Content slide
  const hasCustomBg = !!slide.backgroundColor;
  const isDarkBg = hasCustomBg; // Our added backgrounds are all dark
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`absolute inset-0 ${hasCustomBg ? `bg-gradient-to-br ${slide.backgroundColor}` : 'bg-white'} flex flex-col justify-between p-16 overflow-hidden`}
    >
      {hasCustomBg && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[120px] opacity-20"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0] 
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-black blur-[120px] opacity-20"
          />
        </div>
      )}

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className={`inline-block px-4 py-2 ${isDarkBg ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-purple-100 text-purple-900'} rounded-lg text-sm font-semibold mb-4 shadow-sm`}>
            Day {slide.day}
          </div>
          <h2 className={`text-6xl font-bold ${isDarkBg ? 'text-white' : 'text-gray-900'} mb-4 text-balance drop-shadow-sm`}>{slide.title}</h2>
          {slide.content && (
            <p className={`text-2xl ${isDarkBg ? 'text-gray-200' : 'text-gray-700'} font-light leading-relaxed`}>{slide.content}</p>
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
                className={`text-xl ${isDarkBg ? 'text-gray-100 font-medium' : 'text-gray-700'} flex items-start`}
              >
                <span className={`inline-block w-3 h-3 ${isDarkBg ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-purple-600'} rounded-full mr-5 mt-2 flex-shrink-0`}></span>
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
        className={`text-right ${isDarkBg ? 'text-white/50' : 'text-gray-400'} text-sm relative z-10 font-medium w-full`}
      >
        Slide {index + 1}
      </motion.div>
    </motion.div>
  );
}
