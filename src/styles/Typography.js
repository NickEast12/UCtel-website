import { createGlobalStyle } from 'styled-components';
import VisueltProRegular from '../assets/fonts/VisueltPro-Regular.ttf';
import VisueltProLight from '../assets/fonts/VisueltPro-Light.ttf';
import VisueltProMedium from '../assets/fonts/VisueltPro-Medium.ttf';
import VisueltProBold from '../assets/fonts/VisueltPro-Bold.ttf';

const Typography = createGlobalStyle`
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


    h1,h2,h3,h4,h5,h6 {
      font-family: VisueltProMedium;
      margin: 0;
      letter-spacing: -1px;
    }
    p, button, a, span, li {
      font-family: VisueltProLight;
    }
`;

export default Typography;
