import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  className?: string;
}

export function CTASection({ title, description, className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-28 md:py-40 overflow-hidden bg-primary",
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-accent/20" 
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} 
        />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </div>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="editorial-caption text-primary-foreground/60 mb-4 block">Take Action</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground tracking-tight leading-[0.95]">
              {title}
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:text-right">
            {description && (
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-8 font-light">
                {description}
              </p>
            )}
            
            <SignupDialog>
              <Button 
                size="xl" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold uppercase tracking-widest text-sm px-10 h-16 shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300"
              >
                Join Us Today
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </SignupDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
