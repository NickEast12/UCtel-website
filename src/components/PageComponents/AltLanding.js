import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import ArrowIcon from '../../svgs/arrow.svg';
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
    padding-top: 7rem;

    &__content {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      color: var(--white);
      h3 {
        color: var(--orange);
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
      h1 {
        color: var(--white);
        font-size: 2.3rem;
        margin-bottom: 0.5rem;
        span {
        }
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        font-size: 1.1rem;
      }
      .btn {
        margin-top: 1.5rem;
        button {
          width: 100%;
          margin-bottom: 1rem;
          display: block;
          background-color: var(--lightBlue);
          padding: 0.75rem 0;
          border-radius: 5px;
          border: none;
          span {
            color: #fafafa;
            font-size: 1.1rem;
          }
        }
        div {
          width: 135px;
          display: flex;
          margin-top: 1.5rem;
          font-size: 1.1rem;
          align-items: center;
          justify-content: space-between;
          color: var(--white);
          svg {
            fill: var(--lightBlue);
            width: 17px;
            margin-left: 5px;
            transform: rotate(180deg);
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      padding-top: 9rem;
    }
    @media only screen and (min-width: 414px) {
      padding-top: 10rem;
      &__content {
        width: 90%;
        margin: 0 auto;
        h1 {
          font-size: 3rem;
        }
        p {
          margin: 1rem 0;
        }
        .btn {
          width: 300px;
          margin: 2rem 0;
          div {
          }
        }
      }
    }
    @media only screen and (min-width: 768px) {
      padding-top: 12rem;
      &__content {
        width: 100%;
      }
    }
    @media only screen and (min-width: 1024px) {
      &__content {
        margin: 2rem auto 0 auto;
        h1 {
          font-size: 4rem;
          width: 100%;
        }
        p {
          width: 100%;
          font-size: 1.25rem;
        }
      }
    }
  }
`;
const AltLandingPage = ({ darkTheme, title, description }) => {
  const [isDesktop, setDesktop, setPoints] = useState(window.innerWidth > 1280);
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
            Mobile boosting. <br /> Private 5G. <br /> Unified Communication.
          </h1>
          <p>{description}</p>
          <div className="btn">
            <button type="button">
              <span>Get started</span>
            </button>
            <div>
              Find out more <ArrowIcon />
            </div>
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

export default AltLandingPage;
