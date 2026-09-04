import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { volunteering } from "@/data/volunteering";

export default function VolunteeringPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 pt-40">
        <Container className="max-w-3xl">
          <p className="mb-3 font-mono text-xs tracking-widest text-lamp">GIVING BACK</p>
          <h1 className="mb-12 font-display text-4xl font-extrabold">Volunteering</h1>

          <div className="space-y-6">
            {volunteering.map((v) => (
              <div key={v.id} className="rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold">{v.organization}</h2>
                  <span className="font-mono text-xs text-lamp">{v.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{v.role}</p>
                <p className="mt-3 text-sm text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      {/* <Footer /> */}
    </>
  );
}
