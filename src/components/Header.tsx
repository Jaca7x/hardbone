import { m, useScroll, useTransform } from "motion/react";
import { Button, SetaBotao } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { estudio, hero, navegacao } from "@/content";
import { cn, EASE, externo } from "@/lib/utils";

export function Logo({ escuro = false }: { escuro?: boolean }) {
  return (
    <span className="flex shrink-0 items-baseline gap-2.5 leading-none whitespace-nowrap">
      <span className="serif text-[1.7rem]">
        Hard <span className="italic">Bone</span>
      </span>
      <span className={cn("label hidden text-[0.62rem] min-[400px]:inline", escuro ? "text-ink-muted" : "text-ink-soft")}>
        Tattoo · CWB
      </span>
    </span>
  );
}

export function Header() {
  const { scrollY } = useScroll();
  // O fundo de papel com blur aparece aos poucos nos primeiros 80px de rolagem (só opacity).
  const fundo = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <m.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <m.div
        aria-hidden="true"
        style={{ opacity: fundo }}
        className="absolute inset-0 border-b border-line bg-paper/80 backdrop-blur-lg"
      />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a href="#topo" className="rounded-sm">
          <Logo />
          <span className="sr-only">, voltar ao início</span>
        </a>

        {/* 4 links só cabem ao lado do logo e do botão a partir de lg */}
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="label flex items-center gap-7 text-ink-soft">
            {navegacao.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} className="link-sublinhado text-ink-soft transition-colors hover:text-ink">
                  <span className="text-red">0{i + 1}</span> {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild size="sm">
          <a href={estudio.whatsapp} {...externo}>
            {hero.botaoPrincipal}
            <SetaBotao>
              <ArrowRightIcon />
            </SetaBotao>
          </a>
        </Button>
      </div>
    </m.header>
  );
}
