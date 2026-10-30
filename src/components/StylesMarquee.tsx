import { estilos } from "@/content";
import { cn } from "@/lib/utils";

/** Uma volta da faixa. Os estilos se repetem 2x para a faixa sempre cobrir telas largas. */
function Faixa({ dup = false }: { dup?: boolean }) {
  const itens = [...estilos.itens, ...estilos.itens];
  return (
    <ul className={cn("flex shrink-0 items-center", dup && "marquee-dup")}>
      {itens.map((estilo, i) => (
        <li key={i} className="flex items-center">
          <span className={cn("serif px-7 text-5xl sm:px-12 sm:text-7xl", i % 2 && "italic text-ink-muted")}>{estilo}</span>
          <span className="text-2xl text-red-on-dark">✶</span>
        </li>
      ))}
    </ul>
  );
}

export function StylesMarquee() {
  return (
    <section aria-label={estilos.rotulo} className="on-dark mt-10 bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pt-5 sm:px-6 lg:px-10">
        <span className="label text-ink-muted">{estilos.rotulo}</span>
        <span className="label border border-dashed border-red-on-dark/70 px-2 py-0.5 text-[0.62rem] text-red-on-dark">
          {estilos.aviso}
        </span>
      </div>
      {/* Para leitor de tela: a lista uma vez só, sem a animação */}
      <p className="sr-only">{estilos.itens.join(", ")}</p>
      <div aria-hidden="true" className="overflow-hidden py-7">
        <div className="marquee-track">
          <Faixa />
          <Faixa dup />
        </div>
      </div>
    </section>
  );
}
