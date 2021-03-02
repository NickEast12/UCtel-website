import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import AnimateHeaderBackground from '../../functional/NetAnimatedBackground';
import LandingNokia from '../../../assets/images/nokia.png';
import UCtelLogo from '../../../assets/images/UCtel-logo.png';

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .landing__wrapper {
    z-index: 2;
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 2.5rem;
    max-width: 1100px;
    .logo {
      width: 150px;
    }
    &--img {
      width: 100%;
      margin-top: 1.5rem;
      img {
        width: 100%;
        height: 10rem;
      }
    }
    &__content {
      width: 100%;
      margin: 0 auto;
      color: var(--white);
      text-align: left;
      h1 {
        color: var(--white);
        margin: 0.5rem 0;
        font-size: 2.1rem;
        .title {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
      }
      h2 {
        color: var(--white);
        font-size: 1.2rem;
        font-family: Gellix-Regular;
        margin: 1em 0;
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        width: 100%;
        font-size: 0.85rem;
        margin: 0 auto;
      }
      .nokia--btn {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        button {
          width: 100%;
          span {
            font-size: 0.85rem;
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      padding-top: 8.5rem;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    .landing__wrapper {
      padding-top: 12.5rem;
      &__content {
        width: 100%;
        h1 {
          letter-spacing: -0.01px;
          font-size: 2.5rem;
        }
        p {
          font-size: 1.1rem;
          padding: 1rem 0;
        }
        .btn__wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          width: 400px;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    height: 49rem;
  }
`;
const LandingPage = ({ darkTheme, title, description }) => {
  const [isDesktop, setDesktop, setPoints] = useState(window.innerWidth > 1200);
  const updateScreenSize = () => {
    setDesktop(window.innerWidth > 1280);
  };
  useEffect(() => {
    console.log('screen change');
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  });
  return (
    <LandingPageStyles>
      <div className={`landing__wrapper ${darkTheme ? 'darkTheme' : ''}`}>
        <div className="landing__wrapper__content">
          {/* <Fade duration={1000} delay={500}> */}
          <img className="logo" src={UCtelLogo} alt="UCtel Logo" />
          <h1>Nokia Digital Automation Cloud and UCtel</h1>
          <p>
            Accelerate your digital transformation with Nokia Digital Automation
            Cloud – a high-performance, end-to-end, secure and simple private
            wireless network platform.
          </p>
          <div className="nokia--btn">
            <Link to="/get-started">
              <button className="btn btn--main" type="button">
                <span>Get started</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="landing__wrapper--img">
          <img
            src={LandingNokia}
            alt="Nokia Digital Automation Cloud and UCtel"
          />
        </div>
      </div>
      {isDesktop ? (
        <AnimateHeaderBackground points="10" distance="20" spacing="15" />
      ) : (
        <AnimateHeaderBackground />
      )}
    </LandingPageStyles>
  );
};

export default LandingPage;
