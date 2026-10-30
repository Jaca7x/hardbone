import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Botão no padrão shadcn/ui. A micro-interação usa só transform (escala e a seta
 * que anda) e opacity (a sombra é uma camada ::before que aparece no hover).
 */
const buttonVariants = cva(
  [
    "group/btn relative inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap",
    "transition-transform duration-300 ease-soft hover:scale-[1.02] active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0",
    "before:transition-opacity before:duration-300 hover:before:opacity-100",
  ],
  {
    variants: {
      variant: {
        /** tinta sobre papel */
        default: "bg-ink text-paper before:shadow-[0_14px_30px_-12px_rgb(21_18_15/0.55)]",
        /** vermelho de carimbo */
        red: "bg-red text-white before:shadow-[0_14px_30px_-12px_rgb(163_18_28/0.6)]",
        /** papel sobre tinta (seções escuras) */
        paper: "bg-paper text-ink before:shadow-[0_14px_40px_-10px_rgb(238_232_221/0.35)]",
        outline: "border border-ink/25 text-ink hover:border-ink/60",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        default: "h-11 px-6 text-[15px] [&_svg]:size-[18px]",
        lg: "h-13 px-7 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

/** Seta que anda 3px no hover do botão (transform). */
export function SetaBotao({ children }: { children: React.ReactNode }) {
  return <span className="transition-transform duration-300 ease-soft group-hover/btn:translate-x-[3px]">{children}</span>;
}
