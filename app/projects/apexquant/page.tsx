import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('apexquant');

export default function ApexQuantPage() {
  return <ProjectDetailView slug="apexquant" />;
}
