import Link from "next/link";
import { MapPin, Mail, Instagram, Facebook, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Activities", href: "/activities" },
  { label: "Newsletters", href: "/newsletters" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ifriendstucson/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/298210727017/",
    icon: Facebook,
  },
  {
    label: "GitHub",
    href: "https://github.com/tucson-international-friends/ifriends-next",
    icon: Github,
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
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-primary-foreground"
                  >
                    <circle cx="20" cy="12" r="5" fill="currentColor" />
                    <circle
                      cx="12"
                      cy="26"
                      r="4"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <circle
                      cx="28"
                      cy="26"
                      r="4"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <path
                      d="M20 18C16 18 13 21 12 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <path
                      d="M20 18C24 18 27 21 28 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-background">
                  International Friends
                </h3>
                <p className="text-warm-400 font-medium tracking-wide text-sm uppercase opacity-90">Since 1952</p>
              </div>
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
              href="https://webreview.octaviamedia.com/"
              className="text-background/60 hover:text-warm-300 transition-colors font-normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Octavia Digital Media
            </a>
            {" & "}
            <span className="text-background/60 hover:text-warm-300 transition-colors cursor-default font-normal">Youhao Wei</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
