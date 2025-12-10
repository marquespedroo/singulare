import React from 'react';
import { IMAGES } from '../constants';

const interiors = [
  { img: IMAGES.CAROUSEL_PISCINA, title: "Piscina Adulto" },
  { img: IMAGES.CAROUSEL_PLAYGROUND, title: "Playground" },
  { img: IMAGES.CAROUSEL_GOURMET, title: "Espaço Gourmet" },
  { img: IMAGES.CAROUSEL_ACADEMIA, title: "Academia Completa" },
  { img: IMAGES.CAROUSEL_TERRENO, title: "Terreno" },
];

const InteriorsSection: React.FC = () => {
  return (
    <section id="interiors" className="py-32 bg-ice-white overflow-hidden">

      {/* Header Leisure */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-bronze text-xs font-sans font-bold tracking-[0.3em] uppercase">Lazer Premium</span>
          <h2 className="text-4xl md:text-6xl font-serif text-graphite mt-4 mb-6">
            Lazer que valoriza <br /> <span className="italic text-bronze">o seu dia a dia</span>
          </h2>
          <p className="font-sans font-light text-graphite/70 text-xl">
            Estrutura completa para aproveitar cada momento com segurança e exclusividade.
          </p>
        </div>

        {/* Leisure Features Inline */}
        <div className="flex flex-wrap gap-4 mt-8">
          {["Piscina Adulto e Infantil", "Churrasqueiras", "Academia", "Salão de Festas", "Espaço Gourmet", "Playground"].map((item, i) => (
            <span key={i} className="px-4 py-2 bg-white border border-graphite/10 text-graphite/80 font-sans text-sm rounded-full">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <button className="text-bronze border-b border-bronze pb-1 font-serif italic text-xl hover:text-graphite transition-colors">
            Ver fotos e renders exclusivos →
          </button>
        </div>
      </div>

      {/* Marquee Gallery */}
      <div className="relative w-full mb-32">
        <div className="flex space-x-8 animate-[marquee_40s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {[...interiors, ...interiors].map((item, index) => (
            <div key={index} className="relative w-[80vw] md:w-[600px] h-[400px] md:h-[500px] shrink-0 group cursor-none">
              <div className="absolute inset-0 bg-graphite/10 transform skew-x-[-5deg] translate-x-4 translate-y-4" />
              <div className="relative w-full h-full overflow-hidden skew-x-[-5deg]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white font-serif text-3xl italic">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="container mx-auto px-6">
        <div className="bg-graphite text-ice-white p-8 md:p-16 relative overflow-hidden">
          {/* Background Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white transform -skew-x-12" />
            <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white transform -skew-x-12" />
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white transform -skew-x-12" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-serif italic mb-6">Plantas Inteligentes</h3>
              <p className="font-sans font-light text-white/70 mb-8 leading-relaxed">
                2 Quartos com Suíte e Varanda. Projetadas para quem quer praticidade, conforto e valorização. Plantas de 48,69m² a 54,35m².
              </p>
              <ul className="space-y-3 mb-10 font-sans text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-bronze rounded-full" /> Salas Amplas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-bronze rounded-full" /> Cozinha Integrada
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-bronze rounded-full" /> Banheiro com ventilação natural
                </li>
              </ul>
              <button className="px-8 py-3 bg-white text-graphite font-sans text-xs uppercase tracking-widest hover:bg-bronze hover:text-white transition-colors">
                Baixar as Plantas Agora
              </button>
            </div>

            <div className="md:w-1/2 flex flex-col md:flex-row justify-center gap-6">
              {/* Floor Plan 1 */}
              <div className="relative group overflow-hidden border border-white/10 bg-white/5 p-4 shadow-xl transition-all duration-300 hover:border-bronze/50 hover:shadow-bronze/20">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={IMAGES.FLOOR_PLAN_1}
                    alt="Planta 2 Quartos - Opção 1"
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-center text-xs text-bronze uppercase tracking-widest mt-4 font-bold">Final 01 e 02</p>
              </div>

              {/* Floor Plan 2 */}
              <div className="relative group overflow-hidden border border-white/10 bg-white/5 p-4 shadow-xl transition-all duration-300 hover:border-bronze/50 hover:shadow-bronze/20 md:mt-12">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={IMAGES.FLOOR_PLAN_2}
                    alt="Planta 2 Quartos - Opção 2"
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-center text-xs text-bronze uppercase tracking-widest mt-4 font-bold">Final 03 e 04</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default InteriorsSection;