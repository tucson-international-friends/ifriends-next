import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
        "relative py-20 md:py-28 overflow-hidden",
        variant === "light" && "bg-gradient-to-br from-warm-100/80 via-warm-50 to-sand-100/60",
        className,
      )}
    >
      {variant === "light" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-warm-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sand-200/25 to-transparent rounded-full blur-3xl" />
        </div>
      )}

      <div className="container-wide relative">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            invert && "lg:grid-flow-dense",
          )}
        >
          <div
            className={cn(
              "relative group",
              invert && "lg:col-start-2",
            )}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-warm-300/20 to-sand-200/15 rounded-3xl blur-2xl -z-10 transition-all duration-500 group-hover:blur-3xl group-hover:from-warm-300/30 group-hover:to-sand-200/25" />
            
            <div className="absolute -top-2 -left-2 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 border-warm-400/40 rounded-br-xl" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className={cn("relative", invert && "lg:col-start-1 lg:row-start-1")}>
            {stepNumber && (
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-warm-100 to-sand-200 border border-primary/20 text-primary font-display font-bold text-xl">
                  {stepNumber}
                </span>
              </div>
            )}
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground leading-tight">
              {title}
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground/75 mb-8 leading-relaxed">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            
            {action && (
              <Button 
                variant="outline" 
                size="lg" 
                className="group/btn border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300" 
                asChild
              >
                <Link href={action.href}>
                  {action.label}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
