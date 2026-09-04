import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 pt-40">
        <Container className="max-w-3xl">
          <p className="mb-3 font-mono text-xs tracking-widest text-lamp">WRITING</p>
          <h1 className="mb-12 font-display text-4xl font-extrabold">Articles</h1>

          {articles.length === 0 ? (
            <p className="text-muted">No articles published yet — check back soon.</p>
          ) : (
            <div className="space-y-6">
              {articles.map((a) => (
                <a
                  key={a.id}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-border p-6 transition hover:border-lamp"
                >
                  <h2 className="font-display text-xl font-bold">{a.title}</h2>
                  <p className="mt-2 text-sm text-muted">{a.summary}</p>
                  <p className="mt-3 font-mono text-xs text-lamp">{a.date}</p>
                </a>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
