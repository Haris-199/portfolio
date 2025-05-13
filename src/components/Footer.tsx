import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-image: linear-gradient(
    15deg,
    ${(props) => props.theme.background},
    #031e4b,
    #3e0d3f
  );
  padding: 1rem 5rem;
  font-size: 0.9rem;
  text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000;

  display: grid;
  grid-template-columns: auto 1fr;
  align-content: center;
  column-gap: 2rem;

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
    top: -2px;
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
    margin-top: 1rem;
    justify-self: center;
    grid-column: 1 / -1;
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
    padding: 1rem 5%;
  }

  @media (min-width: 2100px) {
    padding: 1rem 20%;
  }
`;

const Links = styled.nav`
  margin-left: auto;
  font-weight: 300;
  color: gray;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 1rem;

  & .socials,
  & .pages {
    display: flex;
    gap: 1rem;
  }
  & .socials {
    justify-content: flex-end;
  }

  & a {
    width: max-content;
    color: ${(props) => props.theme.grey};
    text-decoration: none;

    display: flex;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.grey};

    position: relative;
    &::before, 
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1.5px;
      background-image: linear-gradient(to right, #2c6acf, #c760ca);
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
      transform-origin: bottom left;
    }
    &::after {
      height: 4px;
      filter: blur(5px);
      opacity: 0.8;
    }

    &:hover::before,
    &:focus-visible::before,
    &:hover::after,
    &:focus-visible::after {
      transform: scaleX(1);
    }
  }

  & img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.25rem;
    margin-bottom: 1px;
    filter: invert(
      ${(props) => (props.theme.background === '#000000' ? 1 : 0)}
    );
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    & .pages,
    & .socials {
      justify-content: center;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Links style={{ gridColumn: '1 / -1', margin: '0 auto' }}>
        <div className="socials">
          <a target='_blank' href="https://github.com/Haris-199/">
            <img src="../src/assets/logos/github.svg" alt="GitHub Logo" />
            <span>GitHub</span>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/harissidd/">
            <img src="../src/assets/logos/linkedin.svg" alt="LinkedIn Logo" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="pages">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
