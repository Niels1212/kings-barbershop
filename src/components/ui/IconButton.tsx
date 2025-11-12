import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ icon, label, onClick, className = "" }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all ${className}`}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
