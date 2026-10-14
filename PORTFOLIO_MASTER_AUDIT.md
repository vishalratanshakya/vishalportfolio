# PORTFOLIO MASTER AUDIT REPORT

**Portfolio URL**: [https://vishalratanportfolio.vercel.app/](https://vishalratanportfolio.vercel.app/)  
**Owner**: Vishal Ratan Shakya  
**Professional Role**: Full Stack Developer (MERN Stack, Next.js, TypeScript, Flutter, Dart)  
**Location**: Noida, India  
**Audit Date**: October 2026  
**Auditor**: Antigravity Assistant (Evidence-Based Deep Audit)  

---

## 1. Executive Summary

This master audit provides a comprehensive, evidence-based review of the portfolio website of **Vishal Ratan Shakya**, both in the local Next.js source repository and the production deployment on Vercel.

### Key Audit Findings:
1. **Repository Health & Architecture**: 
   - Built on modern **Next.js 16.3.5 (App Router)**, **React 19.2.8**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP 3.15**.
   - Zero compilation errors. Build creates **18 static prerendered routes** with static generation (`○`).
   - Clean git branch with recent updates removing legacy references (Nexora was verified completely absent across all code and assets).
2. **Projects in System**:
   - Total of **10 distinct projects** exist in `data/projects.ts` and have individual dedicated case study routes (`/projects/[slug]`).
   - Discrepancy identified: `app/projects/page.tsx` states *"Portfolio Showcase (7 Case Studies)"* in its header badge, yet renders all 10 projects.
   - Live external link tests revealed **6 online verified projects**, **1 external demo returning HTTP 402 (TalentSpark)**, and **1 external demo returning HTTP 404 (HomeNest)**.
3. **Resume vs. Portfolio Alignment**:
   - The verified source of truth is `public/resume/vishalratan-cv.pdf` (derived from `app/resume/vishalratan cv.pdf`).
   - Both resume and portfolio reflect **Full Stack Developer** at Meganods IT Solutions (Apr 2026 – Sep 2026) and **Web Developer Trainee** at TradesFolks Pvt. Ltd. (Jan 2025 – Apr 2025).
   - Education and certifications match 100%.
   - Contact email, phone, location, LinkedIn, and GitHub links are authentic and accessible.
4. **Interactive & Technical Features**:
   - Contact form operates as a client-side simulation with canvas confetti; it does not dispatch real emails to an external SMTP/API endpoint (Resend, Formspree, or EmailJS).
   - Custom cursor is implemented cleanly for pointer devices and disabled on touch devices.

---

## 2. Complete Website Route Inventory

| Route | Type | Page Title | Primary Purpose | Content & Interactive Elements | Status & Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Static | `Vishal Ratan Shakya — Full Stack Developer` | Landing & comprehensive profile presentation | Hero banner, storytelling showcase (6 projects), capabilities grid (3 core domains), career timeline preview, call to action. | **Verified Working**. Builds with Turbopack, responsive layouts verified. |
| `/about` | Static | `About Me — Vishal Ratan Shakya` | Biography, philosophy, background, education, and credentials | Portrait photo, career stats, multi-paragraph philosophy, core technical domains, education cards, certification grid, resume CTA. | **Verified Working**. Complete biographical copy. |
| `/projects` | Static | `Projects & Case Studies — Vishal Ratan Shakya` | Full project index and filterable showcase | Grid of 10 project cards with tags, descriptions, live demo links, and case study links. | **Working with Minor Copy Defect**: Header claims "7 Case Studies" while 10 projects are displayed. |
| `/projects/homecraft-services` | Dynamic Static | `Home Craft Services — Case Study` | In-depth case study for on-demand marketplace | Hero banner, metadata (Role, Year, Stack, Architecture), overview, architecture, live demo, source code link. | **Verified Working**. Live app returns `200 OK`. |
| `/projects/talentspark` | Dynamic Static | `TalentSpark — Case Study` | Multi-vendor e-commerce case study | Full architecture breakdown, MERN stack details, multi-vendor portal overview. | **Working**. Note: external live URL `telentspark-black.vercel.app` returns `402 Payment Required`. |
| `/projects/rydo` | Dynamic Static | `Rydo — Case Study` | Mobile ride-hailing app case study | Geolocation workflows, Flutter/Dart mobile architecture, latency metrics. | **Verified Working**. GitHub profile linked. |
| `/projects/sujata-fine-jewels` | Dynamic Static | `SUJATA Fine Jewels — Case Study` | Luxury jewellery e-commerce case study | Editorial design showcase, Next.js + TypeScript breakdown, product zooming. | **Verified Working**. Live app returns `200 OK`. |
| `/projects/blinkit` | Dynamic Static | `Blinkit App — Case Study` | Quick-commerce grocery app case study | 60 FPS mobile workflows, sub-second cart incrementation, Flutter/Dart structure. | **Verified Working**. Complete case study copy. |
| `/projects/360-payz` | Dynamic Static | `360 Payz — Case Study` | Fintech client website case study | Compliance showcase, developer API reference breakdown, marketing layout. | **Verified Working**. Live domain `360payz.com` returns `200 OK`. |
| `/projects/up-roadways` | Dynamic Static | `UP Roadways Digital Radio — Case Study` | Nostalgic Hindi music platform case study | Journey radio listening workflow, Hindi-first UI, custom audio player architecture. | **Verified Working**. Live app returns `200 OK`. Dedicated GitHub repo verified `200 OK`. |
| `/projects/medical-store` | Dynamic Static | `Siddharth Medical Store — Case Study` | Pharmacy inventory management system | Batch numbers, expiry alerts, billing system, MongoDB schema. | **Verified Working**. Live app returns `200 OK`. Dedicated GitHub repo verified `200 OK`. |
| `/projects/apexquant` | Dynamic Static | `ApexQuant — Case Study` | Algorithmic trading & options automation | Indian market options strategies, multi-broker integration, no-code builder. | **Verified Working**. Live app returns `200 OK`. |
| `/projects/homenest` | Dynamic Static | `HomeNest — Case Study` | Real estate discovery platform case study | Property feed, Firebase Auth, multi-parameter search filters. | **Working**. Note: external live URL `homenest-realestate.vercel.app` returns `404 Not Found`. |
| `/experience` | Static | `Work Experience & History — Vishal Ratan Shakya` | Career timeline and detailed employment history | Meganods IT Solutions breakdown, TradesFolks Pvt. Ltd. traineeship, education cards, resume download card. | **Verified Working**. Aligns with resume. |
| `/skills` | Static | `Skills & Tech Stack — Vishal Ratan Shakya` | Full interactive skill matrix across 5 categories | Categorized technology breakdown: Languages, Frameworks, Cloud & DBs, Payments, Tools & Workflows. | **Verified Working**. All badges properly styled. |
| `/contact` | Static | `Contact — Vishal Ratan Shakya` | Direct inquiry and hiring touchpoint | Direct email, phone number, location, LinkedIn/GitHub links, simulated inquiry form. | **Verified Working**. Form has interactive feedback. |
| `/resume` | Static (Assets) | Serves `vishalratan-cv.pdf` | Direct download of verified PDF resume | Configured in public asset directory, served directly to browser. | **Verified Working**. Correct PDF served. |

---

## 3. Complete Project Inventory & Verification Matrix

| Project | Category | Tech Stack | Implemented Features | Live Demo URL | GitHub URL | Case Study Route | Missing Information / Gaps | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Home Craft Services** | On-Demand Services Platform | React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cashfree | 3-panel ecosystem (User, Partner, Admin), search & category filtering, slot booking, Cashfree payments, real-time booking updates. | `https://home-craft-services.vercel.app/` (`200 OK`) | `https://github.com/vishalratanshakya` | `/projects/homecraft-services` | Dedicated GitHub repo link instead of generic profile. | **Verified Online & Complete** |
| **TalentSpark** | Multi-Vendor E-Commerce | React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS | Multi-vendor storefronts, dynamic product catalog, multi-step cart & checkout, JWT auth, admin inventory controls. | `https://telentspark-black.vercel.app/` (`402 Payment Required`) | `https://github.com/vishalratanshakya` | `/projects/talentspark` | Vercel deployment has billing/bandwidth block (`402`). Specific repository URL needed. | **Live Demo Degraded (402)** |
| **Rydo** | Ride Booking Mobile App | Flutter, Dart, Node.js, Express.js, MongoDB | Real-time passenger ride booking, driver request/accept loops, location fare estimation, arrival tracking. | None (Mobile App) | `https://github.com/vishalratanshakya` | `/projects/rydo` | Mobile app APK / demo video recording link. | **Case Study Complete; No Web Demo** |
| **SUJATA Fine Jewels** | Luxury Jewellery E-Commerce | TypeScript, Next.js, React.js, MongoDB, Tailwind CSS | Editorial jewelry catalog, macro product zoom viewer, metal/gemstone filtering, cart, wishlist, order tracking. | `https://sujata-fine-jewels.vercel.app/` (`200 OK`) | `https://github.com/vishalratanshakya` | `/projects/sujata-fine-jewels` | Specific repository URL needed. | **Verified Online & Complete** |
| **Blinkit App** | Grocery Delivery Mobile App | Flutter, Dart, MongoDB, Node.js | Grid grocery categorization, sub-second cart calculations, geolocation delivery address selector, 60fps animations. | None (Mobile App) | `https://github.com/vishalratanshakya` | `/projects/blinkit` | Direct APK download or GitHub repository link. | **Case Study Complete; No Web Demo** |
| **360 Payz** | Fintech Client Web Platform | React.js, Next.js, Tailwind CSS | Product capability showcases, developer API gateway documentation, enterprise PCI-DSS compliance section. | `https://360payz.com` (`200 OK`) | `https://github.com/vishalratanshakya` | `/projects/360-payz` | Tech stack in data says generic `Client Website`; should list specific technologies. | **Verified Online & Complete** |
| **UP Roadways Digital Radio** | Digital Radio & Nostalgic Music | React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS | 24/7 continuous radio playback, Hindi cultural UI, era filtering (Dada, Papa, Main), admin audio management dashboard. | `https://up-roadways-song.vercel.app/` (`200 OK`) | `https://github.com/vishalratanshakya/up-roadways-song` (`200 OK`) | `/projects/up-roadways` | None. Both live URL and dedicated repo are verified live. | **Verified 100% Operational** |
| **Siddharth Medical Store** | Pharmacy Inventory System | React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS | Medicine inventory tracking, batch numbers, expiry notifications, supplier purchase orders, daily billing analytics. | `https://shiddhartmedicalstore.vercel.app/` (`200 OK`) | `https://github.com/vishalratanshakya/Medical-Store` (`200 OK`) | `/projects/medical-store` | None. Both live URL and dedicated repo are verified live. | **Verified 100% Operational** |
| **ApexQuant** | Algorithmic Trading Platform | React.js, Next.js, TypeScript, Node.js, Express.js, Tailwind CSS | Drag-and-drop strategy builder, NSE/BSE historical backtesting, real-time P&L monitor, auto-square-off, multi-broker integration. | `https://apex-quant-web.vercel.app/` (`200 OK`) | `https://github.com/vishalratanshakya` | `/projects/apexquant` | Dedicated repository URL. | **Verified Online & Complete** |
| **HomeNest** | Real Estate Platform | React.js, Next.js, Node.js, Express.js, Firebase, Tailwind CSS | Property search feed, multi-parameter location & price filters, Firebase Auth saved listings. | `https://homenest-realestate.vercel.app` (`404 Not Found`) | `https://github.com/vishalratanshakya` | `/projects/homenest` | Live domain returns Vercel `404`. Needs redeployment or URL verification. | **Live Demo Broken (404)** |

---

## 4. Personal Information & Resume Consistency

| Data Point | Resume Value (`vishalratan-cv.pdf`) | Portfolio Source Value | Status / Discrepancy Analysis | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **Name** | Vishal Ratan Shakya | Vishal Ratan Shakya | **Matched** | Consistent everywhere. |
| **Professional Title** | Full Stack Developer \| MERN Stack \| Next.js \| TypeScript \| Flutter | Full Stack Developer | **Matched** | Accurate alignment. |
| **Location** | Noida, India | Gaur City Center, Noida, India / India | **Matched** | Consistent. |
| **Phone** | +91 9084410891 | +91 9084410891 (`tel:9084410891`) | **Matched** | Verified matching. |
| **Email** | vishalratanshakya@gmail.com | vishalratanshakya@gmail.com (`mailto:`) | **Matched** | Verified matching. |
| **LinkedIn** | `linkedin.com/in/vishal-ratan-shakya-487050298` | `https://linkedin.com/in/vishal-ratan-shakya-487050298` | **Matched** (`200 OK`) | Active and accessible. |
| **GitHub** | `github.com/vishalratanshakya` | `https://github.com/vishalratanshakya` | **Matched** (`200 OK`) | Active and accessible. |
| **Primary Domain** | `vishalratanportfolio.vercel.app` | MetadataBase has placeholder `https://vishalshakya.dev` | **Discrepancy** | Change `metadataBase` in `layout.tsx` to `https://vishalratanportfolio.vercel.app` for accurate Open Graph URL generation. |
| **Experience #1** | Meganods IT Solutions, Full Stack Developer, Apr 2026 – Sep 2026 | Meganods IT Solutions, Fullstack Developer, Apr 2026 – Sep 2026 | **Matched** | Aligns with resume dates and stack. |
| **Experience #2** | TradesFolks Pvt. Ltd., Web Developer Trainee, Jan 2025 – Apr 2025 | TradesFolks Pvt. Ltd., Trainee Developer, Jan 2025 – Apr 2025 | **Matched** | Aligns with traineeship scope. |
| **Education #1** | ABES Institute of Technology (2022 – 2025), B.Tech in CS (AI) | ABES Institute of Technology (2022 – 2025), B.Tech in CS (AI) | **Matched** | Fully consistent. |
| **Education #2** | Dr. Bhimrao Ambedkar University (2019 – 2022), B.Sc. (PCM) | Dr. Bhimrao Ambedkar University (2019 – 2022), B.Sc. (PCM) | **Matched** | Fully consistent. |
| **Certifications** | 1. MERN Stack (ABESIT)<br>2. Web Dev (TradesFolks)<br>3. Java (AppSquadz) | 1. MERN Stack (ABESIT, 2024)<br>2. Web Dev (TradesFolks, 2025)<br>3. Java (AppSquadz, 2023) | **Matched** | Consistent with dates added. |
| **Nexora Removal** | Not present | Completely eradicated (0 references) | **Compliant** | Requirement strictly upheld. |

---

## 5. UI/UX & Responsiveness Audit

### Desktop (1280px+)
- **Header & Navigation**: Floating pill navbar with backdrop blur (`backdrop-blur-md`) and active route indicator. Smooth page transitions.
- **Hero Section**: High-contrast typography with gradient highlights, clean primary and secondary CTAs, and authentic portrait frame.
- **Capabilities Grid**: Three main vertical categories (Languages, Frameworks, Cloud & DBs) balanced visually with glowing blur circles.
- **Timeline Section**: Sticky column for intro text (`lg:sticky lg:top-32`) allows natural vertical reading against experience cards.

### Mobile & Tablet (<768px)
- **Navigation**: Hamburger button triggers a responsive full-screen overlay with animated staggered links and a dedicated resume download button.
- **Badge Uniformity**: The recent mobile fix guarantees that all badges in Languages and Frameworks share a unified height (`min-h-[58px]`) with `truncate` protection, preventing uneven box stacking or clipping.
- **Sticky Overlap Resolution**: The timeline header is unpinned on mobile (`lg:sticky` only), ensuring text does not freeze over cards during vertical scroll.
- **Custom Cursor**: Gracefully disabled via `@media (hover: none) and (pointer: coarse)` so mobile touch operations remain native.

---

## 6. Technical & Functional Verification

| Feature / Element | Verification Method | Result | Notes |
| :--- | :--- | :--- | :--- |
| **Next.js Production Build** | `npm run build` | **Passed (Exit code 0)** | All 18 routes compiled statically. Build time: ~16.7s. |
| **ESLint Check** | `npm run lint` | **Passed (Zero warnings)** | Next.js and React Compiler rules passed. |
| **Resume PDF Serving** | Direct file inspection & test copy | **Passed** | `public/resume/vishalratan-cv.pdf` exists and is downloadable across 4 CTA buttons. |
| **Live Vercel Production** | HTTP request to `https://vishalratanportfolio.vercel.app/` | **Passed (200 OK)** | Main portfolio is accessible live. |
| **Dedicated GitHub Repos** | HTTP request to repo URLs | **Passed (200 OK)** | UP Roadways and Medical Store have verified repository links. |
| **Contact Form Interaction** | Code analysis (`app/contact/page.tsx`) | **Interactive Simulation Only** | Confetti triggers on submit, but form does not dispatch emails to an external API. |
| **External Live Demo: TalentSpark** | HTTP request to `https://telentspark-black.vercel.app/` | **HTTP 402 Error** | Vercel account payment/bandwidth limit exceeded on this project. |
| **External Live Demo: HomeNest** | HTTP request to `https://homenest-realestate.vercel.app` | **HTTP 404 Error** | Domain not found or deployment URL changed. |

---

## 7. Prioritized Recommendations Register

| ID | Category | Component / Page | Issue / Description | Priority | Auto-Fixable? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ISS-01** | SEO / Metadata | `app/layout.tsx` | `metadataBase` points to placeholder `https://vishalshakya.dev` instead of `https://vishalratanportfolio.vercel.app`. | **High** | Yes (Code update) |
| **ISS-02** | Content Accuracy | `app/projects/page.tsx` | Header badge states `(7 Case Studies)` while 10 projects are listed. | **Medium** | Yes (Change to `10 Case Studies`) |
| **ISS-03** | Tech Stack Label | `data/projects.ts` (360 Payz) | Technologies array contains only `['Client Website']` instead of actual technologies. | **Medium** | Yes (Add `['React.js', 'Next.js', 'Tailwind CSS']`) |
| **ISS-04** | Live URL Defect | `data/projects.ts` (HomeNest) | Live demo URL returns `404 Not Found`. | **High** | [NEEDS OWNER CONFIRMATION] |
| **ISS-05** | Live URL Defect | `data/projects.ts` (TalentSpark) | Live demo URL returns `402 Payment Required` on Vercel. | **High** | [NEEDS OWNER CONFIRMATION] |
| **ISS-06** | Contact Integration | `app/contact/page.tsx` | Contact form simulates submission; lacks live email dispatch (e.g. Resend / Web3Forms). | **Medium** | [NEEDS OWNER CONFIRMATION] |
| **ISS-07** | Repository Links | `data/projects.ts` | 8 projects link to the generic GitHub profile rather than specific public repositories. | **Low** | [NEEDS OWNER CONFIRMATION] |

---

## 8. Items Requiring Owner Confirmation

1. **HomeNest Live URL**: `https://homenest-realestate.vercel.app` currently returns a Vercel 404 page. Please provide the updated live URL or confirm whether it should be marked as "Repository Only / Demo Upon Request".
2. **TalentSpark Vercel Status**: `https://telentspark-black.vercel.app/` returns a `402 Payment Required` page on Vercel. Please confirm if this deployment will be restored or if the link should be updated.
3. **Specific GitHub Repository Links**: Home Craft Services, TalentSpark, Rydo, SUJATA Fine Jewels, Blinkit, 360 Payz, ApexQuant, and HomeNest currently point to `https://github.com/vishalratanshakya`. If individual public repositories exist for any of these, let us know so we can link them directly.
4. **Contact Form Backend**: Would you like to connect the contact form to a free real-time email delivery service (such as Web3Forms, Formspree, or Resend) so recruiter messages arrive directly in your inbox `vishalratanshakya@gmail.com`?

---

## 9. Final Portfolio Completion Checklist

- [x] Verified zero references to Nexora in all code, assets, and data files.
- [x] Verified resume `vishalratan-cv.pdf` is active, downloadable, and synchronized across all pages.
- [x] Verified all 10 project case study dynamic routes build cleanly without errors.
- [x] Verified mobile responsiveness, box sizing, and non-overlapping sticky layouts.
- [x] Tested production build (`next build`) and code quality (`eslint`).
- [ ] Update `metadataBase` to live Vercel URL.
- [ ] Correct project counter badge from 7 to 10 in `app/projects/page.tsx`.
- [ ] Resolve external broken links (HomeNest 404, TalentSpark 402).
- [ ] Connect contact form to a real-world email delivery backend.
