import { styled, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './global.css';
import { useRef } from 'react';
import useP5Sketch from './hooks/useP5Sketch';
import createBackground from './sketches/background';
// import trail from './sketches/trail';
export const darkTheme = {
  primary: '#2c6acf',
  primaryHover: '#2457aa',
  pink: '#c760ca',
  text: '#ffffff',
  background: '#000000',
  foreground: '#202020',
  grey: '#a5a5a5',
  buttonText: '#ffffff',

  glassBg: 'rgba(255, 255, 255, 0.03)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassBorderTop: 'rgba(255, 255, 255, 0.15)',
  glassBgHover: 'rgba(255, 255, 255, 0.05)',
  glassBorderHover: 'rgba(255, 255, 255, 0.1)',
  glassBgActive: 'rgba(255, 255, 255, 0.15)',

  inputBg: 'rgba(0, 0, 0, 0.2)',
  inputBorder: 'rgba(255, 255, 255, 0.2)',
  inputBgFocus: 'rgba(0, 0, 0, 0.4)',

  shadow: 'rgba(0, 0, 0, 0.3)',
  textShadow: '0 0 5px #000, 0 0 10px #000, 0 0 15px #000',
  isDark: true,
};

export const lightTheme = {
  primary: '#2c6acf',
  primaryHover: '#2457aa',
  pink: '#c760ca',
  text: '#121212',
  background: '#f8f9fa',
  foreground: '#ffffff',
  grey: '#666666',
  buttonText: '#ffffff',

  glassBg: 'rgba(0, 0, 0, 0.03)',
  glassBorder: 'rgba(0, 0, 0, 0.08)',
  glassBorderTop: 'rgba(0, 0, 0, 0.15)',
  glassBgHover: 'rgba(0, 0, 0, 0.05)',
  glassBorderHover: 'rgba(0, 0, 0, 0.1)',
  glassBgActive: 'rgba(0, 0, 0, 0.1)',

  inputBg: 'rgba(0, 0, 0, 0.05)',
  inputBorder: 'rgba(0, 0, 0, 0.1)',
  inputBgFocus: 'rgba(0, 0, 0, 0.1)',

  shadow: 'rgba(0, 0, 0, 0.1)',
  textShadow: 'none',
  isDark: false,
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
    <ThemeProvider theme={darkTheme}>
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
