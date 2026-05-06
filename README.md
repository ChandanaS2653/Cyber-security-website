# CyberPath

A free, community-driven platform that guides Indian college graduates from degree to their first cybersecurity job through structured 6-month roadmaps, hands-on lab work, and expert mentorship.

**Live site:** https://cyberpath-web.netlify.app/

---

## Overview

Most entry-level cybersecurity job postings require 2–3 years of experience, creating a barrier that fresh graduates cannot overcome through a degree alone. CyberPath addresses this by providing a transparent, structured learning path that builds practical skills, a lab environment, and a portfolio — without cost or shortcuts.

The platform currently serves three pages:

- **Home** — Mission statement, platform promise, and an interactive 3D cloud of 50+ cybersecurity tools and technologies covered in the curriculum
- **How It Works** — A 5-step visual breakdown of the learning process, from committing to a daily routine through building a lab and landing a first role
- **Core Values** — Eight principles that define the platform's approach: honesty over hype, ethics first, accessibility, community over competition, and others

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI framework | React | 19.2.1 |
| Language | TypeScript | 5.6.3 |
| Build tool | Vite | 7.1.7 |
| Styling | Tailwind CSS | 4.1.14 |
| Component primitives | Radix UI (via shadcn/ui) | various |
| Client-side routing | Wouter | 3.3.5 |
| Animation | Framer Motion | 12.23.22 |
| 3D icon cloud | react-icon-cloud | 4.1.7 |
| Icons | Lucide React | 0.453.0 |
| Form handling | React Hook Form | 7.64.0 |
| Validation | Zod | 4.1.12 |
| Notifications | Sonner | 2.0.7 |
| Server | Express | 4.21.2 |
| Package manager | pnpm | 10.4.1 |

---

## Project Structure

```
.
├── client/                     # Frontend application
│   ├── index.html              # HTML entry point
│   ├── public/
│   │   └── images/             # Static image assets
│   └── src/
│       ├── main.tsx            # React DOM root render
│       ├── App.tsx             # Router and global providers
│       ├── const.ts            # Client-side constants
│       ├── index.css           # Tailwind theme variables and global styles
│       ├── contexts/
│       │   └── ThemeContext.tsx # Light/dark theme provider
│       ├── components/
│       │   ├── ErrorBoundary.tsx
│       │   └── ui/             # shadcn/ui and custom animation components
│       │       ├── background-paths.tsx    # Animated SVG floating paths
│       │       ├── glowing-effect.tsx      # Proximity-based glow border
│       │       ├── hover-effect.tsx        # Card hover animation grid
│       │       ├── hyper-text.tsx          # Character-scramble animation
│       │       ├── interactive-icon-cloud.tsx  # 3D rotating icon cloud
│       │       ├── spotlight-card.tsx      # Mouse-following glow card
│       │       ├── typewriter-text.tsx     # Typewriter text effect
│       │       ├── word-fade-in.tsx        # Word-by-word fade animation
│       │       └── ...                     # 40+ Radix UI base components
│       └── pages/
│           ├── home/
│           │   └── Home.tsx
│           ├── core-values/
│           │   ├── CoreValues.tsx
│           │   └── data.ts     # 8 core value entries
│           ├── how-it-works/
│           │   ├── HowItWorks.tsx
│           │   └── data.ts     # 5 process steps
│           └── NotFound.tsx
├── server/
│   └── index.ts                # Express server — static file serving only
├── shared/
│   └── const.ts                # Constants shared between client and server
├── netlify.toml                # Netlify build and redirect configuration
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Running Locally

**Prerequisites:** Node.js 18+ and pnpm installed.

```bash
# Clone the repository
git clone https://github.com/ChandanaS2653/Cyber-security-website.git
cd Cyber-security-website

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at http://localhost:3000.

**Other scripts:**

```bash
pnpm build      # Production build — outputs to dist/public/
pnpm preview    # Preview the production build locally
pnpm check      # TypeScript type check without emitting files
pnpm format     # Format all files with Prettier
```

---

## Backend

The Express server in `server/index.ts` has no API routes. Its sole purpose is to serve the static build output and return `index.html` for all unmatched routes, enabling client-side navigation with Wouter. In production (Netlify), the server is not used — Netlify handles static serving and SPA redirects via `netlify.toml`.

---

## Deployment

The site is deployed on Netlify with continuous deployment from the `master` branch.

Build settings (defined in `netlify.toml`):

| Setting | Value |
|---|---|
| Build command | `pnpm install && vite build` |
| Publish directory | `dist/public` |
| Node version | 20 |
| SPA redirect | `/* → /index.html` (200) |

To deploy your own instance, import the repository in Netlify — build settings are auto-detected from `netlify.toml`.

---

## Screenshots

<!-- Add screenshots here -->

| Page | Preview |
|---|---|
| Home | _coming soon_ |
| How It Works | _coming soon_ |
| Core Values | _coming soon_ |

---

## License

MIT