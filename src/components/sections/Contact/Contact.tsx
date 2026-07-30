"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks, contactDetails } from "@/data/site";
import { ContactForm } from "./ContactForm";

const iconMap = { github: FaGithub, linkedin: FaLinkedin, email: Mail, phone: Phone };

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <Container>
        <SectionHeading eyebrow="CONTACT" title="Let's build something." />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-ink transition hover:border-lamp"
                  >
                    <Icon size={18} className="text-lamp" />
                    {link.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-ink">
                <MapPin size={18} className="text-lamp" />
                {contactDetails.address}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
