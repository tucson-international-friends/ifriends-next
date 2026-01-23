import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TextBlockProps {
  title: string;
  content: string;
  align?: "left" | "center" | "right";
  className?: string;
  action?: {
    label: string;
    href: string;
  };
}

export function TextBlock({
  title,
  content,
  align = "left",
  className,
  action,
}: TextBlockProps) {
  return (
    <div
      className={cn(
        "py-8",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-foreground/80">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {action && (
        <div className="mt-6">
          <Button variant="ghost" className="group" asChild>
            <Link href={action.href}>
              {action.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
