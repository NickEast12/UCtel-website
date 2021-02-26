import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UCtelLogo from '../assets/images/UCtel-logo.png';
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

const FourZeroFourStyles = styled.main`
  @font-face {
    font-family: Gellix-SemiBold;
    src: url(${GelllixSemiBold}) format('woff2'),
      url(${GelllixSemiBold2}) format('woff');
  }
  @font-face {
    font-family: Gellix-Medium;
    src: url(${GelllixMedium}) format('woff2'),
      url(${GelllixMedium2}) format('woff');
  }
  width: 100%;
  height: 100vh;
  background-color: #1a2536;
  margin: 0;
  padding: 0;
  position: relative;
  .wrapper {
    width: 85%;
    padding: 6rem 0;
    margin: 0 auto;
    section {
      margin: 0 auto;
      background-color: white;
      border-radius: 4.5px;
      padding: 2rem;
      text-align: center;
      h1 {
        font-family: Gellix-SemiBold, -apple-system, BlinkMacSystemFont,
          'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 3.5rem;
      }
      p,
      button {
        font-family: Gellix-Medium, -apple-system, BlinkMacSystemFont,
          'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      p {
        font-size: 1.1rem;
      }
      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .btn {
        width: 70%;
        margin: 1.5rem auto;
        button {
          width: 100%;
          background-color: #278a9c;
          border-radius: 50px;
          border: none;
          padding: 0.75rem;
          cursor: pointer;
          span {
            color: white;
          }
        }
      }
      @media only screen and (min-width: 414px) {
        width: 70%;
      }
      @media only screen and (min-width: 768px) {
        width: 40%;
        max-width: 300px;
      }
    }
  }
`;
const FourZeroFour = () => (
  <FourZeroFourStyles>
    <div className="wrapper">
      <section>
        <div className="img">
          <img src={UCtelLogo} alt="UCtel logo" />
        </div>
        <h1>404</h1>
        <p>That page you were looking for doesn't exist</p>
        <div className="btn">
          <Link to="/">
            <button type="button">
              <span>Go back</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  </FourZeroFourStyles>
);

export default FourZeroFour;
