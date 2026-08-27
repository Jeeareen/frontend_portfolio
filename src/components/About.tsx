import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';

interface AboutPillar {
  id: string;
  label: string;
  title: string;
  description: string;
}

const pillars: AboutPillar[] = [
  {
    id: 'trajectory',
    label: 'Trajectory',
    title: 'Tactile & High-Intent Experiences',
    description: 'A Frontend & AI Engineering student focused on building high-intent, tactile user experiences — engineered for deep engagement while maintaining peak performance.'
  },
  {
    id: 'tradeoffs',
    label: 'Tradeoffs',
    title: 'Minimizing Engineering Tradeoffs',
    description: 'Every interface choice involves tradeoffs. An app stripped of animations might be fast, but if nobody enjoys using it, it fails its purpose. I focus on creating rich, memorable interactions while squeezing out maximum performance.'
  },
  {
    id: 'philosophy',
    label: 'Core Philosophy',
    title: 'How It Feels in Your Hands',
    description: 'Software is more than static pixels on a canvas. I build for how software feels to interact with — responsive, tactile, and intuitive.'
  }
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 1
  })
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const activePillar = pillars[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || targetTag === 'SELECT') return;

      if (e.key === 'ArrowLeft') {
        if (activeIndex > 0) {
          setDirection(-1);
          setActiveIndex((prev) => prev - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (activeIndex < pillars.length - 1) {
          setDirection(1);
          setActiveIndex((prev) => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handleSelectTab = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < pillars.length - 1) {
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeIndex < pillars.length - 1) {
      handleNext();
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      handlePrev();
    }
  };

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] text-[#111827] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 w-full"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD070]/20 border border-[#FFD070]/50 text-xs font-semibold uppercase tracking-wider text-[#111827] font-['Saira_Semi_Condensed']">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-['Atkinson_Hyperlegible'] tracking-tight text-[#111827] text-center">
            Behind the Engineering
          </h2>
        </motion.div>

        {/* 3-Position Segmented Switch */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-gray-200/90 shadow-xs backdrop-blur-sm gap-1">
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => handleSelectTab(index)}
                  className={`relative h-10 px-2.5 sm:px-4 flex items-center justify-center text-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider font-['Saira_Semi_Condensed'] leading-[1.15] transition-colors cursor-pointer rounded-full focus:outline-none select-none ${isActive ? 'text-[#111827]' : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAboutTab"
                      className="absolute inset-0 h-10 w-full bg-[#FFD070]/30 border border-[#FFD070]/60 rounded-full"
                      transition={{ type: 'spring', stiffness: 405, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-center leading-[1.15] min-[373px]:whitespace-nowrap max-[372px]:whitespace-normal">{pillar.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Container with Desktop Side Arrows + Mobile Touch Drag */}
        <div className="relative flex items-center justify-center pt-4">
          {/* Desktop Prev Arrow */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className={`hidden md:flex absolute -left-6 lg:-left-12 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/90 border border-gray-200/90 text-gray-700 shadow-md transition-all duration-200 cursor-pointer focus:outline-none ${activeIndex === 0
                ? 'opacity-30 cursor-not-allowed shadow-none'
                : 'hover:scale-110 hover:shadow-xl hover:border-gray-300 hover:bg-white active:scale-95 text-gray-900'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Active Card Display (Reduced Mobile Height + Directional Carousel Slide) */}
          <div className="w-full max-w-2xl h-[450px] xs:h-[390px] sm:h-[340px] md:h-[320px] flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={activePillar.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 450, damping: 38 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="w-full h-full pt-6 sm:pt-8 pb-6 sm:pb-10 px-5 sm:px-8 md:px-10 rounded-2xl bg-white border border-gray-200/90 touch-pan-y cursor-grab active:cursor-grabbing select-none flex flex-col justify-start items-center absolute"
              >
                <div className="space-y-3 md:space-y-4 text-center flex flex-col items-center justify-start w-full">
                  <span className="inline-block text-xs font-bold font-['Saira_Semi_Condensed'] text-[#111827] uppercase tracking-wider bg-[#FFD070]/20 border border-[#FFD070]/50 px-3 py-1 rounded-md">
                    {activePillar.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-['Atkinson_Hyperlegible'] text-[#111827]">
                    {activePillar.title}
                  </h3>
                  <p className="text-base md:text-lg font-['Atkinson_Hyperlegible'] text-gray-600 leading-relaxed max-w-lg text-center">
                    {activePillar.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Next Arrow */}
          <button
            onClick={handleNext}
            disabled={activeIndex === pillars.length - 1}
            aria-label="Next card"
            className={`hidden md:flex absolute -right-6 lg:-right-12 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/90 border border-gray-200/90 text-gray-700 shadow-md transition-all duration-200 cursor-pointer focus:outline-none ${activeIndex === pillars.length - 1
                ? 'opacity-30 cursor-not-allowed shadow-none'
                : 'hover:scale-110 hover:shadow-xl hover:border-gray-300 hover:bg-white active:scale-95 text-gray-900'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}