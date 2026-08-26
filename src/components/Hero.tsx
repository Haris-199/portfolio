import { Link } from 'react-router-dom';
import { styled, useTheme } from 'styled-components';

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  min-height: 65vh;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    @media (max-width: 850px) {
      align-items: center;
    }
  }

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;

    span {
      color: #2c6acf; 
    }
  }

  h2 {
    font-size: clamp(1.15rem, 2vw, 1.5rem);
    color: ${(props) => props.theme.text || '#a0a0a0'};
    font-weight: 400;
    line-height: 1.5;
    max-width: 600px;
  }

  .cta-group {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    
    @media (max-width: 850px) {
      justify-content: center;
    }
  }

  .btn-primary {
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

  .social-links {
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(7px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.15);
      }

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .picture {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 350px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

export default function Hero() {
  const theme = useTheme();
  const isDark = (theme as { background?: string }).background === '#000000';

  return (
    <HeroContainer>
      <div className="text-content">
        <h1>
          Hi, I'm <span>Haris.</span>
        </h1>

        <h2>
          A Computer Engineering student with a passion for web-developement and embedded systems.
        </h2>

        <div className="cta-group">
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>

          <div className="social-links">
            <a href="https://github.com/Haris-199/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img
                src="../src/assets/logos/github.svg"
                className={isDark ? 'dark' : ''}
                alt="GitHub"
                style={isDark ? { filter: 'invert(1)' } : {}}
              />
            </a>
            <a href="https://www.linkedin.com/in/harissidd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img
                src="../src/assets/logos/linkedin.svg"
                className={isDark ? 'dark' : ''}
                alt="LinkedIn"
                style={isDark ? { filter: 'invert(1)' } : {}}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="picture">
        <img src="../src/assets/profile.webp" alt="Haris Siddiqui" />
      </div>
    </HeroContainer>
  );
}
