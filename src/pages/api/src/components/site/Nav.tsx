import { Link } from "@/lib/router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/processus", label: "Processus" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/vitrine", label: "Vitrine" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const progressScale = useTransform(scrollY, [0, 2000], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setSolid(v > 24));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          solid ? "glass border-b border-border" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="truncate font-display text-lg font-bold tracking-tight">
              Libeccio<span className="text-primary">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-secondary/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-secondary/70" />
              </Link>
            ))}
          </div>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <motion.div
          style={{ scaleX: progressScale }}
          className="h-px origin-left bg-[image:var(--gradient-primary)]"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-3 mt-2 rounded-3xl p-4 lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    className="block border-b border-border/60 py-3.5 font-display text-xl text-muted-foreground data-[status=active]:text-primary"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
