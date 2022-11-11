import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
        --primary-black: rgba(30, 40, 50, 1);
        --primary-black-opac: rgba(30, 40, 50, 0.75);
        --primary-white: rgba(251, 253, 255, 1);     
        --primary-gray: rgba(60, 70, 80, 1);
        --secondary-gray: rgba(230, 240, 250, 1);
        --secondary-gray-opac: rgba(230, 240, 250, 0.5);
        --alert: rgba(255, 0, 100, 1);
      }

@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
  
      *,
      *::before,
      *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--secondary-gray);
          color: var(--primary-black);
      }
  `;

export default GlobalStyle;
