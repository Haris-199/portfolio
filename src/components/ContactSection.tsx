import { styled, useTheme } from 'styled-components';
import ContactForm from './ContactForm';
import githubLogo from '../assets/logos/github.svg';
import linkedinLogo from '../assets/logos/linkedin.svg';

const InfoSection = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  font-family: inherit;
  
  /* Glass effect */
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;

  .social-links {
    display: flex;
    gap: 0.5rem;

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
`;

const EmailLink = styled.a`
  font-size: 1.05rem;
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
`;

export default function ContactSection() {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  return (
    <>
      <InfoSection>
        <InfoCard>
          <div className="social-links">
            <a href="https://github.com/Haris-199/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img
                src={githubLogo}
                className={isDark ? 'dark' : ''}
                alt="GitHub"
                style={isDark ? { filter: 'invert(1)' } : {}}
              />
            </a>
            <a href="https://www.linkedin.com/in/harissidd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img
                src={linkedinLogo}
                className={isDark ? 'dark' : ''}
                alt="LinkedIn"
                style={isDark ? { filter: 'invert(1)' } : {}}
              />
            </a>
          </div>
          <p>
            <EmailLink href="mailto:haris.sid@proton.me">haris.sid@proton.me</EmailLink>
          </p>
        </InfoCard>
      </InfoSection>
      <ContactForm />
    </>
  );
}
