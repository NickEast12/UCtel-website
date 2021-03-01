import { createGlobalStyle } from 'styled-components';
//* Gellix Font Import
import GelllixRegular2 from '../assets/fonts/Gellix-Regular.woff2';
import GelllixRegular from '../assets/fonts/Gellix-Regular.woff';
import GelllixMedium2 from '../assets/fonts/Gellix-Medium.woff2';
import GelllixMedium from '../assets/fonts/Gellix-Medium.woff';
import GelllixLight2 from '../assets/fonts/Gellix-Light.woff2';
import GelllixLight from '../assets/fonts/Gellix-Light.woff';
import GelllixBold2 from '../assets/fonts/Gellix-Bold.woff2';
import GelllixBold from '../assets/fonts/Gellix-Bold.woff';
import GelllixSemiBold2 from '../assets/fonts/Gellix-SemiBold.woff2';
import GelllixSemiBold from '../assets/fonts/Gellix-SemiBold.woff';

const Typography = createGlobalStyle`
      @font-face {
        font-family: Gellix-Regular;
        src: url(${GelllixRegular2}) format('woff2'), 
          url(${GelllixRegular}) format('woff')
      }
      @font-face {
        font-family: Gellix-Medium;
        src: url(${GelllixMedium2}) format('woff2'), 
          url(${GelllixMedium}) format('woff')
      }
      @font-face {
        font-family: Gellix-Light;
        src: url(${GelllixLight2}) format('woff2'), 
          url(${GelllixLight}) format('woff')
      }
      @font-face {
        font-family: Gellix-Bold;
        src: url(${GelllixBold2}) format('woff2'), 
          url(${GelllixBold}) format('woff')
      }
      @font-face {
        font-family: Gellix-SemiBold;
        src: url(${GelllixSemiBold2}) format('woff2'), 
          url(${GelllixSemiBold}) format('woff')
      }
     

    html {
      font-size: 16px;

    }
   
    @media only screen and (min-width: 375px) {
      html {
        font-size: 16.5px;
      }
    }
    @media only screen and (min-width: 1280px) {
      html {
        font-size: 18px;
      }
    }
    body {
      line-height: 1.2;
    }
    h1,h2,h3,h4,h5,h6{
      font-family: Gellix-Medium, -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;
      margin: 0;
      letter-spacing: -0.05em;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
      text-rendering: optimizeLegibility; 
      font-smoothing: antialiased;
      color: var(--slate);
      
    @media only screen and (min-width: 450px) {
      letter-spacing: -.25px;

    }
    }
    h3 {
      font-size: 1.85rem;
      margin: 0.5rem 0;
    }
    p {
      font-size: 0.95rem;
      color: var(--slate);
      line-height: 1.5em;
    }
    span,button {
      font-family: Gellix-Medium, -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;;
    }
    p , a, li, input, address, label, textarea {
      font-family: Gellix-Regular, -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
`;

export default Typography;
