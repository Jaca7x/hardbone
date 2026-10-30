import { m } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal, Stagger, itemStagger } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { estudio, passos } from "@/content";
import { EASE, externo } from "@/lib/utils";

export function Steps() {
  return (
    <section id="orcamento" aria-labelledby="orcamento-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading id="orcamento-titulo" numero={passos.numero} selo={passos.selo} titulo={passos.titulo} />

        <Stagger as="ol" className="mt-14 border-b border-line">
          {passos.itens.map((passo, i) => (
            <m.li
              key={passo.titulo}
              variants={itemStagger}
              className="group relative grid gap-3 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10"
            >
              {/* régua vermelha que se desenha por cima da linha ao entrar (scaleX) */}
              <m.span
                aria-hidden="true"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, delay: 0.15, ease: EASE } } }}
                className="absolute -top-px left-0 h-px w-24 origin-left bg-red"
              />
              <span className="label text-red md:col-span-2">Passo {String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif text-4xl transition-transform duration-500 ease-soft sm:text-5xl md:col-span-6 can-hover:group-hover:translate-x-2">
                {passo.titulo}
              </h3>
              <p className="max-w-sm leading-relaxed text-ink-soft md:col-span-4">{passo.texto}</p>
            </m.li>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <Button asChild size="lg" variant="red">
            <a href={estudio.whatsapp} {...externo}>
              <WhatsAppIcon />
              {passos.botao}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
