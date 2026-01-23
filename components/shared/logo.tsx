import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
}

export function Logo({ className, size = "md", asLink = true }: LogoProps) {
  const heights = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
  };

  const image = (
    <Image
      src="/logos/logo.svg"
      alt="International Friends"
      width={heights[size] * 5}
      height={heights[size]}
      className={cn(
        size === "sm" ? "h-8" : size === "md" ? "h-10" : size === "lg" ? "h-14" : "h-[72px]",
        "w-auto"
      )}
      priority
    />
  );

  if (!asLink) {
    return <div className={cn("flex items-center", className)}>{image}</div>;
  }

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      {image}
    </Link>
  );
}
