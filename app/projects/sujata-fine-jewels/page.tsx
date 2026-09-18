import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('sujata-fine-jewels');

export default function SujataPage() {
  return <ProjectDetailView slug="sujata-fine-jewels" />;
}
