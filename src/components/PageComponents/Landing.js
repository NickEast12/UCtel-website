import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
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
    padding-top: 8rem;

    &__content {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      color: var(--white);
      h1 {
        color: var(--white);
        margin-bottom: 0.5rem;
        .title {
          position: relative;
          display: block;
          margin-bottom: 5px;
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
          <h1>
            <span className="title">Mobile boosting</span>
            <span className="title">Private 5G</span>
            <span className="title">Unified Communication</span>
          </h1>
          <p>{description}</p>
          <div className="btn__wrapper">
            <button type="button" className="btn btn--main">
              <span>Get started</span>
            </button>
            <button type="button" className="btn btn--alt">
              <span>Talk to an expert</span>
            </button>
          </div>
        </div>
      </div>
      {isDesktop ? (
        <AnimateHeaderBackground points="20" distance="20" spacing="20" />
      ) : (
        <AnimateHeaderBackground />
      )}
    </LandingPageStyles>
  );
};

export default LandingPage;
