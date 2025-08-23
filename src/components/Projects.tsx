import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import { projects } from '../../public/data/projects';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const P = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.15rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  font-weight: 500;
`;

export default function Projects() {
  return (
    <>
      <Div>
        <P>
          Explore a selection of my recent projects, showcasing my skills in programming and problem-solving.
        </P>
        <div className="projects">
          {projects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
      </Div>
    </>
  );
}
