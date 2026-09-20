import { createFileRoute } from "@/lib/router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parlons de votre site de restaurant | Libeccio" },
      {
        name: "description",
        content:
          "Contactez Libeccio pour un devis gratuit : maquette de votre page d'accueil sous 72 h, réponse en moins de 24 h.",
      },
      { property: "og:title", content: "Contacter Libeccio" },
      {
        property: "og:description",
        content:
          "Un atelier de 45 minutes, une maquette offerte, une réponse sous 24 h ouvrées.",
      },
    ],
  }),
  component: Contact,
});

const infos = [
  { icon: Mail, label: "E-mail", value: "bonjour@libeccio.fr" },
  { icon: Phone, label: "Téléphone", value: "+33 4 78 00 12 40" },
  { icon: MapPin, label: "Studio", value: "18 quai Saint-Antoine, Lyon" },
  { icon: Clock, label: "Réponse", value: "Sous 24 h ouvrées" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        title={
          <>
            Racontez-nous <span className="text-gradient">votre table.</span>
          </>
        }
        subtitle="Un formulaire, deux minutes. Nous revenons vers vous avec une première piste créative et un devis clair."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (sending) return;

                const form = e.currentTarget;
                const formData = new FormData(form);
                const payload = Object.fromEntries(formData.entries());
                const baseUrl = import.meta.env.BASE_URL || "/";
                const endpoint = `${baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`}api/contact`;

                setSending(true);
                setSent(false);

                try {
                  const response = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });

                  const result = await response.json().catch(() => ({}));
                  if (!response.ok) {
                    throw new Error(result?.error || "Impossible d'envoyer le message.");
                  }

                  setSent(true);
                  form.reset();
                  toast.success("Message envoyé", {
                    description: "Nous vous répondons sous 24 h ouvrées.",
                  });
                } catch (error) {
                  toast.error("Envoi impossible", {
                    description:
                      error instanceof Error
                        ? error.message
                        : "Réessayez dans quelques instants.",
                  });
                } finally {
                  setSending(false);
                }
              }}
              className="glass rounded-4xl p-7 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { id: "name", label: "Votre nom", type: "text", ph: "Camille Ferrand" },
                  {
                    id: "resto",
                    label: "Nom du restaurant",
                    type: "text",
                    ph: "Kaiseki Ōmi",
                  },
                  {
                    id: "email",
                    label: "E-mail",
                    type: "email",
                    ph: "camille@monresto.fr",
                  },
                  { id: "tel", label: "Téléphone", type: "tel", ph: "06 12 34 56 78" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={f.id}
                      className="text-xs tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required
                      placeholder={f.ph}
                      className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-secondary/70 focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.14em] text-muted-foreground uppercase"
                >
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Cuisine, ambiance, nombre de couverts, ce qui ne va pas avec votre site actuel…"
                  className="resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-secondary/70 focus:ring-2 focus:ring-ring"
                />
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <button
                type="submit"
                disabled={sending}
                className="shine-on-hover mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {sending ? "Envoi en cours…" : sent ? "Message envoyé" : "Envoyer ma demande"}
                <Send className="h-4 w-4" />
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                Vos informations restent confidentielles et ne sont jamais partagées.
              </p>
            </form>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="glass rounded-4xl p-8">
                <h2 className="font-display text-xl font-bold">Nous joindre</h2>
                <div className="mt-6 space-y-5">
                  {infos.map((i) => (
                    <div key={i.label} className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/70">
                        <i.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                          {i.label}
                        </p>
                        <p className="mt-1 text-sm font-medium break-words">{i.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="glass glow-ring relative overflow-hidden rounded-4xl p-8">
                <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-[70px] animate-pulse-glow" />
                <h2 className="relative font-display text-xl font-bold">
                  Maquette offerte
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pour toute demande, nous réalisons une maquette de votre page d'accueil
                  sous 72 h, sans engagement. Vous jugez sur pièce.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
