import { useEffect, useState } from "react";
import { Button, SetaBotao } from "@/components/ui/button";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stamp } from "@/components/ui/stamp";
import { estudio, hero, localizacao } from "@/content";
import { cn, externo } from "@/lib/utils";

/** Compara a hora de Curitiba com o horário padrão do estúdio (não considera feriados). */
function dentroDoHorario(agora = new Date()) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(agora);
  const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    partes.find((p) => p.type === "weekday")?.value ?? "",
  );
  const hora = Number(partes.find((p) => p.type === "hour")?.value);
  const { dias, abre, fecha } = estudio.expediente;
  return dias.includes(dia) && hora >= abre && hora < fecha;
}

function StatusHorario() {
  const [aberto, setAberto] = useState<boolean | null>(null);
  useEffect(() => {
    const atualizar = () => setAberto(dentroDoHorario());
    atualizar();
    const id = window.setInterval(atualizar, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Reserva a altura mesmo antes de calcular, para não empurrar nada (CLS).
  return (
    <span className={cn("label flex h-5 items-center gap-2", aberto ? "text-ink" : "text-ink-soft")}>
      {aberto !== null && (
        <>
          <span aria-hidden="true" className={cn("size-2 rounded-full", aberto ? "bg-red" : "bg-ink/30")} />
          {aberto ? "Agora: dentro do horário" : "Agora: fora do horário"}
        </>
      )}
    </span>
  );
}

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          id="localizacao-titulo"
          numero={localizacao.numero}
          selo={localizacao.selo}
          titulo={localizacao.titulo}
        />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <address className="not-italic">
              <span className="label text-ink-soft">Endereço</span>
              <p className="serif mt-3 text-4xl sm:text-5xl">{estudio.endereco.rua}</p>
              <p className="serif mt-1 text-3xl text-ink-soft italic sm:text-4xl">
                {estudio.endereco.bairro}, {estudio.endereco.cidade}
              </p>
              <p className="mt-8">
                <span className="label block text-ink-soft">Telefone e WhatsApp</span>
                <a href={estudio.telefone.link} className="link-sublinhado mt-2 inline-block text-xl font-medium">
                  {estudio.telefone.exibicao}
                </a>
              </p>
            </address>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={estudio.comoChegar} {...externo}>
                  {localizacao.botaoMapa}
                  <SetaBotao>
                    <ArrowUpRightIcon />
                  </SetaBotao>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={estudio.whatsapp} {...externo}>
                  <WhatsAppIcon />
                  {localizacao.botaoWhatsApp}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h3 className="label text-ink-soft">Horário de atendimento</h3>
              <StatusHorario />
            </div>
            {/* Tabela no estilo "cardápio", com pontilhado entre o dia e o horário */}
            <dl className="mt-5 border-t border-line">
              {estudio.horario.map((h) => (
                <div key={h.dias} className="flex items-baseline gap-3 border-b border-line py-5">
                  <dt className="serif text-3xl">{h.dias}</dt>
                  <span aria-hidden="true" className="mb-1.5 flex-1 border-b border-dotted border-ink/35" />
                  <dd className="text-lg font-medium">{h.horas}</dd>
                </div>
              ))}
            </dl>
            {/* no celular à esquerda, para não ficar atrás do botão flutuante */}
            <div className="mt-10 flex md:justify-end">
              <Stamp texto={hero.carimbo} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
