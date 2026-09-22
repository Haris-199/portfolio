import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    primaryHover: string;
    pink: string;
    text: string;
    background: string;
    foreground: string;
    grey: string;
    buttonText: string;

    glassBg: string;
    glassBorder: string;
    glassBorderTop: string;
    glassBgHover: string;
    glassBorderHover: string;
    glassBgActive: string;

    inputBg: string;
    inputBorder: string;
    inputBgFocus: string;

    textShadow: string;
    boxShadow: string;
    isDark: boolean;
  }
}
