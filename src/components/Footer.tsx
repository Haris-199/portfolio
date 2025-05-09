import { styled } from 'styled-components';


const FooterContainer = styled.footer`
  background-image: linear-gradient(15deg, #000, #031e4b, #3e0d3f);
  position: relative;
  padding: 1rem;
  
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  &::after, &::before {
    box-sizing: content-box;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    top: -2px;
    translate: -50% 0%;
    animation: spin 8s linear infinite;
    background-image: repeating-conic-gradient(from var(--angle), #2c6acf 0%, #c760ca 15%, #2c6acf 33%);
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

  @media (min-width: 1300px) {
    padding: 1rem 5%;
  }

  @media (min-width: 2100px) {
    padding: 1rem 20%;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Your Name. All rights reserved.</p>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{' '}
        <a href="https://styled-components.com/">Styled Components</a>.
      </p>
    </FooterContainer>
  );
}
