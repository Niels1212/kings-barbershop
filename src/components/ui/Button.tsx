import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white hover:bg-primary/20 hover:border-primary/80 transition uppercase tracking-wider shadow-lg",
  secondary:
    "rounded-full border-2 border-primary/60 bg-primary/10 px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-dark transition uppercase tracking-wider",
  outline:
    "rounded-full border-2 border-white/20 bg-white/5 p-2.5 hover:border-primary/60 hover:bg-primary/10 transition",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
