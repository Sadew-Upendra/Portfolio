import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className, external }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  const styles = {
    primary: "bg-lamp text-[#1A1206] hover:brightness-110",
    outline: "border-2 border-ink/70 text-ink hover:bg-ink/10",
    ghost: "text-ink hover:text-lamp",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...linkProps}>
      {children}
    </Link>
  );
}
