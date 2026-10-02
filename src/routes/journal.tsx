import { createFileRoute, Link } from "@tanstack/react-router";
import { JOURNAL } from "@/lib/catalog";
import { PageHero } from "@/components/ProductCard";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Parisian Gazette & Journal | Maison Luméra Paris" },
      { name: "description", content: "Rituals, formulations, and masterclass beauty advice penned by Maison Luméra editors and dermatologists." },
      { property: "og:title", content: "The Parisian Gazette — Maison Luméra Paris" },
      { property: "og:description", content: "Bespoke beauty rituals, ingredient science, and haute beauty advice." },
    ],
  }),
  component: Journal,
});

const AUTHORS = [
  { name: "Éléonore Laurent", role: "Directrice de Beauté, Paris" },
  { name: "Dr. Julien Mercier", role: "Cellular Dermatologist, Lyon" },
  { name: "Sylvie Beaumont", role: "Senior Parfumeur, Grasse" },
];

function Journal() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="The Parisian Gazette"
        title="Beauty Journal"
        sub="In-depth botanical inquiries, clinical skin rituals, and editorial wisdom from our Paris atelier."
      />
      <div className="mx-auto max-w-5xl space-y-14 sm:space-y-28 px-3.5 sm:px-6 py-10 sm:py-24">
        {JOURNAL.map((j, i) => {
          const author = AUTHORS[i % AUTHORS.length]!;
          return (
            <article
              key={j.id}
              id={j.id}
              className={`grid scroll-mt-32 items-center gap-6 sm:gap-12 md:grid-cols-2 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-sm bg-muted shadow-xl border border-border/80">
                <img
                  src={j.img}
                  alt={j.t}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-primary">{j.cat}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground">5 Min Read</span>
                </div>
                <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-snug">
                  {j.t}
                </h2>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {j.body}
                </p>
                <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-border/60 pt-3 sm:pt-4">
                  <div>
                    <p className="font-display text-sm sm:text-base font-medium text-foreground">{author.name}</p>
                    <p className="text-[0.65rem] sm:text-[0.68rem] text-muted-foreground">{author.role}</p>
                  </div>
                  <Link
                    to="/shop"
                    className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-primary hover:underline"
                  >
                    Shop Ritual →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
