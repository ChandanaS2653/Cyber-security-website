# Cybersecurity Learning Platform

A modern, responsive web application designed to bridge the gap between cybersecurity education and real-world careers. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Interactive Components**: 
  - 3D icon cloud showcasing cybersecurity tools
  - Animated background paths
  - Typewriter text effects
  - Glowing hover effects
- **Three Main Pages**:
  - **Home**: Hero section with mission and promise
  - **How It Works**: 5-step process visualization
  - **Core Values**: Interactive cards with hover effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **100% Free & Community-Driven**: Open-source learning platform

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter (lightweight client-side router)
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChandanaS2653/Cyber-security-website.git
   cd Cyber-security-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```
website/
├── client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/           # Page components
│   │   │   ├── home/        # Home page
│   │   │   ├── core-values/ # Core Values page
│   │   │   └── how-it-works/ # How It Works page
│   │   ├── contexts/        # React contexts
│   │   └── hooks/          # Custom React hooks
│   └── public/             # Static assets
├── server/                 # Express server (optional)
└── dist/                   # Build output
```

## 🎨 Key Components

- **BackgroundPaths**: Animated SVG paths for background effects
- **IconCloud**: 3D interactive cloud of cybersecurity tool logos
- **TypewriterText**: Character-by-character typing animation
- **GlowingEffect**: Mouse-following glow border effect
- **HoverEffect**: Card hover animations with pop-up badges

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Type check without emitting files
- `pnpm format` - Format code with Prettier

## 🌐 Deployment

The website is configured for static hosting on AWS S3. Build output is in `dist/public/`.

**Deployment Steps:**
1. Run `pnpm build`
2. Upload contents of `dist/public/` to your S3 bucket
3. Enable static website hosting in S3 bucket settings

## 🎯 Design Theme

**Modern Gradient Elegance with Deep Navy**
- Primary colors: Teal and Indigo gradients
- Background: Deep navy (#0a0e27)
- Accent colors: Cyan and purple gradients
- Smooth animations and transitions throughout

## 📝 License

MIT

## 🤝 Contributing

This is a community-driven project. Contributions are welcome!

---

**Built with ❤️ for the cybersecurity community**

