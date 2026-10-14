# PORTFOLIO CONTENT & CODE UPDATES

This document lists the safe, recoverable improvements identified during the audit, including exact code replacements, reasons, and supporting evidence.

---

## 1. MetadataBase URL Synchronization (`app/layout.tsx`)

### Current Content
```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://vishalshakya.dev"),
  title: "Vishal Ratan Shakya — Full Stack Developer",
  ...
  openGraph: {
    ...
    url: "https://vishalshakya.dev",
```

### Proposed Replacement
```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://vishalratanportfolio.vercel.app"),
  title: "Vishal Ratan Shakya — Full Stack Developer",
  ...
  openGraph: {
    ...
    url: "https://vishalratanportfolio.vercel.app",
```

### Reason for Change
The domain `vishalshakya.dev` is an unconfigured placeholder. Using `https://vishalratanportfolio.vercel.app` ensures Open Graph images, canonical links, and social link previews resolve directly to the live portfolio.

### Supporting Evidence
User prompt and verified live deployment: `https://vishalratanportfolio.vercel.app/` (HTTP 200).

---

## 2. Projects Counter Badge Correction (`app/projects/page.tsx`)

### Current Content
```tsx
<span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
  Portfolio Showcase (7 Case Studies)
</span>
```

### Proposed Replacement
```tsx
<span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
  Portfolio Showcase (10 Case Studies)
</span>
```

### Reason for Change
The projects list displays 10 comprehensive case studies. The old badge text was outdated from an earlier version with 7 projects.

### Supporting Evidence
`PROJECTS.length` in `data/projects.ts` equals 10.

---

## 3. 360 Payz Tech Stack Description (`data/projects.ts`)

### Current Content
```typescript
{
  id: '360-payz',
  slug: '360-payz',
  number: '06',
  title: '360 Payz',
  category: 'Payment App Client Website',
  tagline: 'Client-facing marketing & documentation web platform for fintech payment system',
  heroImage: '/images/projects/360-payz/hero.jpg',
  technologies: ['Client Website'],
```

### Proposed Replacement
```typescript
{
  id: '360-payz',
  slug: '360-payz',
  number: '06',
  title: '360 Payz',
  category: 'Payment App Client Website',
  tagline: 'Client-facing marketing & documentation web platform for fintech payment system',
  heroImage: '/images/projects/360-payz/hero.jpg',
  technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Fintech APIs'],
```

### Reason for Change
`['Client Website']` describes the deliverable type rather than the engineering technologies. Adding specific technologies aligns with recruiter evaluation standards.

### Supporting Evidence
Source code in `app/projects/360-payz/page.tsx` and case study overview.

---

## 4. ESLint HTML Entity Escapes in Components

### Current Content (`components/Hero.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`)
Unescaped single quotes (`'`) and double quotes (`"`) trigger ESLint errors in Next.js builds:
- `components/Hero.tsx`: `"I build modern web...experiences."`
- `components/Footer.tsx`: `Let's Build Something Exceptional`
- `app/contact/page.tsx`: `Let's Work Together`, `I'd love to hear from you.`
- `components/CallToAction.tsx`: `Let's create...`

### Proposed Replacement
Escape quotes using standard React entities:
- Replace `'` with `&apos;`
- Replace `"` with `&quot;`

### Reason for Change
Resolves 8 ESLint build errors in `npm run lint`.

---

## 5. Items Requiring Owner Confirmation [NEEDS OWNER CONFIRMATION]

| Item | Context | Question / Action Needed |
| :--- | :--- | :--- |
| **HomeNest Live Demo** | `https://homenest-realestate.vercel.app` returns HTTP 404 | What is the updated Vercel URL for HomeNest, or should the "Live Demo" button be hidden for this project? |
| **TalentSpark Live Demo** | `https://telentspark-black.vercel.app/` returns HTTP 402 | Is the Vercel deployment being restored, or is there an alternative URL available? |
| **Direct Project Repositories** | 8 projects currently link to profile `https://github.com/vishalratanshakya` | Are individual public repositories available for Home Craft Services, TalentSpark, SUJATA, Rydo, Blinkit, 360 Payz, ApexQuant, or HomeNest? |
| **Live Contact Form Handler** | Contact form currently runs client-side confetti simulation | Would you like to connect the form to an automated email service (e.g., Web3Forms or Resend) to forward messages directly to `vishalratanshakya@gmail.com`? |
