import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryOrbit } from "./GalleryOrbit";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-20 border-y border-border/40 bg-surface/20 py-24">
      <Container>
        <SectionHeading eyebrow="SNAPSHOTS" title="Moments & Highlights" />
        <GalleryOrbit />
      </Container>
    </section>
  );
}