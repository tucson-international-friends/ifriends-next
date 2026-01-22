import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ImageTextBlockProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
  invert?: boolean;
  variant?: "default" | "light";
  action?: {
    label: string;
    href: string;
  };
  className?: string;
  stepNumber?: number;
}

export function ImageTextBlock({
  title,
  content,
  imageSrc,
  imageAlt,
  invert = false,
  variant = "default",
  action,
  className,
  stepNumber,
}: ImageTextBlockProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        variant === "light" && "bg-warm-50",
        className,
      )}
    >
      {variant === "light" && (
        <div className="absolute inset-0 pointer-events-none grain" />
      )}

      <div className="container-editorial relative">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",
          )}
        >
          <div
            className={cn(
              "relative group lg:col-span-6",
              invert ? "lg:order-2" : "lg:order-1",
            )}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-accent/10 -z-10" style={{ transform: invert ? 'translate(-8px, 8px)' : 'translate(8px, 8px)' }} />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className={cn(
            "relative lg:col-span-5",
            invert ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-8",
          )}>
            {stepNumber && (
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground font-display font-bold text-xl">
                  {stepNumber}
                </span>
              </div>
            )}
            
            <div className="editorial-border pl-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground leading-[1.1] tracking-tight">
                {title}
              </h2>
            </div>
            
            <div className="prose max-w-none mb-8">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            
            {action && (
              <Link 
                href={action.href}
                className="btn-editorial text-foreground hover:text-accent"
              >
                {action.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
