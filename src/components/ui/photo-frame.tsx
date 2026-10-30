import { m } from "motion/react";
import { ImageIcon } from "@/components/ui/icons";
import { imagens } from "@/content";
import { cn, EASE } from "@/lib/utils";

/** Marcas de corte nos cantos, como numa prova de impressão. */
function MarcasDeCorte() {
  const canto = "absolute size-3 border-ink/45";
  return (
    <span aria-hidden="true">
      <span className={cn(canto, "top-2.5 left-2.5 border-t border-l")} />
      <span className={cn(canto, "top-2.5 right-2.5 border-t border-r")} />
      <span className={cn(canto, "bottom-2.5 left-2.5 border-b border-l")} />
      <span className={cn(canto, "right-2.5 bottom-2.5 border-r border-b")} />
    </span>
  );
}

/**
 * Quadro de foto com revelação de cortina ao entrar na tela (só transform):
 * uma faixa cor de papel encolhe para cima enquanto a foto sai de um leve zoom.
 * Sem `foto`, mostra o espaço reservado com o `rotulo`. Com fotos de banco
 * (`imagens.ilustrativas`), mostra a etiqueta "Imagem ilustrativa".
 */
export function PhotoFrame({
  foto,
  alt,
  rotulo,
  numero,
  className,
  aoCarregar = false,
  atraso = 0,
  prioridade = false,
}: {
  foto?: string;
  alt?: string;
  rotulo: string;
  numero?: string;
  className?: string;
  aoCarregar?: boolean;
  atraso?: number;
  /** Foto do topo: carrega na hora e com prioridade alta. */
  prioridade?: boolean;
}) {
  const gatilho = aoCarregar
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -12% 0px" } };

  const conteudo = foto ? (
    <img
      src={foto}
      alt={alt ?? ""}
      loading={prioridade ? "eager" : "lazy"}
      fetchPriority={prioridade ? "high" : "auto"}
      decoding="async"
      className="size-full object-cover"
    />
  ) : (
    <div
      role="img"
      aria-label={`Espaço reservado: ${rotulo.toLowerCase()}${numero ? ` ${numero}` : ""}`}
      className="placeholder-foto flex size-full flex-col items-center justify-center gap-3 text-ink-soft"
    >
      <ImageIcon className="size-7 opacity-70" />
      <span className="label px-4 text-center">{rotulo}</span>
      {numero && <span className="serif text-4xl text-ink/30 italic">{numero}</span>}
    </div>
  );

  return (
    <m.div initial="hidden" {...gatilho} className={cn("relative overflow-hidden bg-paper-2", className)}>
      <m.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.12 }, show: { scale: 1, transition: { duration: 1.2, delay: atraso, ease: EASE } } }}
      >
        {/* zoom do hover numa camada separada, para não brigar com o zoom de entrada */}
        <div className="size-full transition-[scale] duration-700 ease-soft group-hover:scale-[1.03]">{conteudo}</div>
      </m.div>
      {!foto && <MarcasDeCorte />}
      {foto && imagens.ilustrativas && (
        <span className="label absolute top-2 left-2 bg-paper/90 px-1.5 py-0.5 text-[0.55rem] tracking-[0.06em] whitespace-nowrap text-ink sm:top-2.5 sm:left-2.5 sm:px-2 sm:py-1 sm:text-[0.6rem] sm:tracking-[0.14em]">
          {imagens.etiqueta}
        </span>
      )}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 origin-top bg-paper"
        variants={{ hidden: { scaleY: 1 }, show: { scaleY: 0, transition: { duration: 0.9, delay: atraso, ease: EASE } } }}
      />
    </m.div>
  );
}
