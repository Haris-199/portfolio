import { styled, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './global.css';
import { useRef } from 'react';
import useP5Sketch from './hooks/useP5Sketch';
import createBackground from './sketches/background';
// import trail from './sketches/trail';

const theme = {
  black: '#000000',
  blue: '#1b4fc0',
  lightblue: '#189ac5',
  orange: '#FCA311',
  grey: '#E5E5E5',
  pink: '#C760CA',
  shadow: '#A5A5A5',
  white: '#FFFFFF',

  text: '#FFF',
  background: '#000000',
  foreground: '#202020',
  primary: '#1b4fc0',
  secondary: '#e4920e',
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  color: ${(props) => props.theme.text};
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    padding: 2rem calc(1rem + 5%);
  }

  @media (min-width: 2100px) {
    padding: 2rem calc(1rem + 20%);
  }
`;

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  useP5Sketch(createBackground("dark"), ref);

  return (
    <ThemeProvider theme={theme}>
      <Layout ref={ref}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
