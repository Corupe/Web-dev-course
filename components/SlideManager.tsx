'use client';

import { useState, useEffect, useRef } from 'react';
import { Slide } from './Slide';
import { Header } from './Header';
import { AnimatePresence } from 'framer-motion';
import { ProgressBar } from './ProgressBar';
import { NavigationDots } from './NavigationDots';
import { slides } from '@/app/data/slides';

export function SlideManager() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const totalSlides = slides.length;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <div
      className="relative w-screen h-screen bg-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header />

      {/* Slide container */}
      <div className="relative w-full h-[calc(100vh-80px)] mt-20">
        <AnimatePresence mode="wait">
          <Slide
            key={slides[currentSlide].id}
            slide={slides[currentSlide]}
            isActive={true}
            index={currentSlide}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <ProgressBar current={currentSlide} total={totalSlides} />
      <NavigationDots
        current={currentSlide}
        total={totalSlides}
        onDotClick={goToSlide}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
}
