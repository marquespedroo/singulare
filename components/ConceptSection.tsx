import React from 'react';
import { IMAGES } from '../constants';

const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="relative pt-0 pb-24 md:pt-12 bg-ice-white overflow-hidden">

      {/* Decorative Line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-bronze/10 -skew-x-[15deg] z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Part 1: Why Singulare - Split Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 items-start">

          {/* Left Column: Title */}
          <div className="md:w-1/2 animate-float-up">
            <span className="text-bronze text-xs font-sans font-bold tracking-[0.3em] uppercase">Por que Singulare?</span>
            <h2 className="text-4xl md:text-6xl font-serif text-graphite mt-4 italic leading-tight">
              A escolha certa para <br />o seu futuro.
            </h2>
          </div>

          {/* Right Column: List & CTA */}
          <div className="md:w-1/2 space-y-10 animate-float-up md:mt-14" style={{ animationDelay: '200ms' }}>
            <ul className="space-y-6">
              {[
                "Condições especiais apenas para pré-lista",
                "Localização estratégica que valoriza todos os anos",
                "Lazer completo para sua família",
                "Parcelas acessíveis e uso do FGTS"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4 group">
                  <span className="w-6 h-[1px] bg-bronze mt-3 group-hover:w-12 transition-all duration-300" />
                  <span className="font-sans font-light text-graphite/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/message/2HXZGHMSM2TQL1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-graphite pb-1 text-sm font-sans uppercase tracking-widest hover:text-bronze hover:border-bronze transition-colors"
            >
              → Quero me qualificar
            </a>
          </div>

        </div>



        {/* Part 2: Assinatura Uniqua */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-[10rem] md:text-[20rem] font-serif italic whitespace-nowrap">UNIQUA</span>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16">

            <div className="md:w-1/2 relative">
              <div className="relative overflow-hidden skew-clip w-full aspect-[4/3] shadow-2xl">
                <img
                  src={IMAGES.FACADE_TEXTURE}
                  alt="Fachada Moderna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-graphite">
                Empreendimento com <br /> <span className="italic text-bronze">Assinatura Uniqua</span>
              </h2>
              <p className="font-sans font-light text-graphite/70 text-lg leading-relaxed">
                Sua oportunidade de morar em um projeto diferenciado, moderno e com alto potencial de valorização em Samambaia Sul.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans font-light text-sm text-graphite/80">
                {[
                  "Fachada moderna e exclusiva",
                  "Elevadores novos e eficientes",
                  "Portaria inteligente",
                  "Estacionamento interno",
                  "Baixa taxa de condomínio",
                  "Pensado para valorização"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-bronze rounded-full" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/message/2HXZGHMSM2TQL1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-bronze font-sans text-sm uppercase tracking-widest mt-4"
              >
                <span>Quero receber o material completo</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
};

export default ConceptSection;