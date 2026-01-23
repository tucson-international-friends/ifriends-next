import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";

interface CTASectionProps {
  title: string;
  description?: string;
  className?: string;
}

export function CTASection({ title, description, className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-warm-100 via-sand-50 to-warm-200",
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: "radial-gradient(#a88567 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} 
        />
        
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-br from-warm-200/60 to-sand-300/40 blur-3xl animate-float" style={{ animationDuration: '15s' }} />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full bg-gradient-to-tr from-sand-300/50 to-warm-200/40 blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '-5s' }} />
        
        <div className="hidden md:block absolute top-20 left-[15%] w-4 h-4 rounded-full bg-primary/40 animate-float" style={{ animationDuration: '6s' }} />
        <div className="hidden md:block absolute bottom-32 right-[20%] w-6 h-6 rounded-full border-2 border-warm-400/40 animate-float" style={{ animationDuration: '8s', animationDelay: '-2s' }} />
        <div className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
      </div>

      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in-up max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-warm-900 tracking-tight leading-[1.1] drop-shadow-sm">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl md:text-2xl text-warm-700 max-w-2xl mx-auto leading-relaxed font-medium">
              {description}
            </p>
          )}
          
          <div className="pt-4">
            <SignupDialog>
              <Button 
                size="xl" 
                variant="highlight"
                className="text-lg md:text-xl px-12 h-16 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-oasis-600/20"
              >
                Join Us Today
              </Button>
            </SignupDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
