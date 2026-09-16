import { Link } from "@/lib/router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-sm font-bold text-primary-foreground">
              L
            </span>
            <span className="font-display text-lg font-bold">
              Libeccio<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Création et hébergement de sites web pour restaurants. Design sur mesure,
            performance mesurée, réservations en ligne.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-3 text-sm md:justify-end">
          <div className="flex flex-col gap-3">
            <Link to="/services" className="text-muted-foreground hover:text-primary">
              Services
            </Link>
            <Link to="/processus" className="text-muted-foreground hover:text-primary">
              Processus
            </Link>
            <Link to="/tarifs" className="text-muted-foreground hover:text-primary">
              Tarifs
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/vitrine" className="text-muted-foreground hover:text-primary">
              Vitrine
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <a
              href="mailto:bonjour@libeccio.fr"
              className="text-muted-foreground hover:text-primary"
            >
              bonjour@libeccio.fr
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} Libeccio — Studio web spécialisé restauration.
      </div>
      <Link
        to="/mentions-legales"
        className="fixed right-4 bottom-4 z-40 rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[11px] text-muted-foreground/70 backdrop-blur transition-colors hover:border-border hover:text-foreground"
      >
        Mentions légales
      </Link>
    </footer>
  );
}
