import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      {project.videoUrl && (
        <iframe src={project.videoUrl} title="Project Demo" />
      )}
      <p>{project.longDescription}</p>
    </div>
  );
}
