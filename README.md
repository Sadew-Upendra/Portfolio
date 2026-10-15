<div align="center">

<img src="src/app/favicon.ico" alt="Favicon" width="48" height="48" />

# Sadew Upendra - Portfolio

*A modern, interactive developer portfolio built with **Next.js, TypeScript, and Tailwind CSS**. Designed to showcase my technical skills, projects, education, and experience through a responsive interface, smooth animations, and interactive 3D elements.*

[![Next.js](https://img.shields.io/badge/Next.js-1E293B?style=flat-square&logo=next.js&logoColor=F59E0B)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-1E293B?style=flat-square&logo=typescript&logoColor=F59E0B)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-1E293B?style=flat-square&logo=tailwindcss&logoColor=F59E0B)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-1E293B?style=flat-square&logo=vercel&logoColor=F59E0B)](https://vercel.com/)

</div>

🌐 **Live Demo:** [Visit My Portfolio](https://sadewupendra.vercel.app)

---

## 📸 Preview

<div align="center">
  <img src="public/images/preview/portfolio-preview.png" alt="Sadew Upendra Portfolio Preview" width="600" style="max-width: 100%; height: auto; border-radius: 8px;" />
</div>

---

## ✨ Features

- **Interactive Hero Section** — Animated role titles and CV download.
- **About Me** — Personal introduction and background.
- **Education & Experience** — Timeline-based presentation.
- **Skills Visualization** — Interactive technology orbit.
- **Project Showcase** — Project cards with GitHub repositories, live previews, and case studies.
- **Certifications** — Dedicated section for professional achievements.
- **GitHub Statistics** — Live profile statistics using the GitHub REST API.
- **3D Animations** — Interactive 3D elements and animated transitions.
- **AI-Ready Chatbot** — Portfolio assistant with interactive questions.
- **Contact Form** — EmailJS-powered messaging and social links.
- **Additional Pages** — Articles, events, volunteering, and gallery.
- **SEO Optimized** — Metadata, Open Graph tags, JSON-LD, sitemap, and robots.txt.
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React, React Icons / Simple Icons |
| **Forms & Mail** | EmailJS |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/Sadew-Upendra/Portfolio.git
cd Portfolio
```

**2. Install dependencies:**

```bash
npm install
```
**3. Configure Environment Variables:**

Create a `.env.local` file in the root directory and add your credentials:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
Get EmailJS credentials from [emailjs.com](https://www.emailjs.com) — create a service, an email template with `from_name`, `from_email`, and `message` variables, then copy the three IDs above.

**4. Run the local development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/                  # App Router routes & layout configurations
│   ├── page.tsx          # Main homepage assembling primary sections
│   ├── layout.tsx        # Root layout, fonts, metadata, and JSON-LD
│   ├── sitemap.ts        # Auto-generated XML sitemap
│   ├── robots.ts         # Auto-generated robots.txt
│   ├── projects/[slug]/  # Dynamic project case study pages
│   └── (routes)/         # Standalone feature pages (articles, events, gallery, etc.)
├── components/
│   ├── layout/           # Global navigation, footer, loaders, audio toggle
│   ├── sections/         # Feature-specific homepage section components
│   ├── chatbot/          # Interactive portfolio AI assistant component
│   └── ui/               # Reusable UI primitives (buttons, modals, containers)
├── data/                 # Centralized content files (skills, projects, bio)
├── types/                # Global TypeScript definitions and interfaces
├── lib/                  # Utility functions and API clients (GitHub REST helper)
└── hooks/                # Custom React hooks (useSound, useActiveSection)
```

*Portfolio content is organized in `src/data/`, making it easier to update personal information, skills, projects, certificates, and other sections without modifying the main UI components.*

---

## 📦 Available Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Production build (also type-checks and lints)
npm run start    # Run the production build locally
npm run lint     # Lint only
```

---

## 📄 License

This repository represents my personal portfolio. You are welcome to explore the implementation and use it as inspiration for your own projects. Please do not reproduce my personal content or present my work as your own.

---

<div align="center">

  **Designed & Developed by [Sadew Upendra](https://github.com/Sadew-Upendra)**

  *If you like this project, consider giving it a ⭐ on GitHub!*

</div>
