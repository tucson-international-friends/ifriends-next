import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";
import { ArrowRight } from "lucide-react";

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
      className={cn("relative min-h-screen flex items-center", className)}
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none">
        <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3">
          <div className="w-12 h-[1px] bg-background/40" />
          <span className="editorial-caption text-background/60">Est. 1952</span>
        </div>
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-12 -rotate-90 origin-center">
          <span className="editorial-caption text-background/40">Tucson, Arizona</span>
        </div>
      </div>

      <div className="container-wide relative z-10 py-32 pt-44">
        <div className="max-w-4xl">
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0s" }}>
            <span className="editorial-caption text-accent">International Friends</span>
          </div>
          <h1
            className="text-background font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-in tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-background/80 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 opacity-0 animate-fade-in font-light"
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div
              className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <SignupDialog>
                <Button size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold uppercase tracking-widest text-sm px-8 h-14">
                  Join Us Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SignupDialog>
              <a 
                href="/about" 
                className="btn-editorial text-background/90 hover:text-background"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
    </section>
  );
}
