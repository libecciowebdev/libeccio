import { createFileRoute } from "@/lib/router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
const heroDevices = "/images/hero-devices-loiseau.jpg";
const loiseauPreview = "/images/loiseau-bleu-preview.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/vitrine")({
  head: () => ({
    meta: [
      { title: "Vitrine — Votre restaurant pourrait ressembler à ça | Libeccio" },
      {
        name: "description",
        content:
          "Découvrez L'Oiseau Bleu, un site de restaurant créé par Libeccio : design premium, animations fluides et réservation en ligne.",
      },
      { property: "og:title", content: "Votre restaurant pourrait ressembler à ça — Libeccio" },
      {
        property: "og:description",
        content:
          "L'Oiseau Bleu : un site de restaurant signé Libeccio, rapide, animé et pensé pour la réservation.",
      },
    ],
  }),
  component: Vitrine,
});

function Vitrine() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO — mêmes visuels que l'accueil */}
      <section ref={heroRef} className="halo relative pt-36 pb-8 md:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="relative mx-auto max-w-5xl px-5 text-center md:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] leading-[1.02] font-bold md:text-7xl"
          >
            Votre restaurant pourrait <span className="text-gradient">ressembler à ça.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            L'Oiseau Bleu, c'est ce que Libeccio crée pour un restaurant : un site
            rapide, animé et pensé pour la réservation. Explorez-le en conditions réelles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://loiseau-bleu.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-on-hover inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Visiter le site <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glow-ring overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={heroDevices}
              alt="Aperçu du site web du restaurant L'Oiseau Bleu sur ordinateur et téléphone"
              width={1600}
              height={1104}
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE — L'Oiseau Bleu */}
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <Reveal>
          <div className="glass glow-ring grid overflow-hidden rounded-4xl lg:grid-cols-[1.25fr_1fr]">
            <img
              src={loiseauPreview}
              alt="Page d'accueil du site web du restaurant L'Oiseau Bleu"
              loading="lazy"
              width={1200}
              height={900}
              className="h-72 w-full object-cover lg:h-full"
            />
            <div className="p-8 md:p-12">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">
                Restaurant gastronomique · Site vitrine
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                L'Oiseau Bleu
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Une élégance bleu nuit traduite par des dégradés profonds, une carte
                mise en scène plein écran et une réservation en trois clics. Chaque
                section respire : typographie soignée, transitions au ralenti et
                photographie qui donne faim avant même d'avoir lu le menu.
              </p>
              <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="text-muted-foreground">Palette</dt>
                  <dd className="mt-1 font-medium">Bleu nuit & or pâle</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Résultat</dt>
                  <dd className="mt-1 font-medium text-primary">
                    Un site vitrine vivant, prêt à recevoir vos réservations
                  </dd>
                </div>
              </dl>
              <a
                href="https://loiseau-bleu.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors duration-300 hover:bg-secondary"
              >
                Voir le site en ligne <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PERFS */}
      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">
            Sous le capot
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Beau devant, <span className="text-gradient">redoutable derrière.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Même socle, même vitesse, votre identité. Chaque site livré par Libeccio
            sort avec ces chiffres.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Lighthouse", v: "100 / 100" },
              { k: "Poids de la page", v: "< 480 ko" },
              { k: "Premier affichage", v: "0,8 s" },
            ].map((m) => (
              <div key={m.k} className="glass rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {m.k}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-primary">
                  {m.v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
            Exemple réalisé à titre de démonstration
            <ArrowRight className="h-4 w-4 text-primary" />
          </p>
        </Reveal>
      </section>

      <CTA
        title="Votre restaurant, le prochain ?"
        text="Nous créons votre maquette d'accueil gratuitement, à partir de vos photos et de votre carte."
      />
    </>
  );
}
