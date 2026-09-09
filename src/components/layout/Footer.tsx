import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { siteConfig, socialLinks, footerQuote } from "@/data/site";
import { Mail, Phone, Quote } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Container } from "@/components/ui/Container";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhoneAlt,
  facebook: FaFacebook, 
  discord: SiDiscord,
  //email: Mail, phone: Phone,
};

const moreLinks = [
  { label: "Certificates", href: "#certificates" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "Volunteering", href: "/volunteering" },
  { label: "Gallery", href: "#gallery" },
];

export function Footer() {
  const footerSocials = socialLinks.filter((link) => link.icon !== "phone");

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-2xl font-black tracking-tight">
            <span className="text-lamp">&lt;</span>
            {siteConfig.name.split(" ")[0]}
            <span className="text-lamp">/&gt;</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            {footerSocials.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition hover:border-lamp hover:text-lamp"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs tracking-widest text-lamp">MORE</p>
          <ul className="space-y-2 text-sm">
            {moreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted transition hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full items-center">
          <blockquote className="border-l-2 border-lamp/40 pl-4 space-y-1.5">
            <p className="font-display text-sm leading-relaxed italic text-ink/90">
              &ldquo; {footerQuote.text} &rdquo;
            </p>
            {footerQuote.author && (
              <footer className="font-mono text-[11px] text-muted">
                — <cite className="not-italic">{footerQuote.author}</cite>
              </footer>
            )}
          </blockquote>
        </div>

      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 font-mono text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            Designed &amp; Developed by <span className="text-lamp">{siteConfig.name}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}