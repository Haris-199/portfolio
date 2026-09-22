import { styled, ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './global.css';
import { useRef, useState, useEffect } from 'react';
import useP5Sketch from './hooks/useP5Sketch';
import createBackground from './sketches/background';

export const darkTheme = {
  primary: '#2c6acf',
  primaryHover: '#2457aa',
  pink: '#c760ca',
  text: '#FFFFFF',
  background: '#000000',
  foreground: '#202020',
  grey: '#A5A5A5',
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
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
  textShadow: '0 0 5px #000, 0 0 10px #000, 0 0 15px #000',
  isDark: true,
};

export const lightTheme = {
  primary: '#1b4fc0',
  primaryHover: '#133b91',
  pink: '#9d3d9f',
  text: '#121212',
  background: '#f0f2f5',
  foreground: '#ffffff',
  grey: '#333333',
  buttonText: '#ffffff',
  glassBg: 'rgba(255, 255, 255, 0.5)',
  glassBorder: 'rgba(0, 0, 0, 0.06)',
  glassBorderTop: 'rgba(255, 255, 255, 0.8)',
  glassBgHover: 'rgba(255, 255, 255, 0.7)',
  glassBorderHover: 'rgba(0, 0, 0, 0.12)',
  glassBgActive: 'rgba(240, 240, 240, 0.9)',
  inputBg: 'rgba(0, 0, 0, 0.02)',
  inputBorder: 'rgba(9, 30, 66, 0.15)',
  inputBgFocus: 'rgba(255, 255, 255, 1)',
  boxShadow: '0 10px 32px -4px rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.2)',
  textShadow: 'none',
  isDark: false,
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background}; 
    border-left: 1px solid ${(props) => props.theme.glassBorderHover};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 6px;
    border: 3px solid ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.pink};
  }
`;

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

// Extracted canvas container ensuring it stays strictly in the background
const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

// Wrapper component to isolate the p5 hook
function P5Background({ themeMode }: { themeMode: 'dark' | 'light' }) {
  const ref = useRef<HTMLDivElement>(null);
  useP5Sketch(createBackground(themeMode), ref);
  return <CanvasContainer ref={ref} />;
}

export default function App() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('themePreference');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('themePreference', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout>
        <P5Background key={themeMode} themeMode={themeMode} />
        <Header toggleTheme={toggleTheme} isDark={themeMode === 'dark'} />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
