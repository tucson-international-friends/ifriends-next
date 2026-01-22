import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
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
        "py-8 relative",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      <div className="editorial-border pl-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-5 text-foreground tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      <div className="prose max-w-none pl-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {action && (
        <div className="mt-8 pl-6">
          <Link 
            href={action.href}
            className="btn-editorial text-foreground hover:text-accent"
          >
            {action.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
