import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Skills from './Skills';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import { projects } from '../../public/data/projects';
import Divider from './Divider';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const FeaturedSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .view-all {
    padding: 0.85rem 2.5rem;
    border-radius: 0.5rem;
    background-color: #2c6acf;
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    transition: all 0.2s ease, background-color 0.2s ease;

    &:hover {
      transform: scale(1.02);
      background-color: #2457aa;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }

  & > h3 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #2c6acf; 
  }
`;


export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <MainContainer>
      <Hero />

      <Divider />

      <FeaturedSection>
        <h3>Featured Work</h3>
        <div className="projects">
          {featuredProjects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
        <Link className="view-all" to="/projects">
          View All Projects
        </Link>
      </FeaturedSection>

      <Divider />

      <Skills />
    </MainContainer>
  );
}
