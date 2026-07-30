import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhoneAlt,
};

const moreLinks = [
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Articles", href: "/articles" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Volunteering", href: "/volunteering" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold">
            {siteConfig.name}
            <span className="text-lamp">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-lamp hover:text-lamp"
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

        <div>
          <p className="mb-4 font-mono text-xs tracking-widest text-lamp">NAVIGATE</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="text-muted transition hover:text-ink">About</a></li>
            <li><a href="#skills" className="text-muted transition hover:text-ink">Skills</a></li>
            <li><a href="#projects" className="text-muted transition hover:text-ink">Projects</a></li>
            <li><a href="#contact" className="text-muted transition hover:text-ink">Contact</a></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
