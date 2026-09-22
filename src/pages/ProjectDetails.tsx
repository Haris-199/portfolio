import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { styled } from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
  color: ${(props) => props.theme.text};

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: ${(props) => props.theme.primary};
  }

  p {
    font-size: 1.15rem;
    line-height: 1.6;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 12px;
    box-shadow: 0 10px 30px ${(props) => props.theme.shadow};
  }
`;

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <DetailsContainer>
      <h1>{project.title}</h1>
      {project.videoUrl && (
        <iframe src={project.videoUrl} title="Project Demo" />
      )}
      <p>{project.longDescription}</p>
    </DetailsContainer>
  );
}
