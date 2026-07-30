"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";

const DEFAULT_COUNT = 3;

function CertificateCard({ cert, index }: { cert: typeof certificates[number]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-lamp/40 hover:shadow-md"
    >
  
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy/60 border-b border-border/60">
        {cert.image && !imgError ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface/30">
            <Award size={28} className="text-lamp/70" />
          </div>
        )}

        {cert.year && (
          <span className="absolute top-3 right-3 rounded-md border border-border/80 bg-bg/80 px-2 py-0.5 font-mono text-[11px] font-medium text-muted backdrop-blur-md">
            {cert.year}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-display text-base font-bold text-ink leading-snug transition-colors">
            {cert.title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-lamp">{cert.issuer}</p>
        </div>

        {cert.credentialUrl && (
          <div className="mt-4 pt-3 border-t border-border/40">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-lamp"
            >
              <span>View credential</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certificates : certificates.slice(0, DEFAULT_COUNT);
  const hiddenCount = certificates.length - DEFAULT_COUNT;

  return (
    <section id="certificates" className="scroll-mt-20 bg-surface/30 py-24 border-y border-border/40">
      <Container>
        <SectionHeading eyebrow="CREDENTIALS" title="Certificates" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert, i) => (
            <CertificateCard key={cert.id || i} cert={cert} index={i} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2 text-xs font-mono font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:border-lamp hover:bg-lamp/5 hover:text-lamp"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Show All <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}