import { m, type Variants } from "motion/react";
import { cn, EASE } from "@/lib/utils";

export type Palavra = { texto: string; italico?: boolean; quebraAntes?: boolean; className?: string };

const grupo: Variants = {
  hidden: {},
  show: (atraso: number = 0) => ({ transition: { staggerChildren: 0.07, delayChildren: atraso } }),
};
const palavra: Variants = {
  hidden: { y: "105%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

/**
 * Título que sobe palavra por palavra de trás de uma máscara (estilo editorial).
 * `aoCarregar`: anima na hora (topo da página); senão anima ao entrar na tela, uma vez só.
 */
export function MaskText({
  palavras,
  as = "h2",
  id,
  className,
  aoCarregar = false,
  atraso = 0,
}: {
  palavras: Palavra[];
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  aoCarregar?: boolean;
  atraso?: number;
}) {
  const Comp = m[as];
  const gatilho = aoCarregar
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Comp id={id} className={cn("serif", className)} variants={grupo} initial="hidden" custom={atraso} {...gatilho}>
      {palavras.map((p, i) => (
        <span key={i}>
          {p.quebraAntes && <br />}
          {/* pb/-mb: a máscara não corta descendentes (g, p, ç) */}
          <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <m.span variants={palavra} className={cn("inline-block", p.italico && "italic", p.className)}>
              {p.texto}
            </m.span>
          </span>
          {i < palavras.length - 1 && !palavras[i + 1].quebraAntes && " "}
        </span>
      ))}
    </Comp>
  );
}

/** Atalho: duas linhas, a segunda em itálico (padrão dos títulos de seção). */
export function duasLinhas([primeira, segunda]: string[]): Palavra[] {
  return [
    ...primeira.split(" ").map((texto) => ({ texto })),
    ...segunda.split(" ").map((texto, i) => ({ texto, italico: true, quebraAntes: i === 0 })),
  ];
}
