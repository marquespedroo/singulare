import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../constants';
import logoBlack from '@/assests-public/logo_black.svg';
import geminiImage from '@/assests-public/Gemini_Generated_Image_452qae452qae452q.png';

import detailImage from '@/assests-public/detail_image.png';
import interiorImage from '@/assests-public/interior_image.png';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  // Left Card Refs
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);

  // Right Card Refs
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  // Small Detail Card Refs (Front)
  const smallContainerRef = useRef<HTMLDivElement>(null);
  const smallImageRef = useRef<HTMLDivElement>(null);

  // Middle Interior Card Refs (Back)
  const middleContainerRef = useRef<HTMLDivElement>(null);
  const middleImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animation on mount
    setTimeout(() => setLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;

      // Animate Left Card
      if (leftContainerRef.current && leftImageRef.current) {
        leftContainerRef.current.style.transform = `rotate(-15deg) translate(${x}px, ${y}px)`;
        leftImageRef.current.style.transform = `scale(1.2) translate(${-x * 0.5}px, ${-y * 0.5}px)`;
      }

      // Animate Right Card
      if (rightContainerRef.current && rightImageRef.current) {
        rightContainerRef.current.style.transform = `rotate(-15deg) translate(${x * 1.2}px, ${y * 1.2}px)`;
        // No scale/inverse translate for right image to avoid "zooming" effect as requested, just static cover
      }

      // Animate Small Detail Card (Foreground - Fast)
      if (smallContainerRef.current && smallImageRef.current) {
        smallContainerRef.current.style.transform = `rotate(-15deg) translate(${x * 1.5}px, ${y * 1.5}px)`; // Faster for foreground effect
        smallImageRef.current.style.transform = `rotate(15deg) scale(1.2) translate(${-x * 0.3}px, ${-y * 0.3}px)`;
      }

      // Animate Middle Interior Card (Foreground - Medium Fast)
      if (middleContainerRef.current && middleImageRef.current) {
        middleContainerRef.current.style.transform = `rotate(-15deg) translate(${x * 1.4}px, ${y * 1.4}px)`;
        middleImageRef.current.style.transform = `rotate(15deg) scale(1.2) translate(${-x * 0.25}px, ${-y * 0.25}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-ice-white pt-20 md:pt-0">

      {/* Drawing Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <line
          x1="0" y1="100%" x2="100%" y2="0"
          className={`stroke-bronze stroke-[1px] transition-all duration-[2000ms] ease-out ${loaded ? 'opacity-30 stroke-dashoffset-0' : 'opacity-0 stroke-dashoffset-full'}`}
          strokeDasharray="2000"
          strokeDashoffset={loaded ? "0" : "2000"}
        />
        <line
          x1="20%" y1="0" x2="100%" y2="80%"
          className={`stroke-bronze stroke-[1px] transition-all duration-[2500ms] delay-500 ease-out ${loaded ? 'opacity-20 stroke-dashoffset-0' : 'opacity-0 stroke-dashoffset-full'}`}
          strokeDasharray="2000"
          strokeDashoffset={loaded ? "0" : "2000"}
        />
      </svg>

      <div className="relative z-10 w-full max-w-[95vw] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 md:translate-x-24">

        {/* --- LEFT CARD (Logo & Sky) --- */}
        <div className="relative w-[85vw] md:w-[50vw] h-[45vh] md:h-[65vh] flex items-center justify-center">
          {/* Mask */}
          <div
            ref={leftContainerRef}
            className={`absolute inset-0 overflow-hidden shadow-2xl transition-all duration-1000 ease-out origin-center
              ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              transform: 'rotate(-15deg)',
            }}
          >
            {/* Background Color (Solid) */}
            <div
              ref={leftImageRef}
              className="absolute inset-[-50%] w-[200%] h-[200%] bg-[#291C15]"
              style={{
                transform: 'scale(1.2)',
              }}
            />

            {/* Border Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon
                points="20,0 100,0 80,100 0,100"
                fill="none"
                className="stroke-bronze opacity-50"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Typography Overlay (Main) */}
          <div className={`relative z-30 text-center transition-all duration-[2000ms] delay-700 flex flex-col items-center justify-center
               ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <img
              src={logoBlack}
              alt="SINGULARE HOME"
              className="w-[250px] md:w-[500px] h-auto invert drop-shadow-2xl opacity-100 transition-all duration-700 hover:scale-105"
            />

            <div className="mt-6 md:mt-8 w-20 h-[1px] bg-white/60 mb-6 md:mb-8"></div>

            <p className="max-w-xs md:max-w-xl text-center text-xs md:text-lg font-sans text-white uppercase tracking-[0.25em] leading-relaxed mb-8 md:mb-10 drop-shadow-md">
              O empreendimento mais esperado de Samambaia Sul
            </p>

            <button className="group relative px-8 py-3 md:px-12 md:py-5 bg-white text-graphite font-sans text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-bronze hover:text-white transition-all duration-300 transform hover:scale-105 hover:skew-x-[-10deg]">
              <span className="relative z-10 flex items-center gap-3">
                Garantir Prioridade Agora
                <span className="text-lg">→</span>
              </span>
            </button>
          </div>
        </div>

        {/* --- RIGHT CARD WRAPPER --- */}
        <div className="relative w-[70vw] md:w-[30vw] h-[30vh] md:h-[45vh] flex items-center justify-center z-10">

          {/* --- MAIN RIGHT CARD (Project Image) --- */}
          <div
            ref={rightContainerRef}
            className={`absolute inset-0 overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ease-out origin-center z-10
              ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              transform: 'rotate(-15deg)',
            }}
          >
            {/* Background Image (Project) */}
            <div
              ref={rightImageRef}
              className="absolute inset-[-15%] w-[130%] h-[130%] bg-no-repeat"
              style={{
                backgroundImage: `url(${geminiImage})`,
                backgroundSize: '120%', // Slightly vertically adjusted
                backgroundPosition: '80% 40%', // Shifted down to show more of the building base
                transform: 'rotate(15deg)', // Counter-rotate to make building upright
              }}
            >
              {/* Filter removed as requested */}
            </div>
            {/* Border Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon
                points="20,0 100,0 80,100 0,100"
                fill="none"
                className="stroke-bronze opacity-50"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* --- MIDDLE INTERIOR CARD (Foreground Layer) --- */}
          {/* <div
            ref={middleContainerRef}
            className={`absolute -bottom-16 -right-8 md:-bottom-24 md:-right-16 w-[35vw] md:w-[22vw] h-[20vh] md:h-[30vh] overflow-hidden shadow-lg transition-all duration-1000 delay-100 ease-out origin-center z-30
                ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
             `}
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              transform: 'rotate(-15deg)',
            }}
          >
            <div
              ref={middleImageRef}
              className="absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${interiorImage})`,
                transform: 'rotate(15deg) scale(1.2)',
              }}
            />
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon
                points="20,0 100,0 80,100 0,100"
                fill="none"
                className="stroke-bronze opacity-50"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div> */}

          {/* --- NEW SMALL DETAIL CARD (Overlapping) --- */}
          {/* <div
            ref={smallContainerRef}
            className={`absolute -bottom-16 -left-16 md:-bottom-24 md:-left-24 w-[35vw] md:w-[15vw] h-[15vh] md:h-[22.5vh] overflow-hidden shadow-xl transition-all duration-1000 delay-500 ease-out origin-center z-20
                ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
             `}
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              transform: 'rotate(-15deg)',
            }}
          >
            <div
              ref={smallImageRef}
              className="absolute inset-[-20%] w-[140%] h-[140%] bg-cover"
              style={{
                backgroundImage: `url(${detailImage})`,
                backgroundPosition: 'center bottom', // Show bottom (pool) instead of center (trees)
                transform: 'rotate(15deg) scale(1.2)',
              }}
            />
          </div> */}

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-[2000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-bronze to-transparent animate-pulse" />
      </div>

    </section>
  );
};

export default Hero;