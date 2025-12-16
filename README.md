# Moaz Haider - SEO Expert Portfolio

A comprehensive, conversion-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed with semantic SEO principles and topical authority strategies.

## 🚀 Features

- **SEO-First Architecture**: JSON-LD schema markup, semantic HTML, metadata optimization
- **Dark Mode Support**: Seamless day/night theme toggle with system preference detection
- **Fully Responsive**: Mobile-first design optimized for all devices
- **10 Core Services**: Technical SEO, Local SEO, E-commerce SEO, Content SEO, and more
- **27+ Industries Covered**: Organized into semantic clusters (Home Services, Professional, Restoration, Remodeling)
- **8 CMS Platforms**: WordPress, Shopify, Webflow, Wix, and more
- **80+ Countries**: Interactive location accordion with search functionality
- **Case Studies**: Real results with measurable outcomes
- **FAQ Section**: Schema-ready with expandable answers
- **Contact Form**: Lead capture with multiple CTAs

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Schema**: Custom JSON-LD generator utility

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
moaz-haider-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage with all sections
├── components/
│   ├── ThemeProvider.tsx    # Dark mode context and toggle
│   ├── Header.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with links and social
│   ├── Hero.tsx             # Above-the-fold hero section
│   ├── TopicalAuthority.tsx # Intent mapping section
│   ├── ServicesGrid.tsx     # 10 services with outcomes
│   ├── IndustryClusters.tsx # Industry groupings
│   ├── PlatformsGrid.tsx    # CMS platform SEO
│   ├── CaseStudies.tsx      # Results showcase
│   ├── ProcessWorkflow.tsx  # 6-step SEO process
│   ├── LocationsAccordion.tsx # Countries/cities module
│   ├── Testimonials.tsx     # Client testimonials
│   ├── FAQSection.tsx       # Expandable FAQs
│   └── ContactCTA.tsx       # Contact form and CTA
├── lib/
│   ├── data.ts              # Typed data models (services, industries, etc.)
│   └── schema.ts            # JSON-LD schema generators
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Trust and professionalism
- **Accent**: Various semantic colors for clusters
- **Dark Mode**: Deep neutral backgrounds with subtle gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive typography with clear hierarchy

### Components
- Hover lift effects on cards
- Smooth accordion transitions
- Focus states for accessibility (WCAG compliant)
- Micro-interactions on CTAs

## 🔍 SEO Implementation

### Semantic HTML
- Single H1 per page
- Logical heading hierarchy (H2/H3)
- Semantic tags: `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`

### JSON-LD Schema
- Person schema (Moaz Haider profile)
- Organization schema
- WebSite with SearchAction
- WebPage schema
- BreadcrumbList
- FAQPage schema
- Service schemas

### Technical SEO
- Next.js Metadata API for titles and meta tags
- Canonical URLs
- Open Graph and Twitter cards
- Optimized images with `next/image`
- Clean URL structure for future pages

### Internal Linking
- Contextual links between services, industries, and platforms
- Entity relationship mapping (e.g., "Plumbing SEO" → "Local SEO")
- Intent-based navigation (awareness → consideration → decision)

## 🌐 Pages Structure (Future)

The homepage is designed to support these future pages:

- `/services/{slug}` - Individual service pages
- `/industries/{slug}` - Industry-specific landing pages
- `/platforms/{slug}` - CMS platform pages
- `/locations/{country}/{city}` - Location pages
- `/case-studies/{slug}` - Detailed case studies
- `/about` - About page
- `/contact` - Contact page

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📧 Contact Information

- **Phone**: +92 302 4698992
- **Email**: contact@moazhaider.com
- **LinkedIn**: https://www.linkedin.com/in/moaz-haider/
- **Twitter/X**: https://x.com/MoazHaider71

## 📝 License

© 2025 Moaz Haider. All rights reserved.

## 🤝 Credits

Built with semantic SEO principles inspired by modern search engine understanding of entities, relationships, and topical authority.
