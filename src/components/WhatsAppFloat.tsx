import { m } from "motion/react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { estudio } from "@/content";
import { EASE, externo } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <m.a
      href={estudio.whatsapp}
      {...externo}
      aria-label="Pedir orçamento pelo WhatsApp"
      title="Pedir orçamento pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-4 bottom-4 z-60 flex size-14 items-center justify-center rounded-full bg-red text-white shadow-[0_12px_28px_-10px_rgb(21_18_15/0.6)] sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="pulse-ring absolute inset-0 rounded-full bg-red" />
      <WhatsAppIcon className="relative size-7" />
    </m.a>
  );
}
