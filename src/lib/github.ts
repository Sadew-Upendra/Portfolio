/**
 * Minimal GitHub integration.
 *
 * The GithubStats component uses github-readme-stats.vercel.app image
 * embeds by default — zero API calls, zero rate-limit risk, zero setup.
 *
 * If you later want custom-styled stats instead of the embed images,
 * this function is ready to fetch real data from the GitHub REST API
 * (no auth needed for public data, but rate-limited to 60 req/hr/IP —
 * fine for a portfolio, since you'd cache/revalidate this server-side).
 */
export interface GithubProfile {
  public_repos: number;
  followers: number;
  html_url: string;
}

export async function getGithubProfile(username: string): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
