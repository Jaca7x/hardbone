import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { MaskText } from "@/components/ui/mask-text";
import { Reveal } from "@/components/ui/reveal";
import { ctaFinal, estudio } from "@/content";
import { externo } from "@/lib/utils";

export function FinalCta() {
  const [pergunta, convite] = ctaFinal.titulo;
  return (
    <section aria-labelledby="cta-titulo" className="on-dark bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 lg:px-10">
        <Reveal className="label flex items-center gap-3 text-ink-muted">
          <span aria-hidden="true" className="size-2 rounded-full bg-red-on-dark" />
          Orçamento pelo WhatsApp
        </Reveal>
        <MaskText
          id="cta-titulo"
          palavras={[
            ...pergunta.split(" ").map((texto) => ({ texto })),
            ...convite
              .split(" ")
              .map((texto, i) => ({ texto, italico: true, quebraAntes: i === 0, className: "text-red-on-dark" })),
          ]}
          className="mt-8 text-[clamp(3.2rem,11vw,9rem)] leading-[0.9]"
        />
        <div className="mt-12 flex flex-col gap-8 border-t border-line-dark pt-8 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-ink-muted">{ctaFinal.texto}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild size="lg" variant="paper" className="h-auto min-h-14 py-3 text-center whitespace-normal">
              <a href={estudio.whatsapp} {...externo}>
                <WhatsAppIcon />
                {ctaFinal.botao}
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
