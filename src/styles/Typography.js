import { createGlobalStyle } from 'styled-components';
import VisueltProRegular from '../assets/fonts/VisueltPro-Regular.ttf';
import VisueltProLight from '../assets/fonts/VisueltPro-Light.ttf';
import VisueltProMedium from '../assets/fonts/VisueltPro-Medium.ttf';
import VisueltProBold from '../assets/fonts/VisueltPro-Bold.ttf';
//* Gellix
import GelllixRegular2 from '../assets/fonts/Gellix-Regular.woff2';
import GelllixRegular from '../assets/fonts/Gellix-Regular.woff';
import GelllixMedium2 from '../assets/fonts/Gellix-Medium.woff2';
import GelllixMedium from '../assets/fonts/Gellix-Medium.woff';
import GelllixLight2 from '../assets/fonts/Gellix-Light.woff2';
import GelllixLight from '../assets/fonts/Gellix-Light.woff';
import GelllixBold2 from '../assets/fonts/Gellix-Bold.woff2';
import GelllixBold from '../assets/fonts/Gellix-Bold.woff';

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
        font-family: VisueltProRegular;
        src: url(${VisueltProRegular});
       }
      @font-face {
        font-family: VisueltProLight;
        src: url(${VisueltProLight});
       }
      @font-face {
        font-family: VisueltProMedium;
        src: url(${VisueltProMedium});
       }
      @font-face {
        font-family: VisueltProBold;
        src: url(${VisueltProBold});
       }


    h1,h2,h3,h4,h5,h6, button {
      font-family: Gellix-Medium, -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;
;
      margin: 0;
      letter-spacing: -.25px;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
    button, span, div {

      font-family: Gellix-Regular;
    }
    p , a, li {
      font-family: Gellix-Light;
      font-feature-settings: "kern" 1;
      font-kerning: normal;
    }
`;

export default Typography;
