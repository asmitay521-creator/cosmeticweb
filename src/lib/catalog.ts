import hero from "@/assets/hero.jpg";
import serum from "@/assets/serum.jpg";
import products from "@/assets/products.jpg";
import model2 from "@/assets/model2.jpg";
import skincare from "@/assets/skincare.jpg";
import lipstick from "@/assets/lipstick.jpg";
import imgFoundation from "@/assets/realms/foundation.jpg";
import imgBlush from "@/assets/realms/blush.jpg";
import imgEyes from "@/assets/realms/eyes.jpg";

// Brand-specific authentic product images
import imgGarnierVitaminC from "@/assets/products/garnier-vitamin-c-serum.jpg";
import imgLorealHyaluron from "@/assets/products/loreal-hyaluron-serum.jpg";
import imgGarnierMicellar from "@/assets/products/garnier-micellar-water.jpg";
import imgPondsGel from "@/assets/products/ponds-super-light-gel.jpg";
import imgMaybellineFitMe from "@/assets/products/maybelline-fitme-foundation.jpg";
import imgMaybellineSuperstay from "@/assets/products/maybelline-superstay-lipstick.jpg";
import imgLakmeKajal from "@/assets/products/lakme-eyeconic-kajal.jpg";
import imgLakmeCC from "@/assets/products/lakme-cc-cream.jpg";
import imgLorealMascara from "@/assets/products/loreal-lash-paradise.jpg";
import imgMatrixSerum from "@/assets/products/matrix-biolage-serum.jpg";
import imgStreaxSerum from "@/assets/products/streax-walnut-serum.jpg";
import imgLorealXtenso from "@/assets/products/loreal-xtenso-shampoo.jpg";

export const IMG = {
  hero,
  serum,
  products,
  model2,
  skincare,
  lipstick,
  imgFoundation,
  imgBlush,
  imgEyes,
  imgGarnierVitaminC,
  imgLorealHyaluron,
  imgGarnierMicellar,
  imgPondsGel,
  imgMaybellineFitMe,
  imgMaybellineSuperstay,
  imgLakmeKajal,
  imgLakmeCC,
  imgLorealMascara,
  imgMatrixSerum,
  imgStreaxSerum,
  imgLorealXtenso,
};

export type Product = {
  id: string;
  n: string;
  b: string;
  p: number;
  img: string;
  tag: string;
  c: string;
  d: string;
};

export const CATEGORIES = [
  "Skincare",
  "Haircare",
  "Makeup",
] as const;

