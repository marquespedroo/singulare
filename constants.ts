import skyImage from '@/assests-public/gallery_1.jpeg';
import detailImage from '@/assests-public/detail_image.png';
import verticalBuilding from '@/assests-public/vertical_building.jpeg';
import interiorImage from '@/assests-public/interior_image.png';
import gallery3 from '@/assests-public/gallery_3.jpeg';
import gallery4 from '@/assests-public/gallery_4.jpeg';
import gallery5 from '@/assests-public/gallery_5.jpeg';
import poolDay from '@/assests-public/pool_day.jpeg';

export const MENU_ITEMS = [
  { label: "O EMPREENDIMENTO", href: "#concept" },
  { label: "LOCALIZAÇÃO", href: "#location" },
  { label: "LAZER E PLANTAS", href: "#interiors" },
  { label: "PAGAMENTO E CONTATO", href: "#contact" },
  { label: "FALAR COM O CORRETOR", href: "https://wa.me/5561999999999" }, // Added CTA
];

export const IMAGES = {
  SKY_VIDEO_FALLBACK: skyImage,
  FACADE_TEXTURE: detailImage,
  BUILDING_VERTICAL: verticalBuilding,
  INTERIOR_1: poolDay, // Good for pool/leisure
  INTERIOR_2: interiorImage, // Good for gym/interior
  INTERIOR_3: gallery3, // Good for gourmet
  FLOOR_PLAN: gallery5, // Placeholder for plan
  GALLERY_EXTRA_1: gallery4,
};