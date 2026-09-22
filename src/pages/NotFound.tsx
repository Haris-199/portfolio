import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 15vw, 8rem);
  font-weight: 800;
  color: ${(props) => props.theme.text};
  margin: 0;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: ${(props) => props.theme.primary};
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const HomeButton = styled(Link)`
  padding: 0.85rem 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.buttonText};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.primaryHover};
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <HomeButton to="/">
        Return to Homepage
      </HomeButton>
    </Container>
  );
}
