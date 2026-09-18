import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('homenest');

export default function HomeNestPage() {
  return <ProjectDetailView slug="homenest" />;
}
