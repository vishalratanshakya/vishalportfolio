import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { StorytellingShowcase } from '@/components/StorytellingShowcase';
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid';
import { TimelinePreview } from '@/components/TimelinePreview';
import { CallToAction } from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Vishal Ratan Shakya — Full Stack Developer',
  description:
    'Personal portfolio website of Vishal Ratan Shakya, a Full Stack Developer experienced in React.js, Next.js, Node.js, Express.js, TypeScript, Flutter, Dart, and MongoDB.',
  openGraph: {
    title: 'Vishal Ratan Shakya — Full Stack Developer Portfolio',
    description:
      'I build modern web and mobile applications with clean code, thoughtful interfaces and seamless user experiences.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StorytellingShowcase />
      <CapabilitiesGrid />
      <TimelinePreview />
      <CallToAction />
    </div>
  );
}
