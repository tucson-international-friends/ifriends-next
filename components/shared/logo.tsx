import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const heights = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/logos/logo-white.svg"
        alt="International Friends"
        width={heights[size] * 3}
        height={heights[size]}
        className={cn(
          size === "sm" ? "h-8" : size === "md" ? "h-10" : "h-14",
          "w-auto"
        )}
        priority
      />
    </Link>
  );
}
