import { ProjectDetailView, generateProjectMetadata } from '@/components/ProjectDetailView';

export const metadata = generateProjectMetadata('360-payz');

export default function Payz360Page() {
  return <ProjectDetailView slug="360-payz" />;
}
