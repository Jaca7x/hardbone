import { m, type Variants } from "motion/react";
import { cn, EASE } from "@/lib/utils";

const VISTA = { once: true, margin: "0px 0px -10% 0px" } as const;

/** Entra uma vez só ao rolar: fade + subida de 20px. Mesmo movimento em toda a página. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VISTA}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

const grupo: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const itemStagger: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/** Container que revela os filhos (StaggerItem) um depois do outro. */
export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}) {
  const Comp = m[as];
  return (
    <Comp className={className} variants={grupo} initial="hidden" whileInView="show" viewport={VISTA}>
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = m[as];
  return (
    <Comp className={className} variants={itemStagger}>
      {children}
    </Comp>
  );
}
