import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/** Curva usada em todas as animações da página. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Atributos para links que abrem em outra aba. */
export const externo = { target: "_blank", rel: "noopener noreferrer" } as const;
