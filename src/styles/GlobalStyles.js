import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --orange: #F39118;
        --lightBlue : #278A9C;
        --slate: #2D3C41;
        --darkBlue: #1A2536;
        --background: #0A2533;
        --white: #ffffff;
        --black: #000000;
        --ghostWhite: #F4F7FA;
        --headingExtraLarge: 5.653rem;
        --headingLarge:  3.998rem;
        --headingMedium: 2.827rem;
        --headingSmall: 1.999rem;
        --headingTiny: 1.414rem;
        --text: 0.75rem;
        --btnMaxWidth: 180px;
        --maxWidth: 1300px;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
   a, a:visited {
        color: inherit;
        text-decoration: none;
   }
    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
    }
    //* Overiding normalise css font-size: 100%;
    button {
        font-size: 0;
    }
    .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
    .navbar {
        transition: all 0.3s ease;
    }
    .active {
        transition: all 0.3s ease;
        #desktopNav {
            background-color: var(--white);
            box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
            .d-nav {
                padding: 1rem 0;
                &__links ul li {
                    color: var(--black);
                }
            }
        }
    }
    .active {
        nav {
            background-color: white!important;
            transition: all 0.3s ease;
            box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
            .m-nav {
                padding: 1rem 0;
                transition: all 0.3s ease;
            }
            #hamburger  {
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
        padding: 0.75rem ;
        border-radius: 50px;
        border: none;
        max-width: var(--btnMaxWidth);
        cursor: pointer;
        span {
            text-align: center ;
            font-size: 1rem;
            
        }
    }
    .alt-desktopNav {
        .d-nav__links {
            ul li {
                color: var(--black)!important;

            }
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
    .btn--slate {
        background-color: var(--slate);
        border: solid 2px var(--slate);
        span {
            color: var(--white);
          }
    }
    .fom {
        margin-top: 1rem;
        svg {
            width: 10px;
            margin-right: 5px;
        }
        span {
            font-size: .9rem;
            border-bottom: solid 1px #000;
        }
    }
    .subtitle {
        color: var(--lightBlue);
        text-transform: uppercase;
        font-size: 1rem;
    }
    .img-decoration {
        position: relative;
        z-index: 2;
        &::after {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 100%;
        height: 100%;
        background-color: var(--lightBlue);
        content: '';
        z-index: -1;
      }
    }
    .alt {
        #menuDiv {
            background-color: var(--slate);
        }
  }
    a[aria-current="page"] {
        color: var(--blue);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
     
     

   
`;

export default GlobalStyles;
