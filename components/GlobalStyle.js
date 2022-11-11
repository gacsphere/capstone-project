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

/* inconsolata-300 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/inconsolata-v31-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-300.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-regular - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inconsolata-v31-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-regular.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-500 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/inconsolata-v31-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-500.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-600 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/inconsolata-v31-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-600.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-700 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/inconsolata-v31-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-700.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-800 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/inconsolata-v31-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-800.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
/* inconsolata-900 - latin */
@font-face {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/inconsolata-v31-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inconsolata-v31-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inconsolata-v31-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inconsolata-v31-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inconsolata-v31-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inconsolata-v31-latin-900.svg#Inconsolata') format('svg'); /* Legacy iOS */
}
  
      *,
      *::before,
      *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }
  
      body {
          font-family: 'Inconsolata', sans-serif;
          background-color: var(--secondary-gray);
          color: var(--primary-black);
      }
  `;

export default GlobalStyle;
