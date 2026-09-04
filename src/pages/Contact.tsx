import { styled } from 'styled-components';
import ContactSection from '../components/ContactSection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #2c6acf; 
`;


export default function Contact() {
  return (
    <PageContainer>
      <Title>Get In Touch</Title>
      <ContactSection />
    </PageContainer>
  );
}
