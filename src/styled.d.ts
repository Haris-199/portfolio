import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    blue: string;
    lightblue: string;
    orange: string;
    grey: string;
    pink: string;
    shadow: string;
    white: string;
    text: string;
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
  }
}
