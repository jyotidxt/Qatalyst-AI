# Qatalyst AI

**Qatalyst AI** is a startup‑grade SaaS platform that leverages generative AI to empower Quality Engineering teams. It helps QA engineers generate intelligent test cases, analyze defects, validate APIs, automate browser testing, and make smarter release decisions.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Qatalyst AI combines **Google Gemini** for AI‑driven insights with a modern **Next.js** front‑end, **Prisma** for data access, and **Neon PostgreSQL** as the backend database. The UI is built with **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and **React Three Fiber** for interactive 3‑D visualisations.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Front‑end | Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Three Fiber |
| Back‑end | Next.js Server Actions, Prisma ORM |
| Database | Neon PostgreSQL |
| AI | Google Gemini API (GEMINI_API_KEY) |
| Testing | Jest, Playwright |

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jyotidxt/Qatalyst-AI.git
   cd Qatalyst-AI
   ```
2. **Install dependencies**
   ```bash
   npm ci --legacy-peer-deps   # clean install based on lock file
   ```
   *If `package-lock.json` is missing, fall back to `npm install --legacy-peer-deps`.*
3. **Set up environment variables**
   Create a `.env.local` file with at least:
   ```env
   GEMINI_API_KEY=your‑gemini‑api‑key
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open <http://localhost:3000> in your browser.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev`   | Starts the Next.js development server |
| `build` | Compiles the application for production |
| `start` | Starts a production‑ready server |
| `lint`  | Runs `next lint` (ESLint) |
| `test`  | Executes Jest unit tests |
| `e2e`   | Runs Playwright end‑to‑end tests |

---

## Project Structure

```
Qatalyst AI/
├─ app/                # Next.js App Router pages & layout
├─ prisma/             # Prisma schema and migrations
├─ public/             # Static assets
├─ src/                # Optional source directory for components
├─ .eslintrc.json      # ESLint configuration
├─ tailwind.config.js  # TailwindCSS config
├─ tsconfig.json       # TypeScript configuration
├─ next.config.js      # Next.js configuration
└─ package.json        # Project metadata and scripts
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository and create a new branch.
2. Ensure linting and tests pass:
   ```bash
   npm run lint && npm test
   ```
3. Open a pull request describing your changes.

---

## License

This project is licensed under the **MIT License**.
