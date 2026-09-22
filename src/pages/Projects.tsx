import { styled } from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.primary}; 
  padding-bottom: 2rem;
`;

const ProjectsDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 1rem;
  gap: 2rem;
`;

export default function Projects() {
  return (
    <PageContainer>
      <Title>My Projects</Title>
      <ProjectsDiv>
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </ProjectsDiv>
    </PageContainer>
  );
}
