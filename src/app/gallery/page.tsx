import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 pt-40">
        <Container>
          <p className="mb-3 font-mono text-xs tracking-widest text-lamp">SNAPSHOTS</p>
          <h1 className="mb-12 font-display text-4xl font-extrabold">Gallery</h1>

          {gallery.length === 0 ? (
            <p className="text-muted">No photos added yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {gallery.map((img) => (
                <figure key={img.id} className="overflow-hidden rounded-2xl border border-border">
                  <img src={img.src} alt={img.caption} className="aspect-square w-full object-cover" />
                  <figcaption className="p-3 text-xs text-muted">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
