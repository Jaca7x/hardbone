import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Button, SetaBotao } from "@/components/ui/button";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { MaskText } from "@/components/ui/mask-text";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Stamp } from "@/components/ui/stamp";
import { estudio, hero, imagens } from "@/content";
import { EASE, externo } from "@/lib/utils";

function Aparece({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

const fichas = [
  { rotulo: "Endereço", valor: `${estudio.endereco.rua} · ${estudio.endereco.bairro}` },
  { rotulo: "Horário", valor: estudio.horarioCurto },
  { rotulo: "Telefone / WhatsApp", valor: estudio.telefone.exibicao },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax leve: a foto desce no máximo 20px enquanto o topo sai da tela.
  const yFoto = useTransform(scrollYProgress, [0, 1], [0, reduzir ? 0 : 20]);

  return (
    <section ref={ref} id="topo" aria-labelledby="hero-titulo" className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-28 pb-16 sm:px-6 md:grid-cols-12 md:gap-8 md:pt-36 lg:px-10 lg:pb-24">
        <div className="flex flex-col md:col-span-7 md:pt-6">
          <Aparece delay={0} className="label flex items-center gap-3 text-ink-soft">
            <span aria-hidden="true" className="size-2 rounded-full bg-red" />
            {hero.selo}
          </Aparece>

          <MaskText
            as="h1"
            id="hero-titulo"
            aoCarregar
            atraso={0.1}
            palavras={hero.titulo}
            // a partir de md o título divide a tela com a foto: 11vw mantém "Arte que fica" numa linha
            className="mt-6 text-[clamp(4rem,14vw,10.5rem)] leading-[0.88] md:text-[clamp(4rem,11vw,10.5rem)]"
          />

          <Aparece delay={0.55} className="mt-8 max-w-md">
            <p className="text-lg leading-relaxed text-ink-soft">{hero.subtitulo}</p>
          </Aparece>

          <Aparece delay={0.7} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Button asChild size="lg">
              <a href={estudio.whatsapp} {...externo}>
                <WhatsAppIcon />
                {hero.botaoPrincipal}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#trabalhos">
                {hero.botaoSecundario}
                <SetaBotao>
                  <ArrowRightIcon />
                </SetaBotao>
              </a>
            </Button>
          </Aparece>
        </div>

        <div className="relative md:col-span-5">
          <m.div style={{ y: yFoto }}>
            <PhotoFrame
              aoCarregar
              atraso={0.25}
              prioridade
              foto={hero.foto}
              alt={hero.fotoAlt}
              rotulo="Foto do estúdio"
              className="aspect-[4/5] w-full"
            />
          </m.div>
          <Aparece delay={0.6} className="mt-3 flex items-center justify-between label text-ink-soft">
            <span>Fig. 01 — {imagens.ilustrativas && hero.foto ? imagens.etiqueta : "Foto do estúdio"}</span>
            <span>{estudio.endereco.cidade}</span>
          </Aparece>
          <Aparece delay={0.9} className="absolute -top-12 right-2 md:top-auto md:right-auto md:bottom-14 md:-left-16">
            <Stamp texto={hero.carimbo} className="rounded-full bg-paper" />
          </Aparece>
        </div>
      </div>

      {/* Ficha técnica do estúdio, com régua fina */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Aparece delay={0.85}>
          <dl className="grid border-t border-line sm:grid-cols-3">
            {fichas.map((f, i) => (
              <div
                key={f.rotulo}
                className={`py-5 sm:px-6 sm:first:pl-0 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""}`}
              >
                <dt className="label text-ink-soft">{f.rotulo}</dt>
                <dd className="mt-1.5 text-[15px] font-medium">{f.valor}</dd>
              </div>
            ))}
          </dl>
        </Aparece>
      </div>
    </section>
  );
}
