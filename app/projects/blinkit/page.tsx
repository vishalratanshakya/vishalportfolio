import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('blinkit');

export default function BlinkitPage() {
  return <ProjectDetailView slug="blinkit" />;
}
