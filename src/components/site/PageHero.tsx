import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="halo relative overflow-hidden pt-36 pb-16 md:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-4xl leading-[1.05] font-bold md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {subtitle}
        </motion.p>
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
