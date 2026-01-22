import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
}

export function TestimonialCard({
  quote,
  author,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden card-hover border-l-4 border-l-primary bg-card",
        className,
      )}
      {...props}
    >
      <CardContent className="p-6 md:p-8">
        <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
        <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10">
          {quote}
        </blockquote>
        <footer className="text-sm font-display font-semibold text-primary">
          {author}
        </footer>
      </CardContent>
    </Card>
  );
}
