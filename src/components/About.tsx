import { styled } from 'styled-components';

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

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.white};
  margin: 0.5rem auto;
  width: 95%;
  height: 1px;
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
          I'm Haris Siddiqui, a Computer Engineering student who's passionate about web development
          and embedded systems. My journey in technology started with a curiosity about how things
          work, which evolved into a deep passion for technology.
        </Paragraph>
        <Paragraph>
          With a strong foundation in both software and hardware, I bring a unique perspective to my
          projects, understanding systems from the ground up. I thrive in collaborative environments
          where I can contribute my technical expertise while continuously learning from others.
        </Paragraph>
      </Part>
      <Hr />
      <Part>
        <SubTitle>Education</SubTitle>
        <Paragraph>
          I'm currently pursuing my degree in Computer Engineering at Toronto Metropolitan
          University, formerly known as Ryerson University, where I'm exploring the fascinating
          intersection of hardware and software. My academic journey has equipped me with knowledge
          that I apply to real-world projects, but has also earned me a place on the Dean's List in
          2023 to 2024 in recognition of my academic excellence.
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
          Beyond education, I'm committed to continuous learning through online courses and hands-on
          project experience. I believe that tech skills require perpetual growth and practical
          experience to keep up with rapid technological advancements. I embrace every opportunity
          to learn, experiment, and challenge myself in order to broaden my skillset.
        </Paragraph>
      </Part>
      <Hr />

      <Part>
        <SubTitle>Technical Skills</SubTitle>
        <Paragraph>
          My core strength lies in full-stack web development with JavaScript, building scalable and
          efficient web apps. Additionally, I have hands-on experience with embedded systems
          programming and FPGA development, allowing me to work on projects that utilize both
          software and hardware.
        </Paragraph>
        <Skills>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Java</li>
            <li>Git</li>
            <li>Docker</li>
            <li>VHDL</li>
          </ul>
        </Skills>
      </Part>

      <Hr />

      <Part>
        <SubTitle>Beyond Coding</SubTitle>
        <Paragraph>
          When I'm not immersed in lines of code or tinkering with circuits, I'm probably gaming. I
          like story-driven games like <em>Red Dead Redemption 2</em>, <em>God of War</em>, or{' '}
          <em>Assassin's Creed IV: Black Flag</em>; these are probably my favourite. Speedcubing is
          another hobby of mine, my personal best is 14.57s on 3x3 using the CFOP method. I also
          like to watch anime. My favourites are <em>Code Geass</em>, <em>Dr. Stone</em>, and{' '}
          <em>Re: Zero</em>. Beyond that, I love spending time with friends and family; they're what
          matters most.
        </Paragraph>
      </Part>
    </Div>
  );
}
