import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #3C9337;
    --primary-light: #4dae48;
    --primary-gray: #2F333F;
    --background: #F0F6FF;
    --red: #c74641;
    --black: #111322;
    --white: #FFFFFF;
    --gray1: #3E3E43;
    --gray2: #9FA6B2;
    --gray3: #b7bbc3;
    --eye-toggler: #4B5563;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background-color: var(--background);
    word-break: keep-all;
    font-family: 'Pretendard', sans-serif;
    font-size: 1.6rem;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    outline-color: var(--primary);
  }

  button {
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
