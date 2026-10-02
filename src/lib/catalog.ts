import hero from "@/assets/hero.jpg";
import serum from "@/assets/serum.jpg";
import products from "@/assets/products.jpg";
import model2 from "@/assets/model2.jpg";
import skincare from "@/assets/skincare.jpg";
import lipstick from "@/assets/lipstick.jpg";
import perfume from "@/assets/perfume.jpg";
import imgFoundation from "@/assets/realms/foundation.jpg";
import imgBlush from "@/assets/realms/blush.jpg";
import imgEyes from "@/assets/realms/eyes.jpg";
import brandMfk from "@/assets/brands/mfk.jpg";
import brandLamer from "@/assets/brands/lamer.jpg";
import brandYsl from "@/assets/brands/ysl.jpg";
import brandDior from "@/assets/brands/dior.jpg";
import brandChanel from "@/assets/brands/chanel.jpg";
import brandGuerlain from "@/assets/brands/guerlain.jpg";
import brandTomford from "@/assets/brands/tomford.jpg";
import brandLancome from "@/assets/brands/lancome.jpg";

export const IMG = {
  hero,
  serum,
  products,
  model2,
  skincare,
  lipstick,
  perfume,
  imgFoundation,
  imgBlush,
  imgEyes,
  brandMfk,
  brandLamer,
  brandYsl,
  brandDior,
  brandChanel,
  brandGuerlain,
  brandTomford,
  brandLancome,
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

export const CATEGORIES = ["Makeup", "Skincare", "Haircare", "Fragrance", "Bodycare"] as const;

export const PRODUCTS: Product[] = [
  {
    id: "obsidian-elixir",
    n: "Obsidian Elixir Rejuvenating Serum",
    b: "Maison Luméra",
    p: 4200,
    img: serum,
    tag: "Signature Masterpiece",
    c: "Skincare",
    d: "Infused with Périgord black truffle, 24k colloidal gold and bio-fermented peptides for couture-smooth, illuminated skin.",
  },
  {
    id: "silk-foundation",
    n: "Fond de Teint Silk Radiance Foundation",
    b: "Maison Luméra",
    p: 2499,
    img: imgFoundation,
    tag: "Bestseller",
    c: "Makeup",
    d: "Breathable 24-hour weightless second-skin foundation with French rose infusion and luminous lit-from-within coverage.",
  },
  {
    id: "velvet-nude-lipstick",
    n: "Rouge Velours Satin Lipstick",
    b: "Maison Rose Paris",
    p: 1450,
    img: lipstick,
    tag: "Haute Édition",
    c: "Makeup",
    d: "Ultra-pigmented creamy satin colour in universally flattering rose-nude, enriched with cold-pressed camellia essence.",
  },
  {
    id: "ambre-noir-edp",
    n: "Ambre Noir Extrait de Parfum",
    b: "Luméra Parfums",
    p: 4800,
    img: perfume,
    tag: "Maison Iconic",
    c: "Fragrance",
    d: "Smoky golden amber, rare Grasse rose absolute, and velvet Madagascar vanilla. An intoxicating evening sillage.",
  },
  {
    id: "silk-cloud-moisturiser",
    n: "Crème de Soie Hydrating Veil",
    b: "Atelier Blanc",
    p: 1890,
    img: skincare,
    tag: "Award Winner",
    c: "Skincare",
    d: "Whipped cloud hydration with olive squalane and Alpine edelweiss extract that melts weightlessly into the epidermis.",
  },
  {
    id: "satin-veil-blush",
    n: "Velvet Petal Glow Blush & Contour Compact",
    b: "Maison Rose Paris",
    p: 1650,
    img: imgBlush,
    tag: "New Arrival",
    c: "Makeup",
    d: "Micro-milled Parisian floral pigments in an embossed rose-gold compact for a natural, sculptured luminous flush.",
  },
  {
    id: "couture-eyeshadow-palette",
    n: "Couture Silk Eyeshadow & Mascara Palette",
    b: "Maison Luméra",
    p: 2150,
    img: imgEyes,
    tag: "Trending",
    c: "Makeup",
    d: "9-texture couture eyeshadows paired with panoramic carbon black mascara for impeccably tailored eyes.",
  },
  {
    id: "abeille-hair-elixir",
    n: "Huile Royale Botanique Hair Elixir",
    b: "Guerlain Atelier",
    p: 1850,
    img: brandGuerlain,
    tag: "Hair Ritual",
    c: "Haircare",
    d: "Infused with Ouessant honey extract and cold-pressed argan oil for supreme softness, mirror gloss, and 230°C thermal shield.",
  },
  {
    id: "rose-body-butter",
    n: "Baume Corporel Rose Absolue",
    b: "Maison Rose Paris",
    p: 1100,
    img: products,
    tag: "Bestseller",
    c: "Bodycare",
    d: "Decadent organic shea and distilled damask rose butter that envelopes dry skin in a velvety cocoon of moisture.",
  },
  {
    id: "baccarat-extrait",
    n: "Baccarat Royale Pure Alchemy Extrait",
    b: "Maison Francis Kurkdjian",
    p: 5400,
    img: brandMfk,
    tag: "Haute Luxe",
    c: "Fragrance",
    d: "Crystalline jasmine, rich cedarwood, and ambergris warmth crafted with pure French haute parfumerie heritage.",
  },
  {
    id: "miracle-broth-creme",
    n: "Cellular Renewal Miracle Broth Crème",
    b: "La Mer Atelier",
    p: 3950,
    img: brandLamer,
    tag: "Clinical Elixir",
    c: "Skincare",
    d: "Deep hydration infused with bio-fermented sea kelp minerals that visibly soothes, firms, and revitalizes skin barrier.",
  },
  {
    id: "couture-gold-bronzer",
    n: "Sunlit Riviera Couture Bronze Powder",
    b: "Yves Saint Laurent",
    p: 1980,
    img: brandYsl,
    tag: "Couture Glow",
    c: "Makeup",
    d: "Warm amber micronized minerals for sun-drenched, golden-hour radiance and sculpted contours.",
  },
  {
    id: "chanel-sublime-mist",
    n: "N°5 L'Élixir Sublime Fragrance Mist",
    b: "Chanel Paris",
    p: 4600,
    img: brandChanel,
    tag: "Heritage Icon",
    c: "Fragrance",
    d: "Timeless May rose and Grasse jasmine enveloped in aldehyde warmth for an unmistakable Parisian trail.",
  },
  {
    id: "dior-prestige-serum",
    n: "Dior Prestige Micro-Huile de Rose",
    b: "Dior Maison",
    p: 4900,
    img: brandDior,
    tag: "Haute Prestige",
    c: "Skincare",
    d: "10,000 micro-pearls infused with Rose de Granville nutrients that deeply revitalize and plump the skin.",
  },
  {
    id: "tomford-private-oud",
    n: "Private Blend Oud Wood Extrait",
    b: "Tom Ford",
    p: 5200,
    img: brandTomford,
    tag: "Private Blend",
    c: "Fragrance",
    d: "Rare smoky oud wood, rosewood, and cardamom mingling with tonka bean and amber for a sultry aura.",
  },
  {
    id: "lancome-absolue-creme",
    n: "Absolue Soft Rose Longevity Crème",
    b: "Lancôme Paris",
    p: 3650,
    img: brandLancome,
    tag: "French Rose",
    c: "Skincare",
    d: "Grand Rose extract blend that promotes accelerated surface cell renewal for velvety, luminous firmness.",
  },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export const JOURNAL = [
  {
    id: "glass-glow",
    t: "5 Golden Steps to Parisian Glass Radiance",
    img: skincare,
    cat: "Haute Skincare",
    body: "The art of layering: double-cleanse with silk cream, saturate the epidermis with 24k colloidal serum, seal moisture with whipped ceramides, and shield against oxidative stress with SPF 50.",
  },
  {
    id: "perfect-foundation",
    t: "Couture Complexion: The Ultimate Shade & Undertone Guide",
    img: imgFoundation,
    cat: "Atelier Makeup",
    body: "Identifying undertones in natural morning daylight, achieving the coveted second-skin finish, and mastering invisible micro-powder application like Paris Fashion Week makeup artists.",
  },
  {
    id: "morning-routine",
    t: "The Morning Awakening: 7-Minute Radiance Ritual",
    img: serum,
    cat: "Maison Ritual",
    body: "Awaken sluggish micro-circulation with chilled gua sha, followed by fresh vitamin C infusion and obsidian peptide serum for all-day luminous vitality.",
  },
];

export const BRANDS = [
  "Dior",
  "Chanel",
  "Guerlain",
  "Yves Saint Laurent",
  "La Mer",
  "Tom Ford",
  "Maison Francis Kurkdjian",
  "Lancôme",
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const SHIPPING_FREE_ABOVE = 999;
export const SHIPPING_FEE = 99;
