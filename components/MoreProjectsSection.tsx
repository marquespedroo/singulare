import React, { useState } from 'react';
import { OTHER_PROJECTS } from '../constants';
import MarqueeCarousel from './MarqueeCarousel';
import GalleryModal from './GalleryModal';

const MoreProjectsSection: React.FC = () => {
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openGallery = (index: number) => {
        setCurrentIdx(index);
        setGalleryOpen(true);
    };

    return (
        <section id="more-projects" className="py-24 bg-ice-white border-t border-graphite/5">
            <div className="container mx-auto px-6 mb-12 text-center md:text-left">
                <span className="text-bronze text-xs font-sans font-bold tracking-[0.3em] uppercase">
                    Portfólio
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-graphite mt-4 mb-6">
                    Mais <span className="italic text-bronze">Empreendimentos</span>
                </h2>
                <p className="font-sans font-light text-graphite/70 text-lg max-w-2xl">
                    Conheça outros projetos que carregam a nossa assinatura de excelência e exclusividade.
                </p>
            </div>

            <MarqueeCarousel
                items={OTHER_PROJECTS}
                baseSpeed="50s"
                onItemClick={openGallery}
                showTitle={false}
                itemClass="w-[70vw] md:w-[400px] h-[500px] md:h-[600px]" // Vertical Ratio
            />

            <GalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setGalleryOpen(false)}
                items={OTHER_PROJECTS}
                startIndex={currentIdx}
                showTitle={false}
                ctaLink="https://wa.me/message/2HXZGHMSM2TQL1"
                ctaLabel="Falar com Corretor"
            />
        </section>
    );
};

export default MoreProjectsSection;
