import React, { useEffect } from 'react';

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    items: { img: string; title: string; subtitle?: string }[];
    startIndex: number;
    showTitle?: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
    isOpen,
    onClose,
    items,
    startIndex,
    showTitle = true
}) => {
    const [currentIdx, setCurrentIdx] = React.useState(startIndex);

    useEffect(() => {
        setCurrentIdx(startIndex);
    }, [startIndex, isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIdx((prev) => (prev + 1) % items.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIdx((prev) => (prev - 1 + items.length) % items.length);
    };

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, items.length]);

    if (!isOpen) return null;

    const currentItem = items[currentIdx];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in" onClick={onClose}>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-8 md:right-24 text-white/50 hover:text-white transition-colors z-[110]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Navigation - Left */}
            <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110] p-4 group"
            >
                <div className="border border-white/20 rounded-full p-2 group-hover:border-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </button>

            {/* Main Image */}
            <div
                className="relative w-full max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={currentItem.img}
                        alt={currentItem.title}
                        className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-scale-in select-none"
                    />
                </div>
                {showTitle && (
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl md:text-3xl font-serif text-white italic mb-2 tracking-wide">
                            {currentItem.title}
                        </h3>
                        {currentItem.subtitle && (
                            <p className="text-white/60 font-sans text-sm uppercase tracking-widest mb-1">{currentItem.subtitle}</p>
                        )}
                        <p className="text-white/40 font-sans text-xs uppercase tracking-widest">
                            {currentIdx + 1} / {items.length}
                        </p>
                    </div>
                )}
            </div>

            {/* Navigation - Right */}
            <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110] p-4 group"
            >
                <div className="border border-white/20 rounded-full p-2 group-hover:border-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>

        </div>
    );
};

export default GalleryModal;
