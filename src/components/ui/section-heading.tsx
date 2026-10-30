import { MaskText, duasLinhas } from "@/components/ui/mask-text";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho de seção editorial: régua fina com número e rótulo em mono,
 * título serifado em duas linhas (a segunda em itálico) e texto opcional ao lado.
 */
export function SectionHeading({
  numero,
  selo,
  titulo,
  texto,
  id,
  escuro = false,
  className,
}: {
  numero: string;
  selo: string;
  titulo: string[];
  texto?: React.ReactNode;
  id?: string;
  escuro?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("border-t pt-5", escuro ? "border-line-dark" : "border-line", className)}>
      <Reveal className={cn("label flex items-center justify-between", escuro ? "text-ink-muted" : "text-ink-soft")}>
        <span>
          ({numero}) {selo}
        </span>
        <span aria-hidden="true">Hard Bone Tattoo</span>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
        <MaskText
          id={id}
          palavras={duasLinhas(titulo)}
          className="text-[clamp(2.9rem,8.5vw,6.5rem)] md:col-span-8"
        />
        {texto && (
          <Reveal delay={0.15} className={cn("md:col-span-4 md:pb-3", escuro ? "text-ink-muted" : "text-ink-soft")}>
            {texto}
          </Reveal>
        )}
      </div>
    </div>
  );
}
