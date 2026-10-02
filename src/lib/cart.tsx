import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct, SHIPPING_FEE, SHIPPING_FREE_ABOVE, type Product } from "./catalog";

type Line = { id: string; qty: number };
export type Order = {
  id: string;
  items: { product: Product; qty: number }[];
  shipping: { name: string; email: string; phone: string; address: string; city: string; state: string; pincode: string; payment: string };
  subtotal: number; shippingFee: number; total: number; date: string;
};

type Ctx = {
  lines: { product: Product; qty: number }[];
  count: number; subtotal: number; shippingFee: number; total: number;
  open: boolean; setOpen: (o: boolean) => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { setRaw(JSON.parse(localStorage.getItem("lumera-cart") || "[]")); } catch { /* ignore */ }
  }, []);
  const save = (l: Line[]) => { setRaw(l); localStorage.setItem("lumera-cart", JSON.stringify(l)); };

  const lines = raw.flatMap((l) => { const p = getProduct(l.id); return p ? [{ product: p, qty: l.qty }] : []; });
  const subtotal = lines.reduce((s, l) => s + l.product.p * l.qty, 0);
  const shippingFee = subtotal === 0 || subtotal >= SHIPPING_FREE_ABOVE ? 0 : SHIPPING_FEE;

  const value: Ctx = {
    lines, subtotal, shippingFee, total: subtotal + shippingFee,
    count: lines.reduce((s, l) => s + l.qty, 0),
    open, setOpen,
    add: (id, qty = 1) => {
      const ex = raw.find((l) => l.id === id);
      save(ex ? raw.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l)) : [...raw, { id, qty }]);
      setOpen(true);
    },
    setQty: (id, qty) => save(qty <= 0 ? raw.filter((l) => l.id !== id) : raw.map((l) => (l.id === id ? { ...l, qty } : l))),
    remove: (id) => save(raw.filter((l) => l.id !== id)),
    clear: () => save([]),
  };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
