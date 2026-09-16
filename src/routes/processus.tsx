import { createFileRoute } from "@/lib/router";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: [
      { title: "Le déroulement d'un projet — Libeccio" },
      {
        name: "description",
        content:
          "Six étapes claires, de l'atelier de cadrage à l'hébergement : comment nous créons le site de votre restaurant en 14 jours.",
      },
      { property: "og:title", content: "Notre processus de création — Libeccio" },
      {
        property: "og:description",
        content:
          "Atelier, direction artistique, contenus, développement, mise en ligne, accompagnement. Un calendrier transparent.",
      },
    ],
  }),
  component: Processus,
});

const steps = [
  {
    n: "01",
    day: "Jour 1",
    title: "Atelier de cadrage",
    text: "45 minutes en visio ou sur place : votre cuisine, votre clientèle, vos objectifs de réservation. Nous repartons avec une feuille de route.",
  },
  {
    n: "02",
    day: "Jours 2 – 4",
    title: "Direction artistique",
    text: "Moodboard, palette, typographies et maquette de la page d'accueil. Vous validez l'univers avant toute ligne de code.",
  },
  {
    n: "03",
    day: "Jours 4 – 6",
    title: "Contenus & photographie",
    text: "Séance photo en salle et en cuisine, rédaction des textes, structuration de la carte et des allergènes.",
  },
  {
    n: "04",
    day: "Jours 6 – 11",
    title: "Développement",
    text: "Intégration sur mesure, animations, module de réservation, optimisation des images et tests sur tous les appareils.",
  },
  {
    n: "05",
    day: "Jours 12 – 13",
    title: "Recette & mise en ligne",
    text: "Relecture ensemble, ajustements, branchement du domaine, SSL, référencement local et bascule en production.",
  },
  {
    n: "06",
    day: "En continu",
    title: "Hébergement & suivi",
    text: "Monitoring 24/7, sauvegardes, mises à jour de carte et rapport mensuel de performance et de réservations.",
  },
];

function Processus() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <>
      <PageHero
        title={
          <>
            De la première idée{" "}
            <span className="text-gradient">à la première réservation.</span>
          </>
        }
        subtitle="Un calendrier de 14 jours, six étapes, un interlocuteur unique. Vous savez toujours où en est votre projet."
      />

      <section ref={trackRef} className="relative mx-auto max-w-4xl px-5 md:px-8">
        <div className="absolute top-2 bottom-2 left-[27px] w-px bg-border md:left-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-[27px] w-px origin-top bg-[image:var(--gradient-primary)] md:left-1/2"
        />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.05}>
              <div
                className={`relative pl-16 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-8 left-[19px] grid h-4 w-4 place-items-center rounded-full bg-background md:left-auto ${
                    i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-glow" />
                </span>
                <div className="glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                  <div className="flex items-baseline gap-3 md:justify-inherit">
                    <span className="font-display text-3xl font-bold text-primary/40">
                      {s.n}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {s.day}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <Reveal>
          <div className="glass grid gap-8 rounded-4xl p-8 md:grid-cols-3 md:p-12">
            {[
              {
                k: "Ce que nous attendons de vous",
                v: "Vos photos existantes, votre carte à jour et une heure de disponibilité par étape.",
              },
              {
                k: "Ce que vous recevez",
                v: "Un site en production, les accès, une formation vidéo et un contact direct.",
              },
              {
                k: "Et après ?",
                v: "Évolutions saisonnières, nouvelles pages événements et optimisation continue.",
              },
            ].map((b) => (
              <div key={b.k}>
                <h3 className="text-sm tracking-[0.18em] text-primary uppercase">
                  {b.k}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTA
        title="On commence par l'atelier ?"
        text="Réservez 45 minutes, sans engagement. Vous repartez avec une feuille de route même si vous ne travaillez pas avec nous."
      />
    </>
  );
}
