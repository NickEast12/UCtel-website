import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --orange: #F39118;
        --lightBlue : #278A9C;
        --slate: #2D3C41;
        --darkBlue: #1A2536;
        --background: #0A2533;
        --white: #ffffff;
        --headingExtraLarge: 5.653rem;
        --headingLarge:  3.998rem;
        --headingMedium: 2.827rem;
        --headingSmall: 1.999rem;
        --headingTiny: 1.414rem;
        --text: 0.75rem;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
   
    body {
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: 0;
    }
    .navbar {
        background-color:;
        transition: all 0.3s ease;
    }
    .active {
        
        .Nav__MobileNavStyles-hUpkON  {
            background-color: white!important;
            transition: all 0.3s ease;
            box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
            .m-nav {
                padding: 1rem 0;
                transition: all 0.3s ease;
            }
            .Nav__Hamburger-jwuWDN  {
                transition: all 0.3s ease;
                div {
                    background-color: var(--slate);
                }
            }
        }
    }
    .btn {
        width: 100%;
        margin: 0.5rem auto;
        padding: 0.85rem 0.85rem 0.95rem 0.85rem;
        border-radius: 50px;
        border: none;
        span {
            text-align: center ;
            font-size: var(--text);
            
        }
    }
    .btn--main {
        background-color: var(--lightBlue);
        span {
            color: #fafafa;
          }
    }
    .btn--alt {
        background-color: transparent;
        border: solid 2px var(--lightBlue);
        span {
            color: var(--lightBlue);
          }
    }
    a[aria-current="page"] {
        color: var(--orange);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
   
`;

export default GlobalStyles;
