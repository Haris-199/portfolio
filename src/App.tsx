import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./global.css";

const theme = {
  black: "#000000",
  blue: "#14213D",
  orange: "#FCA311",
  grey: "#E5E5E5", 
  shadow: "#A5A5A5", 
  white: "#FFFFFF",
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
