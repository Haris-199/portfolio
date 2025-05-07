import { Link } from 'react-router-dom';
import { styled, useTheme } from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem;
`;

const Hero = styled.section`
  max-width: 1200px;
  align-self: center;
  display: grid;
  grid-template-areas:
    'title points'
    'brief points';
  column-gap: 5rem;
  row-gap: 2rem;

  & > :first-child {
    grid-area: title;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.7rem;
    justify-self: center;
  }

  & > :nth-child(2) {
    grid-area: brief;
    font-size: 1.5rem;

    & > .links {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1rem;

      & > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-size: 1.2rem;

        & > img.dark {
          filter: invert();
        }
      }
    }
  }

  & > :nth-child(3) {
    grid-area: points;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Categories = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  & > h4 {
    font-size: 1.5rem;
    color: #e4920e;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  & > ul {
    list-style: none;
    background-color: #333;
    padding: 1rem;
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    width: 150px;

    & > li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      & > img {
        width: 24px;
        height: 24px;
      }

      img[alt='styled-components Logo'] {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export default function Intro() {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  return (
    <Div>
      <Hero>
        <h2>👋 Hi I'm Haris</h2>
        <div>
          <h3>Software Engineer based in Ontario, Canada.</h3>
          <div className="links">
            <a href="https://github.com/Haris-199/">
              <img
                src="../src/assets/logos/github.svg"
                className={isDark ? 'dark' : ''}
                alt="GitHub Logo"
              />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/harissidd/">
              <img
                src="../src/assets/logos/linkedin.svg"
                className={isDark ? 'dark' : ''}
                alt="LinkedIn Logo"
              />
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <p>
            Hello, I'm a Computer Engineering student with a deep passion for
            programming, technology, and innovation. 
          </p>
          <p>
            My journey in tech has been fueled by curiosity and a relentless drive to learn and grow.
          </p>
          <p>
            Beyond academics, I enjoy collaborating on impactful projects,
            mentoring peers, and staying updated with the latest trends in the
            tech world.
          </p>
          <Link to='501'>See more about me.</Link>
        </div>
      </Hero>
      <section>
        <h3>My Skills</h3>
        <p>
          I have experience in a variety of programming languages and frameworks,
          including:
        </p>
        <Categories>
          <Category>
            <h4>Frontend</h4>
            <ul>
              <li>
                <img src="../src/assets/logos/react.svg" alt="React Logo" />
                <span>React.js</span>
              </li>
              <li>
                <img src="../src/assets/logos/react-router.svg" alt="React Router Logo" />
                <span>React Router</span>
              </li>
              <li>
                <img src="../src/assets/logos/tanstack-query.svg" alt="TanStack Query Logo" />
                <span>TanStack Query</span>
              </li>
              <li>
                <img src="../src/assets/logos/tailwind.svg" alt="Tailwind CSS Logo" />
                <span>Tailwind CSS</span>
              </li>
              <li>
                <img src="../src/assets/logos/styled-components.png" alt="styled-components Logo" />
                <span>styled-components</span>
              </li>
              <li>
                <img src="../src/assets/logos/webpack.svg" alt="Webpack Logo" />
                <span>Webpack</span>
              </li>
            </ul>
          </Category>
          <Category>
            <h4>Backend</h4>
            <ul>
              <li>
                <img src="../src/assets/logos/next.svg" alt="Next.js Logo" />
                <span>Next.js</span>
              </li>
              <li>
                <img src="../src/assets/logos/node.svg" alt="Node.js Logo" />
                <span>Node.js</span>
              </li>
              <li>
                <img src="../src/assets/logos/express.svg" alt="Express Logo" />
                <span>Express.js</span>
              </li>
              <li>
                <img src="../src/assets/logos/django.svg" alt="Django Logo" />
                <span>Django</span>
              </li>
              <li>
                <img src="../src/assets/logos/prisma.svg" alt="Prisma Logo" />
                <span>Prisma</span>
              </li>
              <li>
                <img src="../src/assets/logos/postgresql.svg" alt="PostgreSQL Logo" />
                <span>PostgreSQL</span>
              </li>
            </ul>
          </Category>
          <Category>
            <h4>Languages</h4>
            <ul>
              <li>
                <img src="../src/assets/logos/javascript.svg" alt="JavaScript Logo" />
                <span>JavaScript</span>
              </li>
              <li>
                <img src="../src/assets/logos/html.svg" alt="HTML Logo" />
                <span>HTML</span>
              </li>
              <li>
                <img src="../src/assets/logos/css.svg" alt="CSS Logo" />
                <span>CSS</span>
              </li>
              <li>
                <img src="../src/assets/logos/python.svg" alt="Python Logo" />
                <span>Python</span>
              </li>
              <li>
                <img src="../src/assets/logos/java.svg" alt="Java Logo" />
                <span>Java</span>
              </li>
              <li>
                <img src="../src/assets/logos/c.svg" alt="C Logo" />
                <span>C</span>
              </li>
            </ul>
          </Category>
          <Category>
            <h4>Tools</h4>
            <ul>
              <li>
                <img src="../src/assets/logos/git.svg" alt="Git Logo" />
                <span>Git</span>
              </li>
              <li>
                <img src="../src/assets/logos/github.svg" alt="GitHub Logo" />
                <span>GitHub</span>
              </li>
              <li>
                <img src="../src/assets/logos/docker.svg" alt="Docker Logo" />
                <span>Docker</span>
              </li>
            </ul>
          </Category>
        </Categories>
      </section>
    </Div>
  );
}
