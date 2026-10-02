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
      {/* Deep Royal Midnight & Gold VIP Beauty Club Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#14110E] via-[#1B1612] to-[#110E0B] py-24 text-center text-[#FAF8F5] border-t border-[#2E251B]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl" />
        
        <div className="relative mx-auto max-w-2xl px-6 z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-[#251E17]/80 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#FFD54F] shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#FFD54F] animate-pulse" /> MAISON PRIVILEGE CIRCLE
          </div>
          <h2 className="font-display text-4xl uppercase tracking-wide sm:text-5xl md:text-6xl text-[#FFFDF8] drop-shadow-md">
            Join the Beauty Club
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D5C9B6] leading-relaxed">
            Receive private allocations, invitations to haute launches, and bespoke skincare consultations.
          </p>

          {subscribed ? (
            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/70 bg-[#221B14]/90 py-4 px-6 text-base text-[#FFD54F] shadow-xl font-semibold backdrop-blur-md">
              <Check className="h-5 w-5 text-[#FFD54F]" /> Welcome to the Maison Luméra Privilege Circle.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-8 flex rounded-xl border border-[#D4AF37]/50 bg-[#0E0C09]/90 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all focus-within:border-[#FFD54F] focus-within:ring-2 focus-within:ring-[#D4AF37]/40 overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address…"
                className="flex-1 bg-transparent px-6 py-4 text-base outline-none placeholder:text-[#8E8272] text-[#FFFDF8]"
              />
              <button
                type="submit"
                className="eyebrow luxury-btn-shine bg-gradient-to-r from-[#D4AF37] via-[#F7D885] to-[#C99A2C] px-8 py-4 text-sm sm:text-base text-[#141210] font-bold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
              >
                Join Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Credentials Banner: 36 Years Legacy & Store Trust (Luxury Dark Glass with Pearl Glow) */}
      <section className="relative z-20 overflow-hidden border-t border-[#2A2218] bg-gradient-to-r from-[#110E0B] via-[#18130F] to-[#110E0B] px-6 py-14 text-[#FAF8F5] ribbon-light-sweep shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: 36 Years in Business */}
          <div className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#1E1812]/90 to-[#120E0A]/95 p-7 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] cursor-default">
            <div className="absolute top-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-gradient-to-b from-[#2D241A] via-[#1E1710] to-[#140F0A] shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_3px_rgba(255,213,79,0.4)] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-[#FFD54F] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]">
              <Award className="h-7 w-7 text-[#FFD54F] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF8] mt-4 tracking-wide transition-colors duration-300 group-hover:text-[#FFD54F]">
              36 Years in Business
            </h4>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-1.5 mb-2.5 transition-all duration-500 group-hover:w-16" />
            <p className="text-sm sm:text-[0.95rem] text-[#C4B8A5] leading-relaxed">
              Established in 1990 in Sangli with timeless quality &amp; trust
            </p>
          </div>

          {/* Card 2: Ganpati Peth, Sangli */}
          <div className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#1E1812]/90 to-[#120E0A]/95 p-7 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] cursor-default">
            <div className="absolute top-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-gradient-to-b from-[#2D241A] via-[#1E1710] to-[#140F0A] shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_3px_rgba(255,213,79,0.4)] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-[#FFD54F] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]" style={{ animationDelay: "1s" }}>
              <MapPin className="h-7 w-7 text-[#FFD54F] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF8] mt-4 tracking-wide transition-colors duration-300 group-hover:text-[#FFD54F]">
              Ganpati Peth, Sangli
            </h4>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-1.5 mb-2.5 transition-all duration-500 group-hover:w-16" />
            <p className="text-sm sm:text-[0.95rem] text-[#C4B8A5] leading-relaxed">
              Near Suresh Light House, Tanaji Chouk (Central Hub)
            </p>
          </div>

          {/* Card 3: Open Until 8:30 PM */}
          <div className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#1E1812]/90 to-[#120E0A]/95 p-7 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] cursor-default">
            <div className="absolute top-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-gradient-to-b from-[#2D241A] via-[#1E1710] to-[#140F0A] shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_3px_rgba(255,213,79,0.4)] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-[#FFD54F] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]" style={{ animationDelay: "2s" }}>
              <Clock className="h-7 w-7 text-[#FFD54F] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-[#120E0A] animate-pulse" />
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF8] mt-4 tracking-wide transition-colors duration-300 group-hover:text-[#FFD54F]">
              Open Daily to 8:30 PM
            </h4>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-1.5 mb-2.5 transition-all duration-500 group-hover:w-16" />
            <p className="text-sm sm:text-[0.95rem] text-[#C4B8A5] leading-relaxed">
              Prompt customer assistance &amp; daily in-store guidance
            </p>
          </div>

          {/* Card 4: 100% Genuine Quality */}
          <div className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#1E1812]/90 to-[#120E0A]/95 p-7 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] cursor-default">
            <div className="absolute top-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-gradient-to-b from-[#2D241A] via-[#1E1710] to-[#140F0A] shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_3px_rgba(255,213,79,0.4)] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-[#FFD54F] group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]" style={{ animationDelay: "3s" }}>
              <ShieldCheck className="h-7 w-7 text-[#FFD54F] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF8] mt-4 tracking-wide transition-colors duration-300 group-hover:text-[#FFD54F]">
              100% Genuine Quality
            </h4>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-1.5 mb-2.5 transition-all duration-500 group-hover:w-16" />
            <p className="text-sm sm:text-[0.95rem] text-[#C4B8A5] leading-relaxed">
              Leading wholesale dealer &amp; certified beauty formulations
            </p>
          </div>
        </div>
      </section>

      {/* Haute Noir & Gold Luxury Footer Navigation */}
      <footer className="border-t border-[#2A2218] bg-[#0A0806] px-6 pb-14 pt-16 text-[#DDD3C2] relative overflow-hidden">
        {/* Subtle Ambient Golden Corner Glows */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/08 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/08 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {/* Column 1: Brand & Legacy */}
          <div className="flex flex-col items-start">
            <Link to="/" className="group transition-transform duration-300 hover:scale-105 inline-block">
              <div className="rounded-xl bg-white/95 p-2.5 shadow-[0_4px_25px_rgba(212,175,55,0.25)] border border-[#D4AF37]/40 backdrop-blur-md">
                <img
                  src={sachinLogo}
                  alt="Sachin Agencies"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm sm:text-[0.95rem] leading-relaxed text-[#BDB09E] max-w-xs">
              Premier destination for authentic cosmetics, beauty wholesale, salon equipment &amp; hair oils.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1A140F] px-3.5 py-1.5 text-xs font-bold text-[#FFD54F] shadow-sm">
                <Award className="h-3.5 w-3.5 text-[#FFD54F]" /> Est. 1990 · 36 Years Legacy
              </span>
            </div>
          </div>

          {/* Column 2: Haute Collections */}
          <div>
            <p className="font-display text-lg uppercase tracking-wider font-bold text-[#FFD54F] mb-4 flex items-center gap-2">
              <span>Collections</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </p>
            <ul className="space-y-3 text-sm sm:text-[0.95rem] text-[#DDD3C2]">
              <li>
                <Link to="/shop" search={{ category: "Makeup" }} className="transition-all hover:text-[#FFD54F] hover:translate-x-1.5 inline-block">
                  Makeup &amp; Foundations
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Skincare" }} className="transition-all hover:text-[#FFD54F] hover:translate-x-1.5 inline-block">
                  Skincare &amp; Serums
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Haircare" }} className="transition-all hover:text-[#FFD54F] hover:translate-x-1.5 inline-block">
                  Haircare &amp; Oils
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Fragrance" }} className="transition-all hover:text-[#FFD54F] hover:translate-x-1.5 inline-block">
                  Haute Fragrances
                </Link>
              </li>
              <li>
                <Link to="/brands" className="transition-all hover:text-[#FFD54F] hover:translate-x-1.5 inline-block">
                  Luxury Brand Houses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Wholesale & Salon */}
          <div>
            <p className="font-display text-lg uppercase tracking-wider font-bold text-[#FFD54F] mb-4 flex items-center gap-2">
              <span>Wholesale &amp; Salon</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </p>
            <ul className="space-y-3 text-sm sm:text-[0.95rem] text-[#DDD3C2]">
              <li className="flex items-center gap-2.5 group">
                <span className="text-[#FFD54F] text-xs">✦</span>
                <span className="font-medium group-hover:text-[#FFD54F] transition-colors">Cosmetic Wholesalers &amp; Dealers</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <span className="text-[#FFD54F] text-xs">✦</span>
                <span className="font-medium group-hover:text-[#FFD54F] transition-colors">Salon Chairs &amp; Equipment</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <span className="text-[#FFD54F] text-xs">✦</span>
                <span className="font-medium group-hover:text-[#FFD54F] transition-colors">Hair Oil Manufacturers</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <span className="text-[#FFD54F] text-xs">✦</span>
                <span className="font-medium group-hover:text-[#FFD54F] transition-colors">Bulk Salon Supplies</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Timings */}
          <div>
            <p className="font-display text-lg uppercase tracking-wider font-bold text-[#FFD54F] mb-4 flex items-center gap-2">
              <span>Store &amp; Visit</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </p>
            <div className="space-y-3.5 text-sm sm:text-[0.95rem] text-[#DDD3C2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[#C4B8A5]">
                  Ganpati Peth Main Road, Tanaji Chouk,
                  <br />
                  Near Suresh Light House, Sangli – 416416
                </p>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[#2A2218] pt-3">
                <Clock className="h-5 w-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-400 font-bold text-base flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open Daily until 8:30 PM
                  </p>
                  <p className="text-xs sm:text-sm text-[#A89C8A] font-medium mt-0.5">9:30 AM – 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Bottom Copyright */}
        <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between border-t border-[#2A2218] pt-7 text-sm sm:text-[0.95rem] text-[#9E9280] md:flex-row relative z-10">
          <p className="font-medium">© 1990 – 2026 Sachin Agencies, Ganpati Peth, Sangli. All rights reserved.</p>
          <div className="mt-4 flex gap-7 md:mt-0 font-medium">
            <span className="hover:text-[#FFD54F] cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-[#FFD54F] cursor-pointer transition">Terms of Service</span>
            <Link to="/brands" className="hover:text-[#FFD54F] transition">Our Brands</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
