import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../constants';
import geminiImage from '@/assests-public/Gemini_Generated_Image_452qae452qae452q.png';

import detailImage from '@/assests-public/detail_image.png';
import interiorImage from '@/assests-public/interior_image.png';
import SingulareLogo3D from './3d/SingulareLogo3D';

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
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-ice-white pt-24 md:pt-0">

      {/* Drawing Lines (SVG) - Kept for background ambience */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
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

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 h-full relative z-10">

        {/* --- LEFT COLUMN: Logo & Text --- */}
        <div className={`relative z-30 text-center md:text-left transition-all duration-[2000ms] delay-700 flex flex-col items-center md:items-start justify-center md:w-1/2 md:-mt-40
             ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="mb-6 opacity-0 animate-float-up relative z-20" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <span className="inline-block px-6 py-2 bg-[#2F2A35] text-white border border-[#2F2A35] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] rounded-full shadow-lg">
              Destaque
            </span>
          </div>

          {/* Container for Logo & Background Parallelograms */}
          <div className="relative w-[280px] h-[140px] md:w-[500px] md:h-[260px] mb-6 md:mb-8 transition-all duration-700 hover:scale-105">

            {/* 3D Logo (Foreground) */}
            <div className="relative z-30 w-full h-full">
              <SingulareLogo3D />
            </div>

            {/* Project Image Parallelograms (Background - Centered) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 scale-[2.0] md:scale-[2.5] origin-center pointer-events-none opacity-60 translate-y-4 md:translate-y-24">
              {/* Wrapper to contain them */}
              <div className="relative w-[300px] h-[180px] flex items-center justify-center">

                {/* Green Card (Background Frame) */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div
                    className={`absolute inset-0 overflow-hidden shadow-xl transition-all duration-1000 ease-out origin-center ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{
                      clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                      transform: 'rotate(-15deg)',
                    }}
                  >
                    <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-[#B8977E]" style={{ transform: 'scale(1.2)' }} />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon points="20,0 100,0 80,100 0,100" fill="none" className="stroke-bronze opacity-50" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                </div>

                {/* Project Image Card (Overlapping Center) */}
                <div className="absolute z-20 inset-0 flex items-center justify-center">
                  <div
                    className={`w-[220px] h-[140px] relative overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ease-out origin-center ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{
                      clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                      transform: 'rotate(-15deg) translate(10px, -10px)',
                    }}
                  >
                    <div
                      className="absolute inset-[-15%] w-[130%] h-[130%] bg-no-repeat"
                      style={{
                        backgroundImage: `url(${geminiImage})`,
                        backgroundSize: '120%',
                        backgroundPosition: '80% 40%',
                        transform: 'rotate(15deg)',
                      }}
                    />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon points="20,0 100,0 80,100 0,100" fill="none" className="stroke-bronze opacity-50" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-2 md:mt-4 w-16 md:w-20 h-[1px] bg-[#2F2A35]/60 relative z-20"></div>

          <p className="max-w-xs md:max-w-md text-sm md:text-lg font-sans text-[#2F2A35] uppercase tracking-[0.2em] leading-relaxed mb-8 md:mb-12 drop-shadow-sm font-medium relative z-20">
            O empreendimento mais esperado de Samambaia Sul
          </p>

          <a
            href="https://wa.me/message/2HXZGHMSM2TQL1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-20 inline-block px-8 py-3 md:px-10 md:py-4 bg-[#2F2A35] text-white font-sans text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-bronze transition-all duration-300 transform hover:scale-105 hover:skew-x-[-10deg] shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              Garantir Prioridade Agora
              <span className="text-lg">→</span>
            </span>
          </a>
        </div>

        {/* --- RIGHT COLUMN: Consultant Card --- */}
        <div className={`relative z-40 md:w-1/2 flex justify-center md:justify-end transition-all duration-[2000ms] delay-1000
             ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
        `}>
          <div className="relative p-8 md:p-10 border border-bronze/20 bg-white shadow-2xl skew-x-[-5deg] group hover:border-bronze/40 transition-colors max-w-xl md:max-w-2xl w-full">
            <div className="skew-x-[5deg]"> {/* Unskew content */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 overflow-hidden border border-bronze/20 shadow-sm">
                  <img src={IMAGES.RICARDO_SANTOS} alt="Ricardo Santos" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-sans text-bronze uppercase tracking-widest mb-1">Seu Consultor Exclusivo</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-graphite">Ricardo Santos</h3>
                  <p className="text-sm md:text-base font-sans text-graphite/50">Direcional Vendas / Riva</p>
                </div>
              </div>

              <blockquote className="font-serif italic text-lg md:text-xl text-graphite/80 mb-6 border-l-2 border-bronze pl-4">
                “O meu trabalho é garantir que você entre antes de todo mundo e tenha acesso às melhores oportunidades. A pré-lista já está quase no limite.”
              </blockquote>

              <a
                href="https://wa.me/message/2HXZGHMSM2TQL1"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-graphite text-white font-sans text-xs uppercase tracking-widest hover:bg-bronze transition-colors"
              >
                Falar com Ricardo Agora
              </a>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-graphite uppercase tracking-wide">Direcional + Riva</p>
                <p className="text-xs text-graphite/60 mt-1">Mais de 200 mil unidades entregues. Segurança e confiança.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-[2000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-bronze to-transparent animate-pulse" />
      </div>

    </section>
  );
};

export default Hero;