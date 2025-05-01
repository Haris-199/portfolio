import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import { projects } from '../../public/data/projects';

const Div = styled.div`
  background-color: ${(props) => props.theme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 5px 1px ${(props) => props.theme.shadow};
  padding: 1rem;

  & .projects {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 1rem;
    gap: 1rem;
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
