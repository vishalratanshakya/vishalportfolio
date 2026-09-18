import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('up-roadways');

export default function UPRoadwaysPage() {
  return <ProjectDetailView slug="up-roadways" />;
}
