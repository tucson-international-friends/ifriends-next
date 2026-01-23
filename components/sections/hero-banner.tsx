import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";

interface HeroBannerProps {
  title: React.ReactNode;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: string;
  showCTA?: boolean;
  className?: string;
}

export function HeroBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Banner image",
  imagePosition = "center",
  showCTA = true,
  className,
}: HeroBannerProps) {
  return (
    <section
      className={cn("relative min-h-[70vh] flex items-center", className)}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-warm-400/15 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-sand-300/20 blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container-wide relative z-10 py-32 pt-40">
        <div className="max-w-3xl">
          <h1
            className="text-background font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-background/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <SignupDialog>
                <Button size="xl" variant="highlight">
                  Join Us Today
                </Button>
              </SignupDialog>
              <Button
                size="xl"
                variant="outline"
                className="border-background/50 text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <a href="/about">Learn More</a>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="wave-divider z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8c53.77-8.29,108.88-17.71,163.22-29.14C213.45,56.86,265.94,68.46,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
