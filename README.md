# Rig.dev — SaaS Landing Page

A responsive, high-fidelity SaaS landing page built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed and developed based on a modern Figma layout with a strong focus on clean component architecture and performance.

---

## 🚀 Live Demo

[View Live Project on Vercel](https://your-vercel-deployment-link.vercel.app) *(استبدل هذا الرابط برابط Vercel بعد الرفع)*

---

## ✨ Features & Highlights

- **Pixel-Perfect Implementation:** Accurately built from Figma design tokens and layouts.
- **Component-Driven Architecture:** Modular, reusable, and maintainable TypeScript components (`Hero`, `Features`, `CTA`, `Footer`, `Header`).
- **Fully Responsive:** Optimized layouts across mobile, tablet, and desktop viewports using Tailwind CSS breakpoints.
- **Next.js App Router:** Clean file-based routing and Server Component optimization.
- **Modern UI Styling:** Styled using Tailwind CSS with custom fonts and subtle interactive states.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com)

---

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx       # Root layout configuration
│   ├── page.tsx         # Main entry page
│   └── globals.css      # Global styles & Tailwind directives
├── components/          # Reusable UI Components
│   ├── features/        # Section-specific components (Hero, Features, CTA)
│   └── layout/          # Shared layout components (Header, Footer)
└── public/              # Static media assets & images

💻 Getting Started Locally
To run this project locally on your machine:

Clone the repository:

Bash
git clone [https://github.com/moatamid-mt/rig-landing-page.git](https://github.com/moatamid-mt/rig-landing-page.git)
Navigate into the project directory:

Bash
cd rig-landing-page
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to see the result.