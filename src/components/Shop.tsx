import { SetaBotao } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { estudio, loja } from "@/content";
import { externo } from "@/lib/utils";

/** Link de texto para o WhatsApp, com sublinhado que cresce e seta que anda. */
function LinkWhatsApp({ children }: { children: React.ReactNode }) {
  return (
    <a href={estudio.whatsapp} {...externo} className="group/btn mt-4 inline-flex items-center gap-2 font-medium">
      <span className="link-sublinhado">{children}</span>
      <SetaBotao>
        <ArrowRightIcon className="size-4" />
      </SetaBotao>
    </a>
  );
}

/** Piercing (serviço) e loja (camisetas e bonés). Sem preço: tudo pelo WhatsApp. */
export function Shop() {
  const { piercing, produtos } = loja;
  return (
    <section id="loja" aria-labelledby="loja-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          id="loja-titulo"
          numero={loja.numero}
          selo={loja.selo}
          titulo={loja.titulo}
          texto={<p className="leading-relaxed">{loja.texto}</p>}
        />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Piercing: duas fotos lado a lado e o texto embaixo; no computador fica parado enquanto a loja rola */}
          <article className="md:sticky md:top-24 md:col-span-7 md:self-start" aria-labelledby="piercing-titulo">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {piercing.fotos.map((f, i) => (
                <figure key={f.foto} className="group">
                  <PhotoFrame foto={f.foto} alt={f.alt} rotulo="Foto de piercing" atraso={i * 0.12} className="aspect-[3/4]" />
                </figure>
              ))}
            </div>
            <Reveal className="mt-5 border-t border-line pt-4">
              <span className="label text-red">{piercing.rotulo}</span>
              <h3 id="piercing-titulo" className="serif mt-2 text-5xl">
                {piercing.titulo}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{piercing.texto}</p>
              <LinkWhatsApp>{piercing.link}</LinkWhatsApp>
            </Reveal>
          </article>

          {/* Loja: camisetas e bonés empilhados */}
          <div className="grid gap-10 md:col-span-5">
            {produtos.map((p, i) => (
              <article key={p.titulo} className="group" aria-labelledby={`produto-${i}`}>
                <PhotoFrame foto={p.foto} alt={p.alt} rotulo={`Foto de ${p.titulo.toLowerCase()}`} atraso={0.1} className="aspect-[3/2]" />
                <Reveal className="mt-4 flex items-start justify-between gap-6 border-t border-line pt-4">
                  <div>
                    <span className="label text-red">{p.rotulo}</span>
                    <h3 id={`produto-${i}`} className="serif mt-1 text-4xl">
                      {p.titulo}
                    </h3>
                  </div>
                  <p className="max-w-[15rem] pt-1 text-sm leading-relaxed text-ink-soft">{p.texto}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
