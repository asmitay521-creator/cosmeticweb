import hero from "@/assets/hero.jpg";
import serum from "@/assets/serum.jpg";
import products from "@/assets/products.jpg";
import model2 from "@/assets/model2.jpg";
import skincare from "@/assets/skincare.jpg";
import lipstick from "@/assets/lipstick.jpg";
import perfume from "@/assets/perfume.jpg";

export const IMG = { hero, serum, products, model2, skincare, lipstick, perfume };

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
    id: "rare-glow-serum",
    n: "L'Élixir Rare Glow Illuminating Serum",
    b: "Maison Luméra",
    p: 2499,
    img: serum,
    tag: "Bestseller",
    c: "Skincare",
    d: "A featherlight cellular serum with concentrated niacinamide and multi-weight peptides for a lit-from-within Parisian radiance.",
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
    id: "satin-veil-compact",
    n: "Voile Lumineux Micro-Milled Compact",
    b: "Maison Rose Paris",
    p: 1650,
    img: products,
    tag: "New Arrival",
    c: "Makeup",
    d: "Micro-micronized setting veil that blurs imperfections with soft-focus radiance and lasts for 16 flawless hours.",
  },
  {
    id: "gloss-lacquer-duo",
    n: "La Laque Miroir Lip & Balm Duo",
    b: "Maison Luméra",
    p: 1250,
    img: lipstick,
    tag: "Trending",
    c: "Makeup",
    d: "Couture glass-mirror lip lacquer paired with an antioxidant peptide balm for plump, drenched hydration.",
  },
  {
    id: "silk-hair-oil",
    n: "Huile Botanique Haute Hair Elixir",
    b: "Atelier Blanc",
    p: 1350,
    img: model2,
    tag: "Exclusive",
    c: "Haircare",
    d: "Cold-pressed Moroccan argan and French camellia oil for lustrous, frizz-free lengths with weightless silk feel.",
  },
  {
    id: "rose-body-butter",
    n: "Baume Corporel Rose Absolue",
    b: "Maison Rose Paris",
    p: 1100,
    img: skincare,
    tag: "Bestseller",
    c: "Bodycare",
    d: "Decadent organic shea and distilled damask rose butter that envelopes dry skin in a velvety cocoon of moisture.",
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
    img: products,
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
