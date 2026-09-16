import { Link } from "@/lib/router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA({
  title = "Prêt à faire salle comble ?",
  text = "Audit offert de votre présence en ligne et maquette de votre page d'accueil sous 72 h.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8">
      <Reveal>
        <div className="glass glow-ring relative overflow-hidden rounded-4xl px-6 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
          <h2 className="relative text-3xl font-bold md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">{text}</p>
          <Link
            to="/contact"
            className="shine-on-hover relative mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            Démarrer mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
