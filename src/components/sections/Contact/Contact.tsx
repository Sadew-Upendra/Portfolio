"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks, contactDetails } from "@/data/site";
import { ContactForm } from "./ContactForm";

const iconMap = { 
  github: FaGithub, 
  linkedin: FaLinkedin, 
  email: Mail, 
  phone: Phone 
};

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading eyebrow="GET IN TOUCH" title="Let's Start a Conversation" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Contact Links & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-5"
          >
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-lamp/20 bg-lamp/5 px-3.5 py-1.5 text-xs font-mono text-lamp">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lamp opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lamp" />
              </span>
              Open to New Projects & Consulting
            </div>

            <p className="text-sm leading-relaxed text-muted">
              I am always interested in discussing new technical challenges, potential collaborations, or engineering opportunities. Feel free to reach out directly through any of the channels below.
            </p>

            {/* Links List */}
            <div className="space-y-3 pt-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Mail;
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface/50 p-4 text-sm text-ink transition-all duration-300 hover:border-lamp/50 hover:bg-lamp/[0.03] hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg text-lamp transition-colors group-hover:border-lamp/40 group-hover:bg-lamp/10">
                        <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </div>

                    {isExternal && (
                      <ArrowUpRight 
                        size={16} 
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lamp" 
                      />
                    )}
                  </a>
                );
              })}

              {/* Location Card */}
              <div className="flex items-center gap-3.5 rounded-xl border border-border bg-surface/30 p-4 text-sm text-ink">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg text-lamp">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono tracking-wider text-muted uppercase">Location</p>
                  <p className="font-medium">{contactDetails.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Original Container with Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8 lg:col-span-7"
          >
            <div className="mb-6 space-y-1">
              <h3 className="font-display text-xl font-bold text-ink">Direct Inquiry</h3>
              <p className="text-xs text-muted">
                Complete the details below, and I will respond to your message promptly.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
