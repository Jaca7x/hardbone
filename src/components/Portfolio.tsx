import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/content";
import { cn } from "@/lib/utils";

/**
 * Grade de revista em 12 colunas, sem buracos:
 * fileira 1 = largo (7) + estreito (5); fileira 2 = três iguais (4); fileira 3 = estreito (5) + largo (7).
 * No celular: o 1º ocupa a largura toda e os outros vão em pares (2-3, 4-5, 6-7).
 */
const FORMATOS = [
  { col: "col-span-2 md:col-span-7", foto: "aspect-[4/5] md:aspect-auto md:h-[560px]" },
  { col: "col-span-1 md:col-span-5", foto: "aspect-[3/4] md:aspect-auto md:h-[560px]" },
  { col: "col-span-1 md:col-span-4", foto: "aspect-[3/4] md:aspect-auto md:h-[400px]" },
  { col: "col-span-1 md:col-span-4", foto: "aspect-[3/4] md:aspect-auto md:h-[400px]" },
  { col: "col-span-1 md:col-span-4", foto: "aspect-[3/4] md:aspect-auto md:h-[400px]" },
  { col: "col-span-1 md:col-span-5", foto: "aspect-[3/4] md:aspect-auto md:h-[560px]" },
  { col: "col-span-1 md:col-span-7", foto: "aspect-[3/4] md:aspect-auto md:h-[560px]" },
];

export function Portfolio() {
  return (
    <section id="trabalhos" aria-labelledby="trabalhos-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          id="trabalhos-titulo"
          numero={portfolio.numero}
          selo={portfolio.selo}
          titulo={portfolio.titulo}
          texto={<p className="leading-relaxed">{portfolio.subtitulo}</p>}
        />

        <ul className="mt-14 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-14">
          {portfolio.trabalhos.map((t, i) => {
            const formato = FORMATOS[i % FORMATOS.length];
            const n = String(i + 1).padStart(2, "0");
            return (
              <li key={i} className={cn("min-w-0", formato.col)}>
                <figure className="group">
                  <PhotoFrame foto={t.foto} alt={t.alt} rotulo="Foto do trabalho" numero={n} className={formato.foto} />
                  <Reveal delay={0.2}>
                    <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-t border-line pt-3">
                      <span className="min-w-0">
                        <span className="label block text-red">
                          N° {n} — {t.estilo}
                        </span>
                        <span className="serif mt-1 block truncate text-xl italic sm:text-2xl">{t.legenda}</span>
                      </span>
                    </figcaption>
                  </Reveal>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
