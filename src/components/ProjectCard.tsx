import { Project } from '../../public/data/projects';
import { styled } from 'styled-components';
import { ExternalLink } from 'lucide-react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  transition: all 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    scale: 1.01;
  }

  .titles-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    width: 80%;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid grey;
  }

  .title {
    font-size: 1.75rem;
    font-weight: bold;
  }

  .subtitle {
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
    font-size: 1rem;
  }

  .description {
    line-height: 1.5;
    padding: 0 0.5rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    .titles-div {
      width: 100%;
    }

    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .description {
      font-size: 0.9rem;
    }
  }
`;

const ImageDiv = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 100%;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  a {
    text-decoration: none;
    font-size: 1rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;

    display: grid;
    grid-template-columns: max-content auto;

    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      scale: 1.015;
    }

    @media (max-width: 768px) {
      font-size: 0.79rem;
    padding: 0.3rem 0.5rem;

    }
  }
`;

const CategoriesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;

  .category {
    background-color: #c760cab5;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;

    &:hover {
      scale: 1.04;
    }
    @media (max-width: 768px) {
    font-size: 0.65rem;
  }
  }
`;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Div className="glass-effect">
      <div className="titles-div">
        <h3 className="title">{project.title}</h3>
        <p className="subtitle">{project.subtitle}</p>
      </div>
      <ImageDiv>{project.images && <img src={project.images[0]}></img>}</ImageDiv>
      <p className="description">{project.description}</p>
      <LinksDiv>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <p>See Repo</p>
            <ExternalLink />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <p>See Live</p>
            <ExternalLink />
          </a>
        )}
      </LinksDiv>
      <CategoriesDiv>
        {project.categories.map((category) => (
          <span key={category} className="category">
            {category}
          </span>
        ))}
      </CategoriesDiv>
    </Div>
  );
}
