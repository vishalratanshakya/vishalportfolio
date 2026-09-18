import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('rydo');

export default function RydoPage() {
  return <ProjectDetailView slug="rydo" />;
}
