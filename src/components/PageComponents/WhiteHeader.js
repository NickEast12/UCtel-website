import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import WhiteHeaderBackground from '../functional/WhiteAnimatedBackground';

const LandingPageStyles = styled.header`
  width: 100%;
  height: 60vh;
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
      color: var(--slate);
      h1 {
        color: var(--slate);
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
        .title {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
      }
      p {
        color: var(--slate);
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
      padding-top: 9rem;
      &__content {
        h1 {
        }
      }
    }
    @media only screen and (min-width: 414px) {
      padding-top: 10rem;
      &__content {
        width: 100%;
        margin: 0 auto;
        h1 {
        }
        p {
          margin: 1rem auto;
        }
        .btn {
          width: 350px;
          margin: 2rem auto;
          div {
          }
        }
      }
    }
    @media only screen and (min-width: 768px) {
      padding-top: 8rem;
      &__content {
        width: 100%;
      }
    }
    @media only screen and (min-width: 1024px) {
      &__content {
        margin: 2rem auto 0 auto;
        h1 {
          width: 100%;
        }
        p {
          width: 100%;
        }
      }
    }
  }
`;
const WhiteLandingPage = ({ darkTheme, title, description }) => {
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
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {isDesktop ? (
        <WhiteHeaderBackground points="20" distance="20" spacing="20" />
      ) : (
        <WhiteHeaderBackground />
      )}
    </LandingPageStyles>
  );
};

export default WhiteLandingPage;
