import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Portfolio } from "@/components/Portfolio";
import { Shop } from "@/components/Shop";
import { Steps } from "@/components/Steps";
import { StylesMarquee } from "@/components/StylesMarquee";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function App() {
  return (
    // LazyMotion + componentes `m`: carrega só o pacote de animação que a página usa.
    // reducedMotion="user": com "reduzir movimento" ligado, as entradas viram só fade.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          <Hero />
          <StylesMarquee />
          <Portfolio />
          <Steps />
          <Shop />
          <Location />
          <FinalCta />
        </main>
        <Footer />
        <WhatsAppFloat />
        <div aria-hidden="true" className="grain" />
      </MotionConfig>
    </LazyMotion>
  );
}
