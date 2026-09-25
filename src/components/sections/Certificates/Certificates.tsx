"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";

function CertificateCard({ cert }: { cert: typeof certificates[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex w-[280px] sm:w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-[4px_4px_12px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.03)] transition-all duration-300 hover:border-lamp/40 hover:shadow-[6px_6px_16px_rgba(0,0,0,0.4),-3px_-3px_10px_rgba(255,255,255,0.05)]">
      {/* Neumorphic Inset Image Area */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-bg shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]">
        {cert.image && !imgError ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-40" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Award size={28} className="text-lamp/70" />
          </div>
        )}

        {/* Year Tag */}
        {cert.year && (
          <span className="absolute top-2.5 right-2.5 rounded-md border border-border bg-surface/90 px-2 py-0.5 font-mono text-[10px] font-medium text-muted backdrop-blur-md">
            {cert.year}
          </span>
        )}
      </div>

      {/* Dynamic Content Area */}
      <div className="flex flex-1 flex-col justify-between pt-4">
        <div>
          <h3 className="font-display text-sm font-bold text-ink leading-snug">
            {cert.title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-lamp">{cert.issuer}</p>
        </div>

        {/* Action Link */}
        {cert.credentialUrl && (
          <div className="mt-4 pt-3 border-t border-border/40">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-lamp"
            >
              <span>View credential</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function Certificates() {
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section id="certificates" className="scroll-mt-20 py-20 bg-surface/30 border-y border-border/40">
      <Container>
        <SectionHeading eyebrow="CREDENTIALS" title="Certificates" />

        {/* Center Container Track with Soft Inset Well */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-bg/50 p-4 sm:p-5 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.4),inset_-2px_-2px_8px_rgba(255,255,255,0.02)] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <motion.div
            className="flex gap-5 w-max items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: Math.max(certificates.length * 6, 22),
            }}
          >
            {duplicatedCertificates.map((cert, i) => (
              <CertificateCard key={`${cert.id || "cert"}-${i}`} cert={cert} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}