import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import AnimateHeaderBackground from '../functional/NetAnimatedBackground';

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .landing__wrapper {
    z-index: 2;
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 6rem;

    &__content {
      width: 100%;
      margin: 0 auto;
      color: var(--white);
      text-align: center;
      h1 {
        color: var(--white);
        margin-bottom: 0.5rem;
        font-size: 2rem;
        .title {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
        a {
          font-family: inherit;
        }
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        width: 90%;
        margin: 0 auto;
      }
      .btn__wrapper {
        width: 80%;
        margin: 1.5rem auto 0 auto;
        button span {
          font-size: 1rem;
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
          <Fade duration={1000} delay={500}>
            <h1>
              <span className="title">
                <Link to="/solutions/in-building-mobile-signal-solutions">
                  In-building mobile signal solutions.
                </Link>
              </span>
              <span className="title">
                <Link to="/solutions/private-5g">Private 5G networks.</Link>
              </span>
              <span className="title">
                <Link to="/solutions/unified-communications-and-contact-centre">
                  Unified Communications and Contact Centre.
                </Link>
              </span>
            </h1>
          </Fade>
          <Fade duration={1000} delay={850}>
            <p>{description}</p>
          </Fade>
          <Fade bottom delay={1000}>
            <div className="btn__wrapper">
              <Link to="/get-started">
                <button type="button" className="btn btn--main">
                  <span>Get started</span>
                </button>
              </Link>
              <Link to="/contact">
                <button type="button" className="btn btn--alt">
                  <span>Talk to an expert</span>
                </button>
              </Link>
            </div>
          </Fade>
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
