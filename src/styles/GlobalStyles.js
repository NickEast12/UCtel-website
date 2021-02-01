import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --orange: #F39118;
        --lightBlue : #278A9C;
        --slate: #2D3C41;
        --darkBlue: #1A2536;
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
    }
    a[aria-current="page"] {
        color: var(--favColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
    button {
        margin-top: 1rem;
        width: 170px;
        border: none;
        display: grid;
        border-radius: 3px;
        position: relative;
        background-color: var(--lightBlue);
        span {
          padding: 0.65rem 1rem;
          text-align: left;
          color: #ffffff;
        }
        div {
          border-radius: 0 3px 3px 0;
          right: 0;
          width: 25%;
          height: 100%;
          background-color: #386682;
          padding: 0.65rem;
          position: absolute;

          svg {
            fill: #ffffff;

            width: 12px;
            height: 12px;
            transform: rotate(180deg);
          }
        }
      }
`;

export default GlobalStyles;
