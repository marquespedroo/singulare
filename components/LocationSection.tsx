import React from 'react';
import { IMAGES } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-32 bg-[#F0F0EE]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-20">
          
          {/* Left: Image (Parallelogram) */}
          <div className="w-full md:w-5/12 relative">
             <div className="relative w-full aspect-[3/4] skew-clip-reverse overflow-hidden shadow-2xl group">
                <img 
                  src={IMAGES.BUILDING_VERTICAL} 
                  alt="Singulare no horizonte" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent mix-blend-multiply" />
                <div className="absolute bottom-10 left-10 text-white z-10">
                   <p className="text-3xl font-serif italic">Conectado a tudo</p>
                </div>
             </div>
          </div>

          {/* Right: Map & Narrative */}
          <div className="w-full md:w-6/12 space-y-10">
            <div className="space-y-4">
              <span className="text-bronze text-xs font-sans font-bold tracking-[0.3em] uppercase">Localização Estratégica</span>
              <h2 className="text-4xl md:text-5xl font-serif text-graphite leading-tight">
                Morar perto do que você precisa <span className="italic font-light block mt-2">é viver melhor.</span>
              </h2>
              <p className="font-sans font-light text-graphite/70 text-lg leading-relaxed">
                Você estará próximo de tudo que facilita a sua rotina, gastando menos tempo no trânsito e aproveitando mais a vida.
              </p>
            </div>

            {/* Location List */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 font-sans text-graphite/80">
               {[
                 "Centro Urbano", "Avenida Principal",
                 "Administração", "Supermercados",
                 "Atacadistas", "Escolas",
                 "Pontos de Ônibus", "Metrô",
                 "Academias", "Centro de Samambaia"
               ].map((place, idx) => (
                 <div key={idx} className="flex items-center space-x-3 border-b border-bronze/10 pb-2">
                    <span className="text-bronze text-lg">›</span>
                    <span className="font-light">{place}</span>
                 </div>
               ))}
            </div>
            
            <button className="inline-flex px-8 py-3 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-widest">
               Ver no Mapa
            </button>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationSection;