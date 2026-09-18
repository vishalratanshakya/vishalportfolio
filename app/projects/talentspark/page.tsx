import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('talentspark');

export default function TalentSparkPage() {
  return <ProjectDetailView slug="talentspark" />;
}
