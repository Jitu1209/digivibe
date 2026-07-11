import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: 'Aesthetic Floral Design',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Textured Rock Formations',
    image: 'https://images.unsplash.com/photo-1505245208761-ba872912fac0?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Coffee Ritual',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Ceramic Artistry',
    image: 'https://images.unsplash.com/photo-1581850518616-bcb8077fa213?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Minimalist Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
  },
];

export default function Curved3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Set rock formations (idx 1) as active initially to match prompt
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Check viewport width for responsive calculations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle slide transitions
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  };

  // Auto-play feature (Dribbble style)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  // Calculate circular wrap-around offsets
  const getOffset = (index) => {
    let offset = index - activeIndex;
    while (offset < -Math.floor(SLIDES.length / 2)) offset += SLIDES.length;
    while (offset > Math.floor(SLIDES.length / 2)) offset -= SLIDES.length;
    return offset;
  };

  return (
    <section 
      className="relative w-full bg-[#FCE7F3]/70 py-16 md:py-24 overflow-hidden z-10 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Curved Cutout Overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-white scale-y-105 origin-top">
          <path d="M0,0 L1440,0 L1440,20 Q720,80 0,20 Z" />
        </svg>
      </div>

      {/* Main 3D Slider Area */}
      <div 
        className="relative w-full h-[360px] md:h-[480px] flex items-center justify-center"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        {SLIDES.map((slide, idx) => {
          const offset = getOffset(idx);
          const absOffset = Math.abs(offset);
          
          // Layout calculations
          const separation = isMobile ? 130 : 360;
          const translateX = offset * separation;
          const translateZ = absOffset * (isMobile ? -90 : -160);
          const rotateY = offset * (isMobile ? 20 : 28);
          const scale = isMobile ? (1 - absOffset * 0.15) : (1 - absOffset * 0.1);
          
          const isActive = idx === activeIndex;

          return (
            <div
              key={slide.id}
              onClick={() => {
                if (offset !== 0) setActiveIndex(idx);
              }}
              className={`absolute w-[220px] h-[290px] md:w-[320px] md:h-[420px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl shadow-pink-900/15 cursor-pointer`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: 10 - absOffset,
                opacity: absOffset > 2 ? 0 : absOffset === 2 ? 0.4 : 1,
                pointerEvents: absOffset > 1 ? 'none' : 'auto',
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, z-index 0.8s ease',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="eager"
              />
              {/* Soft overlay gradient on side images */}
              <div 
                className={`absolute inset-0 bg-black/10 transition-opacity duration-700 pointer-events-none ${
                  isActive ? 'opacity-0' : 'opacity-40'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-5 mt-6 relative z-30">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-brand-purple/60 text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all duration-300 active:scale-95 cursor-pointer bg-white/80 backdrop-blur-sm shadow-md hover:shadow-brand-purple/20"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-brand-purple/60 text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all duration-300 active:scale-95 cursor-pointer bg-white/80 backdrop-blur-sm shadow-md hover:shadow-brand-purple/20"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Curved Cutout Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-white scale-y-105 origin-bottom">
          <path d="M0,100 L1440,100 L1440,80 Q720,20 0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
