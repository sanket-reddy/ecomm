import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
