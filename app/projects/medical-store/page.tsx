import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('medical-store');

export default function MedicalStorePage() {
  return <ProjectDetailView slug="medical-store" />;
}
