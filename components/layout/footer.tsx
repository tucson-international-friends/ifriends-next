import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/shared/logo";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Activities", href: "/activities" },
  { label: "Bylaws", href: "/by-laws" },
  { label: "Letter from Co-Chairs", href: "/letter" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Newsletters", href: "/newsletters" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ifriendstucson/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/298210727017/",
    icon: FacebookIcon,
  },
  {
    label: "Podcast",
    href: "https://open.spotify.com/episode/4XIcCwshH1jtjr6a7IBHVW",
    icon: SpotifyIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/tucson-international-friends/ifriends-next",
    icon: GitHubIcon,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-warm-950 text-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-warm-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <Logo size="lg" asLink={false} className="brightness-0 invert" />
            </div>
            
            <p className="text-background/70 max-w-md leading-relaxed text-lg font-light">
              International Friends is an all-volunteer organization that brings
              together international students attending the University of
              Arizona and Southern Arizona residents.
            </p>
            
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-xl mb-6 text-background/90 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-background/60 hover:text-warm-300 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-xl mb-6 text-background/90 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-6">
              <a
                href="https://goo.gl/maps/3PF4UE3ZkaModhdi8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 text-background/60 hover:text-warm-300 transition-colors duration-300"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-warm-300 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed">
                  International Student Services
                  <br />
                  615 N Park Avenue
                  <br />
                  Tucson, AZ 85719
                  <br />
                  (520) 621-4627
                </span>
              </a>
              <a
                href="mailto:info@ifriendstucson.org"
                className="group flex gap-4 text-background/60 hover:text-warm-300 transition-colors duration-300 items-center"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-warm-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@ifriendstucson.org</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40 font-light tracking-wide">
          <p>
            &copy; {currentYear} International Friends, Inc. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Web Design by{" "}
            <a
              href="https://youhao.me"
              className="text-background/60 hover:text-warm-300 transition-colors font-normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youhao Wei
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
