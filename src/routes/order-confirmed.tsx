import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { Order } from "@/lib/cart";
import { inr } from "@/lib/catalog";

export const Route = createFileRoute("/order-confirmed")({
  head: () => ({
    meta: [
      { title: "Order Confirmed | Maison Luméra Paris" },
      { name: "description", content: "Thank you for your order with Maison Luméra Paris. Your luxury beauty creations are being prepared." },
      { property: "og:title", content: "Order Confirmed — Maison Luméra Paris" },
      { property: "og:description", content: "Your bespoke beauty ritual is on its way." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Confirmed,
});

function Confirmed() {
  const [order, setOrder] = useState<Order | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setOrder(JSON.parse(sessionStorage.getItem("lumera-last-order") || "null")); } catch { /* ignore */ }
    setReady(true);
  }, []);

  if (!ready) return <main className="min-h-[60vh]" />;
  if (!order) {
    return (
      <main className="py-32 text-center">
        <h1 className="font-display text-5xl">No recent order</h1>
        <Link to="/shop" className="eyebrow mt-8 inline-block bg-ink px-8 py-4 text-ink-foreground">Shop Now</Link>
      </main>
    );
  }

  const eta = new Date(new Date(order.date).getTime() + 5 * 86400000).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });

  return (
    <main>
      <section className="bg-ink px-6 py-24 text-center text-ink-foreground">
        <div className="mx-auto flex h-16 w-16 animate-scale-in items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-7 w-7" /></div>
        <p className="eyebrow mt-8 text-primary">Order {order.id}</p>
        <h1 className="mt-3 animate-fade-in font-display text-5xl md:text-7xl">Thank you, <em>{order.shipping.name.split(" ")[0]}</em>.</h1>
        <p className="mx-auto mt-6 max-w-md text-ink-foreground/70">Your beauty ritual is being lovingly packed. A confirmation has been noted for {order.shipping.email}.</p>
        <p className="eyebrow mt-8 text-[0.65rem]">Estimated delivery · {eta}</p>
      </section>
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Your items</h2>
          <ul className="mt-6 divide-y border-y">
            {order.items.map(({ product: p, qty }) => (
              <li key={p.id} className="flex items-center gap-4 py-4">
                <img src={p.img} alt={p.n} className="h-20 w-16 object-cover" />
                <span className="flex-1 font-display text-lg">{p.n} <span className="font-sans text-sm text-muted-foreground">× {qty}</span></span>
                <span>{inr(p.p * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between"><span>Subtotal</span><span>{inr(order.subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{order.shippingFee ? inr(order.shippingFee) : "Free"}</span></div>
            <div className="flex justify-between border-t pt-2 text-lg font-medium"><span>Total</span><span>{inr(order.total)}</span></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-secondary p-6">
            <h3 className="eyebrow text-muted-foreground">Shipping to</h3>
            <p className="mt-2">{order.shipping.name}</p>
            <p className="text-sm text-muted-foreground">{order.shipping.address}, {order.shipping.city}, {order.shipping.state} {order.shipping.pincode}</p>
            <p className="text-sm text-muted-foreground">{order.shipping.phone}</p>
          </div>
          <div className="bg-secondary p-6">
            <h3 className="eyebrow text-muted-foreground">Payment</h3>
            <p className="mt-2">{order.shipping.payment}</p>
          </div>
          <Link to="/shop" className="eyebrow block bg-ink py-4 text-center text-ink-foreground">Continue Shopping</Link>
        </div>
      </div>
    </main>
  );
}
