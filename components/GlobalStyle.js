import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
        --primary-black: rgba(42, 42, 42, 1);
        --primary-black-opac: rgba(42, 42, 42, 0.75);
        --primary-white: rgba(255, 255, 255, 1);     
        --primary-gray: rgba(119, 119, 119, 1);
        --secondary-gray: rgba(237, 240, 245, 1);
        --secondary-gray-opac: rgba(237, 240, 245, 0.5);
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
