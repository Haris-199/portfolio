import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import GlowLink from './GlowLink';
import githubLogo from '../assets/logos/github.svg';
import linkedinLogo from '../assets/logos/linkedin.svg';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.background || '#000'};
  padding: 1rem 5rem;
  font-size: 0.9rem;
  text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  &::after,
  &::before {
    box-sizing: content-box;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    top: -1px;
    translate: -50% 0%;
    animation: spin 8s linear infinite;
    background-image: repeating-conic-gradient(
      from var(--angle),
      #2c6acf 0%,
      #c760ca 15%,
      #2c6acf 33%
    );
    z-index: -1;
  }
  &::before {
    top: -1px;
    filter: blur(10px);
    opacity: 0.75;
  }
  @keyframes spin {
    to {
      --angle: 360deg;
    }
  }

  & > p:last-child {
    text-align: center;
    font-size: 0.8rem;
    color: gray;
    & > a {
      color: gray;
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }

  @media (min-width: 1300px) {
    padding: 1rem calc(1rem + 5%);
  }

  @media (min-width: 2100px) {
    padding: 1rem calc(1rem + 20%);
  }
`;

const Links = styled.nav`
  font-weight: 300;
  color: gray;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  & .socials,
  & .pages {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  & a {
    width: max-content;
    color: ${(props) => props.theme.grey};
    text-decoration: none;
  }

  & img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.25rem;
    margin-bottom: 2px;
    filter: invert(
      ${(props) => (props.theme.background === '#000000' ? 1 : 0)}
    );
  }

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 1.5rem;
    & .pages,
    & .socials {
      justify-content: center;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Links>
        <div className="socials">
          <GlowLink target='_blank' href="https://github.com/Haris-199/">
            <img src={githubLogo} alt="GitHub Logo" />
            <span>GitHub</span>
          </GlowLink>
          <GlowLink target='_blank' href="https://www.linkedin.com/in/harissidd/">
            <img src={linkedinLogo} alt="LinkedIn Logo" />
            <span>LinkedIn</span>
          </GlowLink>
        </div>
        <div className="pages">
          <GlowLink>
            <Link to="/">Home</Link>
          </GlowLink>
          <GlowLink>
            <Link to="/projects">Projects</Link>
          </GlowLink>
          <GlowLink>
            <Link to="/about">About</Link>
          </GlowLink>
          <GlowLink>
            <Link to="/contact">Contact</Link>
          </GlowLink>
        </div>
      </Links>
      <p>
        Haris Siddiqui's Portfolio. Built with{' '}
        <a href="https://reactjs.org/">React</a> and{' '}
        <a href="https://styled-components.com/">Styled Components</a>.
      </p>
    </FooterContainer>
  );
}
