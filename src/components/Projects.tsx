import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import { projects } from '../../public/data/projects';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .projects {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 1rem;
    gap: 2.25rem;
  }
`;

export default function Projects() {
  return (
    <>
      <Div>
        <h2>Projects</h2>
        <div className='projects'>
          {projects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
      </Div>
    </>
  );
}
