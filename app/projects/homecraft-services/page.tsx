import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('homecraft-services');

export default function HomeCraftServicesPage() {
  return <ProjectDetailView slug="homecraft-services" />;
}
