"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

export function GithubStats() {
  const username = siteConfig.githubUsername;
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(Array.isArray(reposData) ? reposData : []);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (error) {
    return (
      <section className="py-20">
        <Container>
          <p className="text-center text-sm text-muted">
            Couldn&apos;t load live GitHub stats right now — view the profile directly at{" "}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lamp hover:underline"
            >
              github.com/{username}
            </a>
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <p className="mb-8 text-center font-mono text-xs tracking-widest text-muted">
          GITHUB ACTIVITY
        </p>

        {user && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 flex max-w-md items-center justify-center gap-10 rounded-2xl border border-border bg-surface p-6 text-center"
          >
            <Stat label="Repos" value={user.public_repos} />
            <Stat label="Followers" value={user.followers} />
            <Stat label="Following" value={user.following} />
          </motion.div>
        )}

        {repos.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border p-4 transition hover:border-lamp"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-semibold">{repo.name}</p>
                  <ExternalLink size={14} className="flex-shrink-0 text-muted" />
                </div>
                {repo.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{repo.description}</p>
                )}
                <div className="mt-3 flex items-center gap-4 font-mono text-xs text-muted">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:border-lamp hover:text-lamp"
          >
            <FaGithub size={16} /> View GitHub Profile
          </a>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-lamp">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
