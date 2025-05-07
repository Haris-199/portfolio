import { styled, ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./global.css";

const theme = {
  black: "#000000",
  blue: "#1b4fc0",
  orange: "#FCA311",
  grey: "#E5E5E5", 
  shadow: "#A5A5A5", 
  white: "#FFFFFF",

  text: "#FFF",
  background: "#000000",
  foreground: "#202020",
  primary: "#1b4fc0",
  secondary: "#e4920e",
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  
  & > :last-child {
    flex-grow: 1;
    
    @media (min-width: 1300px) {
      padding: 2rem calc(1rem + 5%);
    }

    @media (min-width: 2100px) {
      padding: 2rem calc(1rem + 20%);
    }
  }
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  );
}
