import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 pt-40">
        <Container className="max-w-3xl">
          <p className="mb-3 font-mono text-xs tracking-widest text-lamp">PARTICIPATION</p>
          <h1 className="mb-12 font-display text-4xl font-extrabold">Events</h1>

          <div className="space-y-6">
            {events.map((e) => (
              <div key={e.id} className="rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold">{e.title}</h2>
                  <span className="font-mono text-xs text-lamp">{e.date}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{e.role}</p>
                <p className="mt-3 text-sm text-muted">{e.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
