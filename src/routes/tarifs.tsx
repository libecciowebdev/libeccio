import { createFileRoute, Link } from "@/lib/router";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs — Création et hébergement de site de restaurant | Libeccio" },
      {
        name: "description",
        content:
          "Trois formules transparentes : Carte, Signature et Groupe. Création à partir de 1 190 € et hébergement managé à partir de 49 €/mois.",
      },
      { property: "og:title", content: "Nos tarifs — Libeccio" },
      {
        property: "og:description",
        content:
          "Prix clairs, hébergement inclus, sans engagement caché. Choisissez la formule adaptée à votre établissement.",
      },
    ],
  }),
  component: Tarifs,
});

const plans = [
  {
    name: "Carte",
    setup: "1 190 €",
    monthly: 49,
    yearly: 42,
    desc: "Pour un premier site élégant et efficace.",
    features: [
      "Site 4 pages sur mesure",
      "Carte dynamique et allergènes",
      "Formulaire de contact",
      "SEO local de base",
      "Hébergement managé + SSL",
      "Support par e-mail",
    ],
  },
  {
    name: "Signature",
    setup: "2 490 €",
    monthly: 69,
    yearly: 59,
    desc: "Notre formule la plus choisie par les tables complètes.",
    highlight: true,
    features: [
      "Site 8 pages, animations avancées",
      "Séance photo culinaire (demi-journée)",
      "SEO local avancé + fiche Google",
      "Support prioritaire 7j/7",
    ],
  },
  {
    name: "Groupe",
    setup: "Sur devis",
    monthly: undefined,
    yearly: undefined,
    desc: "Plusieurs adresses, plusieurs cartes, un seul socle.",
    features: [
      "Multi-établissements et multilingue",
      "Réservation centralisée",
      "Click & collect / livraison",
      "Intégrations caisse et CRM",
      "Infogérance dédiée + SLA",
      "Chef de projet attitré",
    ],
  },
];

function Tarifs() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHero
        title={
          <>
            Des prix lisibles, <span className="text-gradient">comme une bonne carte.</span>
          </>
        }
        subtitle="Un coût de création unique, puis un abonnement d'hébergement et de maintenance. Pas de commission sur vos réservations."
      >
        <div className="glass inline-flex items-center gap-1 rounded-full p-1">
          {(["Mensuel", "Annuel −15 %"] as const).map((label, i) => (
            <button
              key={label}
              onClick={() => setYearly(i === 1)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                (i === 1) === yearly ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {(i === 1) === yearly && (
                <motion.span
                  layoutId="pricing-toggle"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)]"
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <div className="glass group/card relative flex h-full flex-col overflow-hidden rounded-4xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:glow-ring">
                <div className="relative flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold">{p.name}</h2>
                  {p.highlight && (
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      Populaire
                    </span>
                  )}
                </div>
                <p className="relative mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="relative mt-7">
                  <div className="font-display text-4xl font-bold">{p.setup}</div>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    création, une seule fois
                  </p>
                  <div className="mt-5 flex items-baseline gap-1.5 border-t border-border pt-5">
                    {p.monthly == null ? (
                      <span className="font-display text-2xl font-bold text-primary">
                        Sur devis
                      </span>
                    ) : (
                      <>
                        <motion.span
                          key={yearly ? "y" : "m"}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="font-display text-2xl font-bold text-primary"
                        >
                          {yearly ? p.yearly : p.monthly} €
                        </motion.span>
                        <span className="text-sm text-muted-foreground">
                          / mois · hébergement & maintenance
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="relative mb-9 mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="shine-on-hover group/btn relative mt-auto block overflow-hidden rounded-full border border-border px-6 py-3 pt-3 text-center font-semibold text-foreground transition-all duration-500 group-hover/card:border-primary/50 group-hover/card:text-primary-foreground hover:scale-[1.03]"
                >
                  <span className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  <span className="relative z-10">Choisir {p.name}</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-3xl px-5 pt-32 md:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {[
            {
              q: "Puis-je modifier ma carte moi-même ?",
              a: "Oui. Vous disposez d'une interface simple pour les plats, prix, horaires et actualités, avec une formation vidéo.",
            },
            {
              q: "Prenez-vous une commission sur les réservations ?",
              a: "Jamais. Contrairement aux plateformes, 100 % de vos réservations restent les vôtres.",
            },
            {
              q: "Que se passe-t-il si j'ai déjà un site ?",
              a: "Nous reprenons vos contenus, conservons votre référencement et gérons la migration sans coupure.",
            },
          ].map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="glass group rounded-2xl p-6">
                <summary className="cursor-pointer list-none font-medium marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Une formule sur mesure ?"
        text="Dites-nous ce dont vous avez besoin, nous ajustons le périmètre et le budget."
      />
    </>
  );
}
