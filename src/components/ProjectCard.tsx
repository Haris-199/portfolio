import { Project } from '../../public/data/projects';
import { styled } from 'styled-components';

const ImageDiv = styled.div`
  display: grid;
  place-items: center;
  & img {
    width: 80%;
  }
`;

const Div = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 5px 1px ${(props) => props.theme.shadow};
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  
  & h3 {
    padding-bottom: 0.75rem;
    font-weight: bold;
  }
`;

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Div>
      <h3>{project.title}</h3>
      <ImageDiv>
        {project.images && <img src={project.images[0]}></img>}
      </ImageDiv>
      {project.points}
    </Div>
  );
}
