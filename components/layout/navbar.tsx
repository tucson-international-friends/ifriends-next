"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Activities", href: "/activities" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Newsletters", href: "/newsletters" },
];

const heroPages = ["/", "/about", "/join", "/activities"];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  const hasHero = heroPages.includes(pathname);
  const useLightTheme = isScrolled || !hasHero;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-150",
        useLightTheme
          ? isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/95 backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <nav className="container-wide">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/logos/logo.svg"
              alt="International Friends"
              width={240}
              height={44}
              className={cn(
                "h-11 w-[220px] object-contain object-left transition-all duration-150",
                !useLightTheme && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors",
                  pathname === item.href
                    ? useLightTheme
                      ? "text-primary bg-primary/10"
                      : "text-white bg-white/20"
                    : useLightTheme
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                !useLightTheme && "border-white/70 text-white hover:bg-white/10 hover:text-white hover:border-white"
              )}
              asChild
            >
              <a
                href="https://donorbox.org/ongoing-support-for-international-friends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-4 h-4" />
                Donate
              </a>
            </Button>
            <SignupDialog>
              <Button variant="highlight" size="sm">
                Join Us
              </Button>
            </SignupDialog>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              useLightTheme
                ? "hover:bg-foreground/5 text-foreground"
                : "hover:bg-white/10 text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[80vh] border-b" : "max-h-0",
        )}
      >
        <div className="container-wide py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg font-body text-base font-medium transition-colors",
                pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://donorbox.org/ongoing-support-for-international-friends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-4 h-4" />
                Donate
              </a>
            </Button>
            <SignupDialog>
              <Button variant="highlight" className="w-full">
                Join Us
              </Button>
            </SignupDialog>
          </div>
        </div>
      </div>
    </header>
  );
}
