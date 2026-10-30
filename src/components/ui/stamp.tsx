import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Carimbo redondo com texto em volta girando devagar (transform rotate),
 * no espírito dos selos de tatuagem tradicional. Decorativo.
 */
export function Stamp({ texto, className, escuro = false }: { texto: string; className?: string; escuro?: boolean }) {
  const id = useId();
  const tinta = escuro ? "var(--paper)" : "var(--ink)";
  return (
    <div aria-hidden="true" className={cn("relative size-32 sm:size-36", className)}>
      <svg viewBox="0 0 200 200" className="carimbo-gira absolute inset-0 size-full">
        <defs>
          <path id={id} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke={tinta} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="54" fill="none" stroke={tinta} strokeWidth="1" />
        {/* textLength = volta inteira do círculo (2·π·74): o texto fecha a volta sem sobrar nem encavalar */}
        <text fill={tinta} style={{ fontFamily: "var(--font-mono)", fontSize: 13, textTransform: "uppercase" }}>
          <textPath href={`#${id}`} textLength={464} lengthAdjust="spacing">
            {texto}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-[38%] items-center justify-center rounded-full bg-red text-white">
          <svg viewBox="0 0 24 24" className="size-1/2" fill="currentColor">
            <path d="M12 2l2.35 6.9H21.6l-5.9 4.3 2.25 6.9L12 15.8l-5.95 4.3 2.25-6.9-5.9-4.3h7.25Z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
