import { styled } from 'styled-components';
import OriginalDivider from '../components/Divider';
import Link from '../components/GlowLink';

const Divider = styled(OriginalDivider)`
  opacity: 0.6;
  margin-inline: auto;
`;

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1000px) and (max-width: 2000px) {
    max-width: 1500px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.text};
  margin-top: 0.5rem;
`;

const Courses = styled.div`
  margin-block: 1rem;

  & > p {
    font-size: 1.1rem;
  }

  & > ul {
    margin-top: 0.5rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }

  & > ul > li {
    border-bottom: 2px solid ${(props) => props.theme.primary};
    letter-spacing: 1px;
    position: relative;
    width: max-content;

    & > a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 6px;
      background-color: #2c6acf;
      filter: blur(5px);
      animation: blueUnderline infinite alternate 1.5s ease-in-out;

      @keyframes blueUnderline {
        0% {
          transform: scale(1, 0);
        }
        100% {
          transform: scale(1, 1);
        }
      }
    }

    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;

const Skills = styled.div`
  & > ul {
    margin-top: 0.75rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
  & > ul > li {
    border-bottom: 2px solid #c760ca;
    letter-spacing: 1px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 4px;
      background-color: #c760ca;
      filter: blur(5px);
      animation: pinkUnderline infinite alternate 1.5s ease-in-out;

      @keyframes pinkUnderline {
        0% {
          transform: scale(1, 0);
        }
        100% {
          transform: scale(1.1, 1);
        }
      }
    }

    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;

const Part = styled.div`
  padding-inline: 3rem;
  &:last-child {
    margin-bottom: 1rem;
  }

  @media (max-width: 550px) {
    padding-inline: 2rem;
  }
`;

export default function About() {
  return (
    <Div>
      <Part>
        <SubTitle>About Me</SubTitle>
        <Paragraph>
          Hi, I'm Haris. I'm a Computer Engineering student at Toronto Metropolitan
          University, formerly known as Ryerson. I have a passion for programming,
          web development, embedded systems, and just computers in general.
          I love learning and am driven by curiosity. I enjoy creating projects that
          challenge me to learn new skills and technologies, like a bytecode VM in C, or
          a multi-cycle CPU in VHDL. Currently, I'm part of the web development team
          of the <Link href="https://bmes-website.vercel.app/" target="_blank" rel="noopener noreferrer">Biomedical Engineering Society</Link>, and I'm looking for an internship.
        </Paragraph>
      </Part>

      <Divider />

      <Part>
        <SubTitle>Education</SubTitle>
        <Paragraph>
          I chose to study Computer Engineering because I wanted to learn about both
          software and hardware. I enjoy programming, but I also like working with
          electronics. I like to create projects that combine both of these areas,
          like a plant monitor that uses sensors to collect data which gets displayed on
          a web interface. My love for learning got me spot on the Dean's List in 2023
          and 2024.
          <br />
        </Paragraph>
        <Courses>
          <p>Relevant Coursework:</p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-science/CPS/188.html"
              >
                Computer Programming Fundamentals
              </a>
            </li>
            <li>
              <a
                target=""
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/318.html"
              >
                Software Systems
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/428.html"
              >
                Data Structures and Algorithms
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/692.html"
              >
                Software Design and Architecture
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-science/CPS/688.html"
              >
                Advanced Algorithms
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/528.html"
              >
                Object Oriented Analysis and Design
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-science/CPS/510.html"
              >
                Database Systems I
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/691.html"
              >
                Software Requirements Analysis and SPEC
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/628.html"
              >
                Operating Systems
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/608.html"
              >
                Computer Organization and Architecture
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/538.html"
              >
                Microprocessor Systems
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/computer-engineering/COE/328.html"
              >
                Digital Systems
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/electrical-engineering/ELE/532.html"
              >
                Signals and Systems I
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.torontomu.ca/content/ryerson/calendar/2024-2025/courses/communication/CMN/432.html"
              >
                Communication in the Engineering Professions
              </a>
            </li>
          </ul>
        </Courses>
        <Paragraph>
          I like to learn outside of school too. I learnt about intepreters and
          language design by reading <Link href="https://craftinginterpreters.com/" target="_blank" rel="noopener noreferrer">Crafting Interpreters</Link>. At the moment, I'm reading The Practicing Stoic to learn Stoic
          philosophy. Next, I plan on reading Plato's <em>Republic</em> and then maybe <Link href="https://hypermedia.systems/" target="_blank" rel="noopener noreferrer">Hypermedia Systems</Link>. If you have any recommendations, feel free to reach out to me on <Link href="https://www.linkedin.com/in/harissidd/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>.
        </Paragraph>
      </Part>

      <Divider />

      <Part>
        <SubTitle>Technical Skills</SubTitle>
        <Paragraph>
          My core strength lies in full-stack web development with JavaScript and modern frameworks, building
          scalable and efficient web apps. Additionally, my computer engineering background gives me hands-on
          experience with systems programming, PCB design, and FPGA development.
        </Paragraph>
        <Skills>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js & Express</li>
            <li>Rust</li>
            <li>Python & Django</li>
            <li>Java</li>
            <li>C</li>
            <li>PCB Design (EasyEDA / JLCPCB)</li>
            <li>VHDL</li>
            <li>Git & Docker</li>
          </ul>
        </Skills>
      </Part>

      <Divider />

      <Part>
        <SubTitle>Beyond Coding</SubTitle>
        <Paragraph>
          Outside of coding, I enjoy solving Rubik's cubes, playing chess, video
          games, and soccer, and watching anime. My favourite games are <em>Red Dead Redemption 2</em> and <em>God of War</em>.
          The fastest I've solved a cube is 14.329 seconds with the CFOP method. Feel free to challenge me
          on <Link href="https://www.chess.com/member/5harrisonb03" target="_blank" rel="noopener noreferrer">Chess.com</Link>.
        </Paragraph>
      </Part>
    </Div>
  );
}
