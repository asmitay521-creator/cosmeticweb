import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Minus,
  Plus,
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  Truck,
  RefreshCw,
  MapPin,
  Clock,
  Award,
  Store,
  Building2,
  Phone,
  Mail,
} from "lucide-react";
import sachinLogo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";
import { inr, SHIPPING_FREE_ABOVE } from "@/lib/catalog";

const NAV = [
  { l: "Home", to: "/" as const },
  { l: "Shop", to: "/shop" as const },
  { l: "Makeup", to: "/shop" as const, c: "Makeup" },
  { l: "Skincare", to: "/shop" as const, c: "Skincare" },
  { l: "Haircare", to: "/shop" as const, c: "Haircare" },
  { l: "Fragrance", to: "/shop" as const, c: "Fragrance" },
  { l: "Brands", to: "/brands" as const },
  { l: "Journal", to: "/journal" as const },
];

const SEARCH_SUGGESTIONS = [
  "Obsidian Elixir",
  "Velvet Nude Lipstick",
  "Ambre Noir Eau de Parfum",
  "Silk Cloud Moisturiser",
  "Niacinamide Serum",
  "24k Gold",
];

function NavLink({
  n,
  className,
  onClick,
}: {
  n: (typeof NAV)[number];
  className?: string;
  onClick?: () => void;
}) {
  if (n.to === "/shop") {
    return (
      <Link
        to="/shop"
        search={{ category: n.c }}
        className={`group relative py-1 transition-colors hover:text-primary ${className ?? ""}`}
        onClick={onClick}
      >
        <span>{n.l}</span>
        <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
      </Link>
    );
  }
  return (
    <Link
      to={n.to}
      className={`group relative py-1 transition-colors hover:text-primary ${className ?? ""}`}
      onClick={onClick}
    >
      <span>{n.l}</span>
      <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const cart = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 25);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const freeShippingProgress = Math.min(
    100,
    Math.round((cart.subtotal / SHIPPING_FREE_ABOVE) * 100),
  );

  return (
    <>

      {/* Luminous Frosted Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 border-b border-[#E8DEC9]/70 bg-white/90 text-[#181614] shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
          <button
            className="p-1 text-[#181614] transition-colors hover:text-primary lg:hidden"
            onClick={() => setMenu(true)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Sachin Agencies Luxury Image Logo */}
          <Link to="/" className="group flex items-center justify-center transition-transform duration-300 hover:scale-105 py-1">
            <img
              src={sachinLogo}
              alt="Sachin Agencies"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain drop-shadow-sm transition-all duration-300 group-hover:brightness-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex text-[#28231D]">
            {NAV.map((n) => (
              <NavLink key={n.l} n={n} className="eyebrow text-[0.68rem] tracking-[0.22em]" />
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 text-[#28231D]">
            <button
              onClick={() => setSearch(true)}
              aria-label="Search catalogue"
              className="p-1 transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link
              to="/shop"
              className="hidden p-1 transition-transform duration-300 hover:scale-110 hover:text-primary sm:block"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
            </Link>
            <button
              onClick={() => cart.setOpen(true)}
              aria-label="Shopping Bag"
              className="relative p-1 transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <ShoppingBag className="h-4 w-4" />
              {cart.count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[0.58rem] font-bold text-primary-foreground shadow-sm animate-pulse">
                  {cart.count}
                </span>
              )}
            </button>
            <Link
              to="/journal"
              className="hidden p-1 transition-transform duration-300 hover:scale-110 hover:text-primary sm:block"
              aria-label="Maison Profile"
            >
              <User className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {menu && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] p-8 text-[#181614] animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-border/80 pb-6">
            <div className="flex items-center">
              <img
                src={sachinLogo}
                alt="Sachin Agencies"
                className="h-10 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="rounded-full border border-border p-2 transition hover:border-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-5 overflow-y-auto">
            {NAV.map((n) => (
              <NavLink
                key={n.l}
                n={n}
                onClick={() => setMenu(false)}
                className="font-display text-3xl font-light tracking-wide transition hover:translate-x-2 hover:text-primary text-[#181614]"
              />
            ))}
          </nav>
          <div className="mt-auto border-t border-border/80 pt-6 text-xs text-muted-foreground">
            <p className="eyebrow text-primary">Sachin Agencies Sangli</p>
            <p className="mt-1">Beauty Products & Cosmetic Wholesalers · Est. 1990</p>
          </div>
        </div>
      )}

      {/* Search Overlay Modal */}
      {search && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-6 pt-32 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSearch(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl transform rounded-md border border-[#E8DEC9] bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <span className="eyebrow text-primary font-medium">Search Haute Beauty</span>
              <button
                onClick={() => setSearch(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearch(false);
                navigate({ to: "/shop", search: { q } });
              }}
              className="mt-4"
            >
              <div className="relative">
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Serums, lipsticks, amber fragrance…"
                  className="w-full border-b border-primary/50 bg-transparent pb-3 pr-12 font-display text-2xl text-[#181614] outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute bottom-3 right-0 text-primary transition hover:scale-110"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="mt-6">
              <p className="eyebrow text-[0.6rem] text-muted-foreground">Trending Searches</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {SEARCH_SUGGESTIONS.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSearch(false);
                      navigate({ to: "/shop", search: { q: item } });
                    }}
                    className="rounded-full border border-border bg-[#FAF8F5] px-3.5 py-1 text-xs text-[#332C24] transition-all hover:border-primary hover:text-primary hover:bg-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Luxury Cart Drawer */}
      {cart.open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => cart.setOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b p-6">
              <div>
                <h3 className="font-display text-2xl font-medium tracking-wide text-[#181614]">
                  Your Beauty Bag
                </h3>
                <span className="eyebrow text-[0.6rem] text-muted-foreground">
                  {cart.count} {cart.count === 1 ? "Creation" : "Creations"}
                </span>
              </div>
              <button
                onClick={() => cart.setOpen(false)}
                aria-label="Close bag"
                className="rounded-full p-2 transition hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Free Shipping Tier Progress */}
            <div className="border-b bg-[#F9F6F0] px-6 py-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#2C261F]">
                  {cart.subtotal >= SHIPPING_FREE_ABOVE
                    ? "✦ Complimentary Express Shipping Unlocked"
                    : `Add ${inr(SHIPPING_FREE_ABOVE - cart.subtotal)} for free shipping`}
                </span>
                <span className="text-[0.65rem] text-primary font-medium">
                  {freeShippingProgress}%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 ease-out"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.lines.length === 0 ? (
                <div className="mt-16 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF8F5] border border-border">
                    <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h4 className="font-display text-2xl text-[#181614]">Your Bag is Empty</h4>
                  <p className="mx-auto mt-2 max-w-xs text-xs text-muted-foreground">
                    Explore our exquisite beauty creations and curated skincare rituals.
                  </p>
                  <Link
                    to="/shop"
                    onClick={() => cart.setOpen(false)}
                    className="eyebrow luxury-btn-shine mt-6 inline-block rounded-sm bg-[#181614] px-8 py-3.5 text-white shadow-md transition hover:bg-primary hover:text-black"
                  >
                    Discover Creations
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.lines.map(({ product: p, qty }) => (
                    <li
                      key={p.id}
                      className="flex gap-4 border-b border-border/50 pb-6 last:border-b-0"
                    >
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-[#FAF8F5] border border-border/60">
                        <img src={p.img} alt={p.n} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="eyebrow text-[0.6rem] text-primary">{p.b}</p>
                          <p className="font-display text-lg font-medium leading-snug text-[#181614]">
                            {p.n}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <QtyStepper id={p.id} qty={qty} />
                          <span className="font-medium text-[#181614]">{inr(p.p * qty)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Drawer Subtotal & Checkout */}
            {cart.lines.length > 0 && (
              <div className="space-y-3 border-t bg-[#FAF8F5] p-6 shadow-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-[#181614]">{inr(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Shipping</span>
                  <span>{cart.shippingFee ? inr(cart.shippingFee) : "Complimentary"}</span>
                </div>
                <div className="flex justify-between border-t border-border/80 pt-3 text-base font-medium">
                  <span>Total</span>
                  <span className="font-display text-2xl text-[#181614]">{inr(cart.total)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => cart.setOpen(false)}
                  className="eyebrow luxury-btn-shine block w-full rounded-sm bg-primary py-4 text-center text-primary-foreground shadow-md transition hover:opacity-95 font-semibold"
                >
                  Proceed to Checkout ✦
                </Link>
                <Link
                  to="/cart"
                  onClick={() => cart.setOpen(false)}
                  className="eyebrow block w-full rounded-sm border border-border bg-white py-3 text-center text-xs transition hover:border-primary hover:text-primary"
                >
                  View Complete Bag
                </Link>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}

export function QtyStepper({ id, qty }: { id: string; qty: number }) {
  const { setQty } = useCart();
  return (
    <div className="flex items-center rounded-sm border border-border bg-white">
      <button
        onClick={() => setQty(id, qty - 1)}
        className="p-1.5 transition hover:bg-muted"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-7 text-center text-xs font-medium text-[#181614]">{qty}</span>
      <button
        onClick={() => setQty(id, qty + 1)}
        className="p-1.5 transition hover:bg-muted"
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* Light Luxury VIP Beauty Club Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#F0E9DC] py-24 text-center text-[#181614] border-t border-[#E8DEC9]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-xl px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/80 px-4 py-1.5 text-[0.62rem] tracking-[0.25em] text-primary shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> MAISON PRIVILEGE CIRCLE
          </div>
          <h2 className="font-display text-4xl uppercase tracking-wide md:text-5xl text-[#181614]">
            Join the Beauty Club
          </h2>
          <p className="mt-3 text-sm text-[#554E44] leading-relaxed">
            Receive private allocations, invitations to haute launches, and bespoke skincare consultations.
          </p>

          {subscribed ? (
            <div className="mt-8 flex items-center justify-center gap-2 rounded-sm border border-primary/50 bg-white/90 py-4 text-sm text-primary shadow-sm font-medium">
              <Check className="h-4 w-4" /> Welcome to the Maison Luméra Privilege Circle.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-8 flex rounded-sm border border-[#D8CCB8] bg-white shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address…"
                className="flex-1 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-muted-foreground/60 text-[#181614]"
              />
              <button
                type="submit"
                className="eyebrow luxury-btn-shine bg-primary px-8 text-primary-foreground font-semibold transition hover:opacity-95"
              >
                Join Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Credentials Banner: 36 Years Legacy & Store Info */}
      <section className="border-t border-[#E8DEC9] bg-[#EFE8DD] px-6 py-9 text-[#2C261F]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <p className="eyebrow text-[0.62rem] font-bold text-[#181614]">36 Years in Business</p>
            <p className="text-xs text-[#5C5449]">Established in 1990 in Sangli</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="eyebrow text-[0.62rem] font-bold text-[#181614]">Ganpati Peth, Sangli</p>
            <p className="text-xs text-[#5C5449]">Near Suresh Light House, Tanaji Chouk</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="eyebrow text-[0.62rem] font-bold text-[#181614]">Open Until 8:30 PM</p>
            <p className="text-xs text-[#5C5449]">Daily Service & In-Store Guidance</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p className="eyebrow text-[0.62rem] font-bold text-[#181614]">100% Genuine Quality</p>
            <p className="text-xs text-[#5C5449]">Leading Dealers & Wholesalers</p>
          </div>
        </div>
      </section>

      {/* Light Luxury Footer Navigation & Business Overview */}
      <footer className="border-t border-[#E8DEC9] bg-[#FAF7F2] px-6 pb-12 pt-16 text-[#4E473D]">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          {/* Column 1: Company Profile */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={sachinLogo}
                alt="Sachin Agencies"
                className="h-12 w-auto object-contain brightness-95"
              />
            </div>
            <p className="mt-3 text-[0.55rem] tracking-[0.25em] text-primary font-semibold">
              GANPATI PETH, SANGLI • EST. 1990
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#5C5449]">
              Established in 1990, Sachin Agencies in Ganpati Peth, Sangli is a top player and premier destination in Beauty Product Dealers, Cosmetic Wholesalers, Salon Equipment, and Hair Oil Manufacturers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/50 bg-white/80 px-2.5 py-1 text-[0.58rem] font-semibold text-[#8C6418] shadow-sm">
                <Award className="h-3 w-3 text-primary" /> 36 Years in Business
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[0.58rem] font-semibold text-emerald-800 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open until 8:30 pm
              </span>
            </div>
          </div>

          {/* Column 2: Categories & Services */}
          <div>
            <p className="eyebrow mb-4 text-[#181614] font-semibold">Products & Services</p>
            <ul className="space-y-2.5 text-xs text-[#5C5449]">
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Cosmetic Dealers & Wholesalers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Cosmetic Manufacturers & Distributors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Beauty Product Dealers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Salon Chair & Equipment Dealers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Hair Oil Manufacturers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-[0.6rem]">✦</span>
                <span>Professional Beauty Formulations</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <p className="eyebrow mb-4 text-[#181614] font-semibold">Quick Navigation</p>
            <ul className="space-y-2.5 text-xs text-[#5C5449]">
              <li>
                <Link to="/shop" className="transition hover:text-primary">
                  All Beauty Formulations
                </Link>
              </li>
              <li>
                <Link to="/brands" className="transition hover:text-primary">
                  Luxury Brand Houses (Dior, Chanel, YSL, etc.)
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Makeup" }} className="transition hover:text-primary">
                  Makeup & Foundations
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Skincare" }} className="transition hover:text-primary">
                  Skincare & Clinical Serums
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Haircare" }} className="transition hover:text-primary">
                  Haircare & Herbal Oils
                </Link>
              </li>
              <li>
                <Link to="/journal" className="transition hover:text-primary">
                  The Beauty Journal & Rituals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <p className="eyebrow mb-4 text-[#181614] font-semibold">Location & Contact</p>
            <div className="space-y-3.5 text-xs text-[#5C5449]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181614]">Sachin Agencies</p>
                  <p className="leading-relaxed">
                    Ganpati Peth Main Road, Tanaji Chouk,
                    <br />
                    Near Suresh Light House,
                    <br />
                    Ganpati Peth, Sangli, Maharashtra – 416416
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[#E8DEC9]/60 pt-3">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181614]">Store Hours</p>
                  <p className="text-emerald-700 font-medium">Open until 8:30 pm</p>
                  <p className="text-[0.68rem] text-[#7A7165]">Mon – Sun: 9:30 AM – 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-t border-[#E8DEC9]/60 pt-3">
                <Building2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-[0.72rem] text-[#6B6254]">
                  Effortless commuting & transport access
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Overview Highlight Card */}
        <div className="mx-auto mt-12 max-w-7xl rounded-xl border border-[#E8DEC9] bg-[#F5EFE6]/70 p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="eyebrow text-[0.62rem] font-bold text-primary tracking-widest">
                LOCATION & OVERVIEW
              </p>
              <h4 className="font-display text-lg font-semibold text-[#181614] mt-1">
                One-Stop Destination for Beauty & Salon Needs in Sangli
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#5C5449] max-w-4xl">
                Established in the year 1990, Sachin Agencies in Ganpati Peth, Sangli acts as a premier one-stop hub servicing customers, salon professionals, and retailers across Sangli and Maharashtra. Known for courteous staff, prompt guidance, and a comprehensive portfolio of cosmetic dealers, salon chairs, hair oil manufacturing, and beauty wholesale services.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <Link
                to="/shop"
                className="eyebrow rounded-sm bg-[#181614] px-5 py-2.5 text-[0.65rem] font-semibold text-[#FFE8B3] transition-all hover:bg-primary hover:text-black shadow-sm flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal */}
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between border-t border-[#E8DEC9] pt-6 text-xs text-[#7A7165] md:flex-row">
          <p>© 1990 – 2026 Sachin Agencies, Ganpati Peth, Sangli. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-6 md:mt-0">
            <span className="hover:text-primary cursor-pointer">Cosmetic Dealers & Wholesalers</span>
            <span className="hover:text-primary cursor-pointer">Beauty Products</span>
            <span className="hover:text-primary cursor-pointer">Salon Chairs & Equipment</span>
            <span className="hover:text-primary cursor-pointer">Hair Oil Manufacturers</span>
          </div>
        </div>
      </footer>
    </>
  );
}
