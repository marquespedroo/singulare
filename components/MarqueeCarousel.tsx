import React from 'react';

interface MarqueeCarouselProps {
    items: { img: string; title: string; subtitle?: string }[];
    onItemClick?: (index: number) => void;
    baseSpeed?: string; // e.g. "40s"
    showTitle?: boolean;
    itemClass?: string;
}

const MarqueeCarousel: React.FC<MarqueeCarouselProps> = ({
    items,
    onItemClick,
    baseSpeed = "40s",
    showTitle = true,
    itemClass = "w-[80vw] md:w-[600px] h-[400px] md:h-[500px]" // Default horizontal
}) => {
    // Triple the items to ensure smooth infinite loop coverage
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="relative w-full">
            <div
                className="flex space-x-8 w-max hover:[animation-play-state:paused]"
                style={{
                    animation: `marquee ${baseSpeed} linear infinite`
                }}
            >
                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => onItemClick && onItemClick(index % items.length)}
                        className={`relative shrink-0 group ${itemClass} ${onItemClick ? 'cursor-pointer' : ''}`}
                    >
                        <div className="absolute inset-0 bg-graphite/10 transform skew-x-[-5deg] translate-x-4 translate-y-4" />
                        <div className="relative w-full h-full overflow-hidden skew-x-[-5deg]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                            {showTitle && (
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-white font-serif text-3xl italic">{item.title}</h3>
                                    {item.subtitle && (
                                        <p className="text-white/60 font-sans text-sm uppercase tracking-widest mt-2">{item.subtitle}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move by 1/3 since we tripled the list */
        }
      `}</style>
        </div>
    );
};

export default MarqueeCarousel;
