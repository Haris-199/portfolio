import styled, { useTheme } from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h3 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #2c6acf; 
    padding-bottom: 2rem;
  }
  padding-bottom: 2rem;
`;

const Categories = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 2.5rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Category = styled.div`
  gap: 0.25rem;
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.primary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    filter: blur(10px);
    border: 10px solid ${(props) => props.theme.primary};
  }

  & > div > h4 {
    width: fit-content;
    letter-spacing: 0.1em;
    font-size: 1.5rem;
    border-bottom: 2px solid ${(props) => props.theme.primary};

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      filter: blur(4px);
      background: ${(props) => props.theme.primary};
    }
  }

  & > ul {
    list-style: none;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    color: white;
    font-size: 1.2rem;
    text-align: center;

    & > li {
      background-color: ${(props) => props.theme.foreground};
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      border-radius: 100px;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      & > img {
        width: 1.45rem;
        height: 1.45rem;
      }

      img[alt='styled-components Logo'] {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`;

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  return (
    <Section>
      <h3>Skills</h3>
      <Categories>
        <Category className="glass-effect">
          <div>
            <h4>Frontend</h4>
          </div>
          <ul>
            <li>
              <img src="../src/assets/logos/react.svg" alt="React Logo" />
              <span>React</span>
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
            <li>
              <img src="../src/assets/logos/html.svg" alt="HTML Logo" />
              <span>HTML</span>
            </li>
            <li>
              <img src="../src/assets/logos/css.svg" alt="CSS Logo" />
              <span>CSS</span>
            </li>
          </ul>
        </Category>
        <Category className="glass-effect">
          <div>
            <h4>Backend</h4>
          </div>
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
              <img src={isDark ? "../src/assets/logos/express-light.svg" : "../src/assets/logos/express.svg"} alt="Express Logo" />
              <span>Express.js</span>
            </li>
            <li>
              <img src={isDark ? "../src/assets/logos/django-light.svg" : "../src/assets/logos/django.svg"} alt="Django Logo" />
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
        <Category className="glass-effect">
          <div>
            <h4>Languages</h4>
          </div>
          <ul>
            <li>
              <img src="../src/assets/logos/javascript.svg" alt="JavaScript Logo" />
              <span>JavaScript</span>
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
        <Category className="glass-effect">
          <div>
            <h4>Tools</h4>
          </div>
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
    </Section>
  );
}
