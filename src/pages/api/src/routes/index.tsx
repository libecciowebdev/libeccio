import { createFileRoute, Link } from "@/lib/router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Gauge,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";
const heroDevices = "/images/hero-devices-loiseau.jpg";
const showcaseBistro = "/images/showcase-bistro.jpg";

import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Libeccio — Sites web & hébergement pour restaurants" },
      {
        name: "description",
        content:
          "Studio tech spécialisé restauration : création de sites web sur mesure, réservation en ligne et hébergement performant. Mise en ligne en 14 jours.",
      },
      { property: "og:title", content: "Libeccio — Sites web pour restaurants" },
      {
        property: "og:description",
        content:
          "Design premium, animations fluides, hébergement inclus. Le site qui remplit votre salle.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: CalendarCheck,
    title: "Réservation intégrée",
    text: "Module de réservation en temps réel, confirmations automatiques et gestion des créneaux.",
  },
  {
    icon: UtensilsCrossed,
    title: "Carte dynamique",
    text: "Vos plats, allergènes et prix modifiables en deux clics, sans toucher au code.",
  },
  {
    icon: Gauge,
    title: "100/100 performance",
    text: "Chargement sous 1 seconde, images optimisées, score Lighthouse au maximum.",
  },
  {
    icon: Smartphone,
    title: "Mobile d'abord",
    text: "80 % de vos clients réservent depuis leur téléphone. On conçoit pour eux en priorité.",
  },
  {
    icon: ShieldCheck,
    title: "Hébergement géré",
    text: "SSL, sauvegardes quotidiennes, surveillance 24/7 et mises à jour incluses.",
  },
  {
    icon: Sparkles,
    title: "Visibilité locale",
    text: "SEO local, fiche Google optimisée, avis clients synchronisés automatiquement.",
  },
];

const stats = [
  { value: "0,8 s", label: "temps de chargement moyen" },
  { value: "14 j", label: "de la maquette à la mise en ligne" },
  { value: "99,98 %", label: "de disponibilité hébergement" },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="halo relative overflow-hidden pt-36 md:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="relative mx-auto max-w-5xl px-5 text-center md:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs tracking-[0.2em] uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Studio web · restauration
          </motion.div>

          <h1 className="mt-7 text-[2.6rem] leading-[1.02] font-bold md:text-7xl">
            {["Le site qui", "remplit votre salle."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.1 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {i === 1 ? <span className="text-gradient">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Création, design et hébergement de sites web pour restaurants, bistrots et
            tables gastronomiques. Une expérience fluide, rapide et pensée pour la
            réservation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="shine-on-hover inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Obtenir une maquette <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://loiseau-bleu.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-secondary/40 px-7 py-3.5 font-medium backdrop-blur transition-colors duration-300 hover:bg-secondary"
            >
              Voir la vitrine
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-6xl px-5 pb-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glow-ring-soft overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={heroDevices}
              alt="Aperçu du site web du restaurant L'Oiseau Bleu créé par Libeccio"
              width={1600}
              height={1104}
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>


      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">
            Tout est inclus
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Une plateforme complète, <span className="text-gradient">pas un template.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Chaque site est construit sur mesure autour d'un socle technique éprouvé :
            rapidité, réservation, référencement local et hébergement managé.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/70 transition-colors duration-500 group-hover:bg-primary/15">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SPLIT SHOWCASE */}
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glow-ring overflow-hidden rounded-3xl border border-border">
              <img
                src={showcaseBistro}
                alt="Salle d'un bistrot mise en valeur sur un site Libeccio"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs tracking-[0.22em] text-primary uppercase">
              Direction artistique
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              L'ambiance de votre salle, <span className="text-gradient">à l'écran.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Photographie, typographie, rythme et micro-animations : on traduit
              l'atmosphère de votre établissement en une expérience numérique qui donne
              faim avant même l'arrivée du menu.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "\n",
                "Identité typographique dédiée",
                "Transitions et parallaxes ultra fluides",
                "Menu photos et prix modifiable facilement",
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {li}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Découvrir nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
