import { createFileRoute } from "@/lib/router";
import {
  CalendarCheck,
  Camera,
  Code2,
  Globe,
  LineChart,
  Server,
  Utensils,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Création & hébergement de sites de restaurant | Libeccio" },
      {
        name: "description",
        content:
          "Design sur mesure, développement, réservation en ligne, photographie culinaire, SEO local et hébergement managé pour restaurants.",
      },
      { property: "og:title", content: "Nos services pour les restaurants — Libeccio" },
      {
        property: "og:description",
        content:
          "De la direction artistique à l'hébergement managé : tout ce qu'il faut pour un site de restaurant qui convertit.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Utensils,
    title: "Direction artistique",
    text: "Identité visuelle, typographie et univers photographique alignés sur votre cuisine.",
    tags: ["Moodboard", "Charte", "Maquettes"],
  },
  {
    icon: Code2,
    title: "Développement sur mesure",
    text: "Site ultra rapide, animations fluides, accessibilité et code propre. Aucun template.",
    tags: ["Sur mesure", "Animations", "Accessibilité"],
  },
  {
    icon: CalendarCheck,
    title: "Réservation en ligne",
    text: "Créneaux temps réel, confirmations e-mail/SMS, gestion des tables et des acomptes.",
    tags: ["Temps réel", "SMS", "Acomptes"],
  },
  {
    icon: Camera,
    title: "Photo & vidéo culinaire",
    text: "Séance photo en salle et en cuisine, retouches, courtes vidéos d'ambiance.",
    tags: ["Shooting", "Retouche", "Reels"],
  },
  {
    icon: Globe,
    title: "SEO local",
    text: "Fiche Google optimisée, données structurées restaurant, avis et pages de quartier.",
    tags: ["Google", "Schema.org", "Avis"],
  },
  {
    icon: Server,
    title: "Hébergement managé",
    text: "CDN mondial, SSL, sauvegardes quotidiennes, monitoring et disponibilité 99,98 %.",
    tags: ["CDN", "SSL", "Backups"],
  },
  {
    icon: Wrench,
    title: "Maintenance & évolutions",
    text: "Mises à jour de carte, nouvelles pages saisonnières, support prioritaire.",
    tags: ["Support", "Carte", "Saisons"],
  },
  {
    icon: LineChart,
    title: "Analytics & conversion",
    text: "Tableau de bord des réservations, suivi des sources et tests d'amélioration continue.",
    tags: ["Dashboard", "A/B", "Rapports"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        title={
          <>
            Tout ce qu'il faut,{" "}
            <span className="text-gradient">et rien de superflu.</span>
          </>
        }
        subtitle="Nous prenons en charge la chaîne complète : conception, contenus, développement, mise en ligne et hébergement. Vous restez en cuisine."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Stagger className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass group h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary/70 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-32 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Inclus dans <span className="text-gradient">chaque projet</span>
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Nom de domaine la 1re année",
            "Certificat SSL et CDN",
            "Formation à la mise à jour",
            "Conformité RGPD et cookies",
          ].map((i) => (
            <StaggerItem key={i}>
              <div className="glass h-full rounded-2xl p-6 text-sm text-muted-foreground transition-transform duration-500 hover:-translate-y-1">
                {i}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTA
        title="Un besoin précis ?"
        text="Décrivez votre établissement, nous répondons avec une recommandation claire et un devis chiffré."
      />
    </>
  );
}
