import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

interface GithubProfile {
  public_repos: number;
  followers: number;
  html_url: string;
  name?: string;
  bio?: string;
  avatar_url?: string;
  login: string;
}

interface GithubRepo {
  language: string | null;
}

interface StatsResponse {
  profile: GithubProfile;
  topLanguages: string[];
}

export async function GET() {
  const username = siteConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    "User-Agent": "Sadew-Portfolio",
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const profileRes = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!profileRes.ok) {
    const message = await profileRes.text();
    return NextResponse.json(
      { error: `GitHub profile fetch failed: ${profileRes.status} ${message}` },
      { status: 502 }
    );
  }

  const profile: GithubProfile = await profileRes.json();
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!reposRes.ok) {
    const message = await reposRes.text();
    return NextResponse.json(
      { error: `GitHub repos fetch failed: ${reposRes.status} ${message}` },
      { status: 502 }
    );
  }

  const repos: GithubRepo[] = await reposRes.json();
  const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    }
    return acc;
  }, {});

  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([language]) => language);

  const response: StatsResponse = {
    profile,
    topLanguages,
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
