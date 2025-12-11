import skyImage from '@/assests-public/gallery_1.jpeg';
import detailImage from '@/assests-public/detail_image.png';
import verticalBuilding from '@/assests-public/vertical_building.jpeg';
import interiorImage from '@/assests-public/interior_image.png';
import gallery3 from '@/assests-public/gallery_3.jpeg';
import gallery4 from '@/assests-public/gallery_4.jpeg';
import gallery5 from '@/assests-public/gallery_5.jpeg';
import poolDay from '@/assests-public/pool_day.jpeg';

import floorPlan1 from '@/assests-public/floor_plan_1.png';
import floorPlan2 from '@/assests-public/floor_plan_2.png';
import gallery7 from '@/assests-public/gallery_7.jpeg';
import gallery8 from '@/assests-public/gallery_8.jpeg';
import terrenoImage from '@/assests-public/terreno.png';
import ricardoSantos from '@/assests-public/ricardo_santos.png';

export const MENU_ITEMS = [
    { label: "O EMPREENDIMENTO", href: "#concept" },
    { label: "LOCALIZAÇÃO", href: "#location" },
    { label: "LAZER E PLANTAS", href: "#interiors" },
    { label: "PAGAMENTO E CONTATO", href: "#contact" },
    { label: "FALAR COM O CORRETOR", href: "https://wa.me/message/2HXZGHMSM2TQL1" }, // Added CTA
];

export const IMAGES = {
    SKY_VIDEO_FALLBACK: skyImage,
    FACADE_TEXTURE: detailImage,
    BUILDING_VERTICAL: verticalBuilding,
    INTERIOR_1: poolDay, // Good for pool/leisure
    INTERIOR_2: interiorImage, // Good for gym/interior
    INTERIOR_3: gallery3, // Good for gourmet
    FLOOR_PLAN_1: floorPlan1,
    FLOOR_PLAN_2: floorPlan2,
    GALLERY_EXTRA_1: gallery4,

    // Carousel Images
    CAROUSEL_PISCINA: gallery3,
    CAROUSEL_PLAYGROUND: gallery4,
    CAROUSEL_GOURMET: gallery7,
    CAROUSEL_ACADEMIA: gallery8,
    CAROUSEL_TERRENO: terrenoImage,

    // Agent
    RICARDO_SANTOS: ricardoSantos,
};
