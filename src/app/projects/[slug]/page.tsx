import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { FaGithub as Github } from "react-icons/fa";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-bg py-16 text-ink">
      <Container className="max-w-3xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-lamp">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <h1 className="mt-6 font-display text-4xl font-extrabold md:text-5xl">{project.title}</h1>
        <p className="mt-3 max-w-xl text-muted">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.repo?.type === "single" && (
            <a href={project.repo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-lamp hover:text-lamp">
              <Github size={16} /> Repository
            </a>
          )}
          {project.repo?.type === "split" && (
            <>
              <a href={project.repo.frontend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-lamp hover:text-lamp">
                <Github size={16} /> Frontend
              </a>
              <a href={project.repo.backend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-lamp hover:text-lamp">
                <Github size={16} /> Backend
              </a>
            </>
          )}
          {project.live && (
            <a href={project.live.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lamp px-4 py-2 text-sm font-semibold text-[#1A1206]">
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>

        {project.image && (
          <img src={project.image} alt={project.title} className="mt-10 w-full rounded-2xl border border-border" />
        )}

        {project.details ? (
          <div className="mt-10 space-y-8">
            <Section title="Overview" text={project.details.overview} />
            <Section title="The Problem" text={project.details.problem} />
            <Section title="Approach" text={project.details.approach} />
            {project.details.architecture && (
              <Section title="Architecture" text={project.details.architecture} />
            )}
            <div>
              <h2 className="font-display text-xl font-bold text-lamp">Challenges</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {project.details.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border p-8 text-center text-muted">
            <p>
              A full case study for this project isn&apos;t written up yet — this page is ready
              to show the build process, technologies, and challenges once it is.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-lamp">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{text}</p>
    </div>
  );
}
