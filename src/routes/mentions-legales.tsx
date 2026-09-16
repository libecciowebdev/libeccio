import { createFileRoute } from "@/lib/router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Libeccio" },
      {
        name: "description",
        content:
          "Mentions légales du site Libeccio : éditeur, hébergement, propriété intellectuelle, données personnelles et cookies.",
      },
      { property: "og:title", content: "Mentions légales — Libeccio" },
      {
        property: "og:description",
        content:
          "Informations légales relatives au site Libeccio : éditeur, hébergeur, propriété intellectuelle et données personnelles.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MentionsLegales,
});

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Éditeur du site",
    body: [
      "Le site accessible à l'adresse https://libeccio.lovable.app (ci-après « le Site ») est édité par :",
      "Libeccio — Studio de création de sites web pour restaurants.",
      "Siège social : 18 quai Saint-Antoine, 69002 Lyon, France.",
      "E-mail : bonjour@libeccio.fr — Téléphone : +33 4 78 00 12 40.",
      "Numéro SIRET : [à compléter]. Numéro de TVA intracommunautaire : [à compléter].",
      "Responsable de la publication : [à compléter].",
    ],
  },
  {
    title: "2. Hébergement du site",
    body: [
      "Le Site est hébergé par une infrastructure d'hébergement managée assurant la mise en disponibilité du Site 24 heures sur 24 et 7 jours sur 7, sur une architecture cloud répartie et redondante (réseau de diffusion de contenu mondial, chiffrement TLS, sauvegardes automatiques).",
      "Les coordonnées complètes de l'hébergeur sont communiquées sur simple demande écrite adressée à l'éditeur à l'adresse bonjour@libeccio.fr.",
    ],
  },
  {
    title: "3. Propriété intellectuelle",
    body: [
      "L'ensemble des éléments constituant le Site (structure, textes, illustrations, images, graphismes, logos, chartes graphiques, animations, code source et code objet) est la propriété exclusive de Libeccio ou de ses partenaires, et est protégé par le Code de la propriété intellectuelle et par les législations applicables en matière de droit d'auteur.",
      "Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, par quelque procédé que ce soit, sans l'autorisation écrite préalable de Libeccio, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.",
      "Les marques et logos cités sur le Site (notamment ceux des clients et partenaires) appartiennent à leurs titulaires respectifs.",
    ],
  },
  {
    title: "4. Données personnelles",
    body: [
      "Les informations transmises via le formulaire de contact (nom, e-mail, téléphone, contenu du message) sont utilisées uniquement pour répondre à votre demande et établir un devis éventuel. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.",
      "Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, que vous pouvez exercer en écrivant à bonjour@libeccio.fr.",
      "Les données de contact sont conservées pour une durée maximale de trois (3) ans à compter du dernier échange, sauf obligation légale contraire.",
      "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: "5. Cookies",
    body: [
      "Le Site n'utilise pas de cookies publicitaires ni de traceurs de mesure d'audience tiers à des fins marketing. Seuls des éléments techniques strictement nécessaires à l'affichage et à la sécurité du Site peuvent être déposés sur votre terminal.",
      "Aucun consentement préalable n'est donc requis au sens de l'article 82 de la loi Informatique et Libertés.",
    ],
  },
  {
    title: "6. Limitation de responsabilité",
    body: [
      "Libeccio s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le Site, sans pouvoir en garantir l'exhaustivité ni l'absence d'erreur. Les informations fournies sont indicatives et susceptibles d'évoluer.",
      "Libeccio ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du Site, d'une indisponibilité temporaire, ni de la présence de virus ou d'éléments nuisibles malgré les mesures de sécurité mises en œuvre.",
      "Le Site peut contenir des liens vers des sites externes (par exemple des réalisations présentées à la page Vitrine). Libeccio n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    ],
  },
  {
    title: "7. Droit applicable et juridiction",
    body: [
      "Les présentes mentions légales sont régies par le droit français.",
      "En cas de litige relatif à l'utilisation du Site, et à défaut de résolution amiable, les tribunaux français compétents seront saisis.",
    ],
  },
  {
    title: "8. Crédits",
    body: [
      "Conception, design et développement : Libeccio.",
      "Photographies et visuels : Libeccio et ses clients. Les visuels présentés à la page Vitrine illustrent le site du restaurant L'Oiseau Bleu, réalisé par Libeccio.",
    ],
  },
];

function MentionsLegales() {
  return (
    <>
      <PageHero
        title={
          <>
            Mentions <span className="text-gradient">légales</span>
          </>
        }
        subtitle="Informations légales relatives à l'édition, l'hébergement et l'utilisation du site Libeccio."
      />

      <section className="mx-auto max-w-3xl px-5 pb-10 md:px-8">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <Reveal key={section.title}>
              <article className="glass rounded-3xl p-7 md:p-9">
                <h2 className="font-display text-lg font-semibold md:text-xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
          <p className="px-2 pt-2 text-xs text-muted-foreground/70">
            Dernière mise à jour : septembre 2026.
          </p>
        </div>
      </section>
    </>
  );
}
