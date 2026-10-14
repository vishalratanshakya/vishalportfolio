import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid';
import { StorytellingShowcase } from '@/components/StorytellingShowcase';
import { TimelinePreview } from '@/components/TimelinePreview';
import { EducationPreview } from '@/components/EducationPreview';
import { CallToAction } from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Vishal Ratan Shakya — Full Stack Developer',
  description:
    'Personal portfolio website of Vishal Ratan Shakya, a Full Stack Developer experienced in React.js, Next.js, Node.js, Express.js, TypeScript, Flutter, Dart, and MongoDB.',
  openGraph: {
    title: 'Vishal Ratan Shakya — Full Stack Developer Portfolio',
    description:
      'I build modern web and mobile applications with thoughtful interfaces, reliable functionality, and clean, maintainable code.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero / Profile Introduction */}
      <Hero />

      {/* 2. Technical Skills (Above Projects) */}
      <CapabilitiesGrid />

      {/* 3. Selected Projects (Exactly 3 Featured Projects) */}
      <StorytellingShowcase />

      {/* 4. Career Journey / Professional Experience */}
      <TimelinePreview />

      {/* 5. Education & Academics */}
      <EducationPreview />

      {/* 6. Contact CTA */}
      <CallToAction />
    </div>
  );
}
