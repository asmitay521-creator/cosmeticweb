import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check } from "lucide-react";
import { useCart, type Order } from "@/lib/cart";
import { inr } from "@/lib/catalog";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Bespoke Checkout | Maison Luméra Paris" },
      { name: "description", content: "Securely complete your Maison Luméra Paris order." },
      { property: "og:title", content: "Checkout — Maison Luméra Paris" },
      { property: "og:description", content: "Complete your Maison Luméra Paris order." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a 10-digit mobile number"),
  address: z.string().trim().min(5, "Enter your address").max(200),
  city: z.string().trim().min(2, "Enter your city").max(60),
  state: z.string().trim().min(2, "Enter your state").max(60),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a 6-digit PIN code"),
  payment: z.enum(["Cash on Delivery", "UPI on Delivery"]),
});
type Form = z.infer<typeof schema>;

const FIELDS: { k: keyof Form; l: string; type?: string; full?: boolean }[] = [
  { k: "name", l: "Full name", full: true },
  { k: "email", l: "Email", type: "email" },
  { k: "phone", l: "Mobile number", type: "tel" },
  { k: "address", l: "Address", full: true },
  { k: "city", l: "City" },
  { k: "state", l: "State" },
  { k: "pincode", l: "PIN code" },
];

function Checkout() {
  const cart = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<Form>({ name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", payment: "Cash on Delivery" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});

  if (cart.lines.length === 0) {
    return (
      <main className="py-32 text-center">
        <h1 className="font-display text-5xl">Your bag is empty</h1>
        <Link to="/shop" className="eyebrow mt-8 inline-block bg-ink px-8 py-4 text-ink-foreground">Shop Now</Link>
      </main>
    );
  }

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Form] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setForm(r.data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const place = () => {
    const order: Order = {
      id: "LUM-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      items: cart.lines, shipping: form,
      subtotal: cart.subtotal, shippingFee: cart.shippingFee, total: cart.total,
      date: new Date().toISOString(),
    };
    sessionStorage.setItem("lumera-last-order", JSON.stringify(order));
    cart.clear();
    navigate({ to: "/order-confirmed" });
  };

  return (
    <main className="mx-auto max-w-6xl px-3.5 sm:px-6 py-8 sm:py-16">
      <h1 className="text-center font-display text-3xl sm:text-5xl uppercase">Checkout</h1>
      <ol className="mx-auto mt-6 sm:mt-8 flex max-w-md items-center justify-center gap-2 sm:gap-4">
        {["Shipping", "Review", "Confirmed"].map((s, i) => (
          <li key={s} className="flex items-center gap-1.5 sm:gap-2">
            <span className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-[0.7rem] sm:text-xs ${i + 1 < step ? "bg-primary text-primary-foreground" : i + 1 === step ? "bg-ink text-ink-foreground" : "border text-muted-foreground"}`}>
              {i + 1 < step ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            <span className={`eyebrow text-[0.55rem] sm:text-[0.6rem] ${i + 1 === step ? "" : "text-muted-foreground"}`}>{s}</span>
            {i < 2 && <span className="h-px w-4 sm:w-8 bg-border" />}
          </li>
        ))}
      </ol>

      <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-12 lg:grid-cols-[1fr_360px]">
        {step === 1 ? (
          <form onSubmit={next} className="animate-fade-in" noValidate>
            <h2 className="font-display text-2xl sm:text-3xl">Shipping details</h2>
            <div className="mt-4 sm:mt-6 grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <label key={f.k} className={f.full ? "sm:col-span-2" : ""}>
                  <span className="eyebrow text-[0.58rem] sm:text-[0.6rem] text-muted-foreground">{f.l}</span>
                  <input type={f.type ?? "text"} value={form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className={`mt-1 w-full border bg-card px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-primary ${errors[f.k] ? "border-destructive" : ""}`} />
                  {errors[f.k] && <span className="mt-1 block text-xs text-destructive">{errors[f.k]}</span>}
                </label>
              ))}
            </div>
            <h2 className="mt-8 sm:mt-10 font-display text-2xl sm:text-3xl">Payment</h2>
            <div className="mt-3 sm:mt-4 grid gap-3 sm:grid-cols-2">
              {(["Cash on Delivery", "UPI on Delivery"] as const).map((m) => (
                <button type="button" key={m} onClick={() => setForm({ ...form, payment: m })}
                  className={`border p-3.5 sm:p-4 text-left transition rounded-sm ${form.payment === m ? "border-primary bg-secondary" : "hover:border-primary"}`}>
                  <span className="font-display text-lg sm:text-xl font-medium">{m}</span>
                  <span className="block text-xs text-muted-foreground">Pay when your order arrives</span>
                </button>
              ))}
            </div>
            <button className="eyebrow luxury-btn-shine mt-8 sm:mt-10 w-full bg-ink py-3.5 sm:py-4 text-xs text-ink-foreground rounded-sm">Continue to Review</button>
          </form>
        ) : (
          <div className="animate-fade-in space-y-6 sm:space-y-8">
            <div className="border p-4 sm:p-6 rounded-sm">
              <div className="flex justify-between"><h2 className="font-display text-xl sm:text-2xl">Shipping to</h2><button onClick={() => setStep(1)} className="eyebrow text-[0.6rem] text-primary">Edit</button></div>
              <p className="mt-2 sm:mt-3 font-medium text-sm sm:text-base">{form.name}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{form.address}, {form.city}, {form.state} {form.pincode}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{form.email} · {form.phone}</p>
            </div>
            <div className="border p-4 sm:p-6 rounded-sm">
              <div className="flex justify-between"><h2 className="font-display text-xl sm:text-2xl">Payment</h2><button onClick={() => setStep(1)} className="eyebrow text-[0.6rem] text-primary">Edit</button></div>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base">{form.payment}</p>
            </div>
            <div className="border p-4 sm:p-6 rounded-sm">
              <h2 className="font-display text-xl sm:text-2xl">Items</h2>
              <ul className="mt-3 sm:mt-4 divide-y">
                {cart.lines.map(({ product: p, qty }) => (
                  <li key={p.id} className="flex items-center gap-3 sm:gap-4 py-3 text-xs sm:text-sm">
                    <img src={p.img} alt={p.n} className="h-14 w-12 sm:h-16 sm:w-14 object-cover rounded-sm" />
                    <span className="flex-1 truncate">{p.n} <span className="text-muted-foreground">× {qty}</span></span>
                    <span className="font-medium shrink-0">{inr(p.p * qty)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={place} className="eyebrow luxury-btn-shine w-full bg-primary py-3.5 sm:py-4 text-xs text-primary-foreground font-semibold rounded-sm">Place Order · {inr(cart.total)}</button>
          </div>
        )}

        <aside className="h-fit space-y-3.5 sm:space-y-4 bg-secondary p-5 sm:p-8 rounded-sm">
          <h2 className="font-display text-2xl sm:text-3xl font-medium">Order summary</h2>
          <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
            {cart.lines.map(({ product: p, qty }) => (
              <li key={p.id} className="flex justify-between gap-2"><span className="truncate">{p.n} × {qty}</span><span className="shrink-0">{inr(p.p * qty)}</span></li>
            ))}
          </ul>
          <div className="flex justify-between border-t pt-3 sm:pt-4 text-xs sm:text-sm"><span>Subtotal</span><span>{inr(cart.subtotal)}</span></div>
          <div className="flex justify-between text-xs sm:text-sm"><span>Shipping</span><span>{cart.shippingFee ? inr(cart.shippingFee) : "Free"}</span></div>
          <div className="flex justify-between border-t pt-3 sm:pt-4 text-base sm:text-lg font-medium"><span>Total</span><span>{inr(cart.total)}</span></div>
        </aside>
      </div>
    </main>
  );
}
