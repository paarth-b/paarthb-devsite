# Paarth Batra - Portfolio

Personal portfolio website, built with React and Next.js.

## About

ML researcher working on protein interaction research at Mayo Clinic and computational biology projects at ASU Biodesign Institute. Featured work includes contributions to the scikit-bio library (published in Nature Methods) and research on protein language models.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Runtime:** React 19
- **Styling:** TailwindCSS, Shadcn/UI, Magic UI
- **Animations:** Framer Motion
- **Package Manager:** Bun
- **Deployment:** Vercel

## Features

- Single config file setup ([src/data/resume.tsx](./src/data/resume.tsx))
- Work experience and projects showcase
- Research & Recognition section with publications
- MDX-powered blog
- Responsive design with dark mode
- Optimized for performance and SEO

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/paarth-b/paarthb-devsite
   cd paarthb-devsite/site
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Edit the config file at [src/data/resume.tsx](./src/data/resume.tsx) to customize with your own information

5. Build for production:

   ```bash
   bun run build
   ```

## Configuration

All portfolio content is managed through a single configuration file at `src/data/resume.tsx`. Update your:

- Personal information
- Work experience
- Education
- Projects
- Research publications
- Skills
- Contact information

## Deployment

Configured for deployment on Vercel with Bun. The `vercel.json` file is already set up to use Bun for installation and builds.

## License

MIT License - See [LICENSE](./LICENSE) for details.
