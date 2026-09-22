import { styled } from 'styled-components';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  background: ${(props) => props.theme.glassBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme.glassBorder};
  border-top: 1px solid ${(props) => props.theme.glassBorderTop};
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    letter-spacing: 0.02em;
  }

  input,
  textarea {
    padding: 0.85rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.inputBorder};
    background: ${(props) => props.theme.inputBg};
    color: ${(props) => props.theme.text};
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.primary};
      background: ${(props) => props.theme.inputBgFocus};
      /* Uses hex code + 33 for 20% opacity */
      box-shadow: 0 0 0 2px ${(props) => props.theme.primary}33; 
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  align-self: center;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.buttonText};
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  margin-top: 0.5rem;

  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.primaryHover};
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        Array.from(formData.entries(), ([key, value]) => [key, String(value)] as [string, string])
      ).toString()
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert(error));
  };

  return (
    <StyledForm onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <FormGroup>
        <label htmlFor="name">
          <User size={20} />
          Name
        </label>
        <input type="text" id="name" name="name" required placeholder="John Doe" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">
          <Mail size={20} />
          Email
        </label>
        <input type="email" id="email" name="email" required placeholder="john@example.com" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="message">
          <MessageSquare size={20} />
          Message
        </label>
        <textarea id="message" name="message" required placeholder="Let's get in touch!" />
      </FormGroup>

      <SubmitButton type="submit">
        Send
        <Send size={20} />
      </SubmitButton>
    </StyledForm>
  );
}