export const PRODUCTS: Product[] = [
  // ── SKINCARE (100% Brand-Specific Photos) ──
  {
    id: "garnier-vitamin-c-serum",
    n: "Garnier Bright Complete 30x Vitamin C Booster Serum (30ml)",
    b: "Garnier",
    p: 449,
    img: imgGarnierVitaminC,
    tag: "Top Bestseller",
    c: "Skincare",
    d: "Enriched with Japanese Yuzu Lemon extract and 30x concentrated Vitamin C for glowing, spot-free skin.",
  },
  {
    id: "loreal-hyaluron-serum",
    n: "L'Oréal Paris Revitalift 1.5% Hyaluronic Acid Plumping Serum (30ml)",
    b: "L'Oréal Paris",
    p: 799,
    img: imgLorealHyaluron,
    tag: "Dermatologist Tested",
    c: "Skincare",
    d: "Lightweight, non-sticky hyaluronic acid formula that instantly hydrates and plumps skin from within.",
  },
  {
    id: "garnier-micellar-water",
    n: "Garnier Skin Naturals Micellar Cleansing Water (400ml)",
    b: "Garnier",
    p: 299,
    img: imgGarnierMicellar,
    tag: "Daily Essential",
    c: "Skincare",
    d: "All-in-1 micellar technology cleanses, lifts dirt, and removes waterproof makeup without harsh rubbing.",
  },
  {
    id: "ponds-super-light-gel",
    n: "Pond's Super Light Gel Oil-Free Moisturiser (100g)",
    b: "Pond's",
    p: 249,
    img: imgPondsGel,
    tag: "24H Hydration",
    c: "Skincare",
    d: "Super lightweight water-gel with Hyaluronic Acid and Vitamin E for a non-oily glowing finish.",
  },

  // ── MAKEUP (100% Brand-Specific Photos) ──
  {
    id: "maybelline-fit-me-foundation",
    n: "Maybelline New York Fit Me Matte+Poreless Foundation (30ml)",
    b: "Maybelline New York",
    p: 499,
    img: imgMaybellineFitMe,
    tag: "India's #1 Foundation",
    c: "Makeup",
    d: "Oil-control liquid foundation with SPF 22 that refines pores and delivers a natural seamless matte look.",
  },
  {
    id: "maybelline-superstay-matte-ink",
    n: "Maybelline Superstay Matte Ink Liquid Lipstick (5ml)",
    b: "Maybelline New York",
    p: 549,
    img: imgMaybellineSuperstay,
    tag: "16-Hour Wear",
    c: "Makeup",
    d: "Flawless matte finish in intensely pigmented shades that won't smudge, budge, or transfer all day.",
  },
  {
    id: "lakme-eyeconic-kajal",
    n: "Lakmé Eyeconic Deep Black Waterproof Kajal (0.35g)",
    b: "Lakmé",
    p: 199,
    img: imgLakmeKajal,
    tag: "24Hr Smudge-Proof",
    c: "Makeup",
    d: "Dermatologically tested waterproof black kajal with smooth glide texture for dramatic definition.",
  },
  {
    id: "lakme-9to5-cc-cream",
    n: "Lakmé 9 to 5 Complexion Care CC Cream SPF 30 (30g)",
    b: "Lakmé",
    p: 320,
    img: imgLakmeCC,
    tag: "Daily Glow",
    c: "Makeup",
    d: "All-in-one daily skin stylist cream that moisturises, conceals imperfections, and protects from sun damage.",
  },
  {
    id: "loreal-lash-paradise-mascara",
    n: "L'Oréal Paris Voluminous Lash Paradise Mascara (Black)",
    b: "L'Oréal Paris",
    p: 699,
    img: imgLorealMascara,
    tag: "Volumizing & Lift",
    c: "Makeup",
    d: "Silky smooth formula with castor oil for voluptuous volume and feathery soft lashes without clumping.",
  },

  // ── HAIRCARE (100% Brand-Specific Photos) ──
  {
    id: "matrix-biolage-smoothproof-serum",
    n: "Matrix Biolage 6-in-1 Smoothproof Avocado Serum (100ml)",
    b: "Matrix",
    p: 380,
    img: imgMatrixSerum,
    tag: "Salon Professional",
    c: "Haircare",
    d: "Infused with avocado and grape seed oils to tame frizz, add mirror shine, and protect against humidity.",
  },
  {
    id: "streax-vitariche-walnut-serum",
    n: "Streax Professional Vitariche Gloss Hair Serum with Walnut Oil (100ml)",
    b: "Streax Professional",
    p: 260,
    img: imgStreaxSerum,
    tag: "Instant Gloss",
    c: "Haircare",
    d: "Enriched with walnut oil and Vitamin E to revitalise dull tresses and deliver salon-like silkiness.",
  },
  {
    id: "loreal-xtenso-care-shampoo",
    n: "L'Oréal Professionnel X-Tenso Care Pro-Keratin Shampoo (250ml)",
    b: "L'Oréal Paris",
    p: 680,
    img: imgLorealXtenso,
    tag: "Post-Straightening",
    c: "Haircare",
    d: "Nutri-Reconstructor formula with Pro-Keratin + Incell that deeply nourishes straightened and treated hair.",
  },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export const JOURNAL = [
  {
    id: "skincare-routine",
    t: "Daily Skincare Routine with Vitamin C & Hyaluronic Acid",
    img: imgGarnierVitaminC,
    cat: "Skincare Guide",
    body: "Cleanse with gentle micellar water, apply Garnier 30x Vitamin C serum in the morning, and seal with Pond's Super Light Gel for radiant all-day glow.",
  },
  {
    id: "frizz-free-hair",
    t: "How to Keep Hair Frizz-Free and Glossy in Humid Weather",
    img: imgMatrixSerum,
    cat: "Haircare Secrets",
    body: "Use Matrix Biolage or Streax Walnut serum right after towel-drying to lock in moisture and shield hair against humidity and pollution.",
  },
  {
    id: "salon-wholesale-guide",
    t: "Best Wholesale Salon Supplies for Parlours in Sangli",
    img: imgLorealXtenso,
    cat: "Wholesale & Business",
    body: "Sachin Agencies in Ganpati Peth provides complete parlour setups: wax heaters, facial kits, rebonding creams, and bulk herbal oils at direct distributor rates.",
  },
];

export const BRANDS = [
  "L'Oréal Paris",
  "Garnier",
  "Maybelline New York",
  "Lakmé",
  "Matrix",
  "Streax Professional",
  "Pond's",
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const SHIPPING_FREE_ABOVE = 499;
export const SHIPPING_FEE = 49;
