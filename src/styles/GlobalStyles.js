import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --orange: #F39118;
        --lightBlue : #278A9C;
        --slate: #2D3C41;
        --darkBlue: #1A2536;
        --background: #0A2533;
        --white: #ffffff;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    body {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
    }
    a[aria-current="page"] {
        color: var(--favColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
   
`;

export default GlobalStyles;
