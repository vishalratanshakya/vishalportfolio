import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('nexora');

export default function NexoraPage() {
  return <ProjectDetailView slug="nexora" />;
}
