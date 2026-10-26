# Payload CMS — The React & TypeScript Headless CMS Landing Page

> A pixel-perfect, responsive, and interactive web implementation of the **Payload CMS** landing page based on the Figma design.

[![Figma Design](https://img.shields.io/badge/Figma-Design%20Source-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/file/iFDqM1DTZ8rONvXOo4XRXR/Untitled?type=design&node-id=2%3A258&mode=design&t=tNyHNsdr9Da8SWSd-1)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fsoxibs48-eng%2Famaliy13)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Features & Section Architecture

- **Announcement Bar**: Sticky release update strip with GitHub repository direct link and tag badge.
- **Header & Navigation**: Glassmorphic frosted-glass header with vector logo, smooth anchor links, live GitHub star badge, and mobile drawer menu.
- **Hero Section ("The React & TypeScript CMS")**:
  - High-impact bold typography with modern gradient text styling.
  - Interactive copyable terminal install badge (`npx create-payload-app@latest`) with instant clipboard feedback toast.
  - Live metric badges (TypeScript Native, < 1ms local latency, MIT License, Self-Hosted).
- **Interactive Code Window**:
  - macOS-inspired window chrome with red/yellow/green control dots.
  - Interactive tabs switching between `payload.config.ts`, `server.ts`, and `api.graphql`.
  - Realistic syntax highlighting for TypeScript keywords, types, functions, strings, and comments.
- **Three Core Pillars ("Minimal", "Extensible", "Open Source")**:
  - Structured feature highlights explaining Payload's unopinionated, extensible, and self-hosted philosophy.
- **Architecture & Total Freedom (Section 01)**:
  - Deep dive into Express app control and database agnosticism (MongoDB, PostgreSQL, SQLite, MySQL).
  - **Interactive API Tester**: Live tabbed terminal to inspect real HTTP responses (`GET /api/posts`, `GET /api/users`, `payload.find()`).
- **Comprehensive Feature Toolkit (Section 02)**:
  - Six elevated cards with custom vector icons:
    1. *GraphQL, REST & Local API*
    2. *Extensible Authentication & JWT*
    3. *End-to-End TypeScript Definitions*
    4. *Hooks & Lifecycle Middleware*
    5. *Built-in File Uploads & S3 Adapters*
    6. *White-Label Admin UI Customization*
- **Field Types & Schema Composition (Section 03)**:
  - Interactive field switcher exploring `Blocks`, `Relationship`, `Rich Text`, `Upload`, and `Array` fields.
  - Side-by-side comparison of schema code vs live admin UI component simulation.
- **Production Showcase (Section 04)**:
  - Filterable portfolio grid categorizing real-world applications (SaaS, E-Commerce, Editorial).
  - Browser mockup cards with visual wireframe previews and technology tags.
- **Quickstart Call to Action (Section 05)**:
  - Ambient glowing container with direct one-click CLI command launcher.
- **Enterprise Footer**:
  - Comprehensive 4-column navigation (Product, Developers, Community, Legal) with social links and back-to-top trigger.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility landmarks (`header`, `main`, `section`, `footer`), Open Graph SEO |
| **CSS3 (Vanilla)** | Custom CSS variables, Flexbox, CSS Grid, Glassmorphism, animations, responsive breakpoints |
| **JavaScript (ES6+)** | Dynamic tab switching, API query simulation, filter engine, clipboard API, mobile navigation |
| **Google Fonts** | `Inter` (UI typography) and `JetBrains Mono` (Code & terminal fonts) |

---

## 📱 Responsive Breakpoints

- **Desktop (1200px+)**: Multi-column architecture split, 3-column feature grids, side-by-side code/preview layouts.
- **Tablet (768px – 1024px)**: 2-column adaptive grids, stacked architecture views, horizontal pill scrolling.
- **Mobile (320px – 767px)**: Single column flow, collapsible mobile navigation drawer, touch-friendly hit targets.

---

## 💻 Local Setup & Development

1. Clone or navigate to the repository directory:
   ```bash
   cd "amaliy13"
   ```

2. Open `index.html` in your browser directly:
   - On Windows: Double-click `index.html` or run:
     ```powershell
     Start-Process "index.html"
     ```
   - Or use any local static server (e.g. `npx serve .` or VS Code Live Server).

---

## 🎨 Figma Design Reference

- **Source URL**: [Figma Design Canvas](https://www.figma.com/file/iFDqM1DTZ8rONvXOo4XRXR/Untitled?type=design&node-id=2%3A258&mode=design&t=tNyHNsdr9Da8SWSd-1)
- **Target Node**: `node-id=2:258` (Payload CMS landing page layout)
