import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import './globals.css'
import { SiteLoader } from "@/components/layout/SiteLoader";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Sadew Upendra — Full-Stack Developer";
const description =
  "Portfolio of Sadew Upendra, a Computer Science undergraduate and full-stack developer working across Java/Spring Boot and the React/Node ecosystem. Explore projects, skills, and certifications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Sadew Upendra",
    "Full-Stack Developer",
    "Software Engineer Sri Lanka",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "University of Kelaniya",
    "Computer Science Undergraduate",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title,
    description,
    siteName: siteConfig.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: "Full-Stack Developer",
    description,
    sameAs: [
      "https://github.com/Sadew-Upendra",
      "https://linkedin.com/in/sadew-upendra",
    ],
  };

  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased">
        <SiteLoader/>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}