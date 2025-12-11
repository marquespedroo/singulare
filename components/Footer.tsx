import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
   return (
      <footer id="contact" className="bg-[#F8F8F6] pt-12 relative">

         {/* SECTION 1: Payment & FAQ */}
         <div className="container mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

               {/* Payment Info */}
               <div>
                  <h3 className="text-3xl font-serif text-graphite italic mb-8">Formas de Pagamento <br /> Facilitadas</h3>
                  <p className="font-sans text-graphite/70 mb-8">A chance de entrar em um grande empreendimento sem apertar o orçamento.</p>
                  <ul className="space-y-4 font-sans text-graphite">
                     {[
                        "Entrada facilitada durante a obra",
                        "Uso de FGTS",
                        "Possibilidade de subsídio",
                        "Parcelas que cabem no bolso",
                        "Documentação simples e rápida"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 border-b border-graphite/10 pb-2">
                           <span className="text-bronze">✓</span>
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
                  <a
                     href="https://wa.me/message/2HXZGHMSM2TQL1"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b-2 border-bronze text-graphite pb-1 hover:text-bronze transition-colors"
                  >
                     Solicitar Minha Simulação
                  </a>
               </div>

               {/* FAQ */}
               <div className="bg-white p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-serif text-graphite mb-6">Dúvidas Frequentes</h3>
                  <div className="space-y-6">
                     <div>
                        <p className="font-bold text-graphite text-sm mb-1">Posso usar FGTS?</p>
                        <p className="font-light text-graphite/70 text-sm">Sim, e isso pode diminuir muito a entrada.</p>
                     </div>
                     <div>
                        <p className="font-bold text-graphite text-sm mb-1">Qual renda mínima preciso?</p>
                        <p className="font-light text-graphite/70 text-sm">Depende da unidade. Faço sua simulação agora.</p>
                     </div>
                     <div>
                        <p className="font-bold text-graphite text-sm mb-1">O que garante minha vaga na pré-lista?</p>
                        <p className="font-light text-graphite/70 text-sm">O envio dos documentos e análise. É rápido e sem compromisso.</p>
                     </div>
                     <div>
                        <p className="font-bold text-graphite text-sm mb-1">Vai ter valorização?</p>
                        <p className="font-light text-graphite/70 text-sm">Sim. Pelo padrão do projeto e localização, a valorização é prevista desde a obra.</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         {/* SECTION 2: Final Conversion & Footer */}
         <div className="bg-graphite text-ice-white pt-24 pb-12 relative overflow-hidden">
            {/* Skewed Top Border */}
            <div className="absolute top-0 left-0 w-full h-20 bg-[#F8F8F6] skew-y-[-2deg] origin-top-right -translate-y-10" />

            <div className="container mx-auto px-6 relative z-10">

               {/* Final Call */}
               <div className="max-w-4xl mx-auto text-center mb-24">
                  <div className="inline-block border border-bronze px-4 py-1 rounded-full text-bronze text-xs font-sans uppercase tracking-widest mb-6">
                     Consultor Oficial Singulare
                  </div>

                  {/* Agent Photo */}
                  <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-2 border-bronze shadow-lg">
                     <img src={IMAGES.RICARDO_SANTOS} alt="Ricardo Santos" className="w-full h-full object-cover" />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Ricardo Santos</h2>
                  <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed italic mb-10">
                     “Se você quer entrar na lista enquanto ainda dá tempo, eu posso te colocar na frente hoje mesmo. Não espere abrir ao público.”
                  </p>
                  <a
                     href="https://wa.me/message/2HXZGHMSM2TQL1"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-bronze text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-bronze transition-colors duration-300 transform hover:scale-105"
                  >
                     Falar agora com Ricardo (WhatsApp)
                  </a>
               </div>

               <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/30 uppercase tracking-wider">
                  <p>© 2025 Singulare Inc. | Direcional + Riva</p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                     <a
                        href="https://www.instagram.com/singularehomesamambaia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                     >
                        Instagram
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;