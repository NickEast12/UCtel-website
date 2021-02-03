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
    padding-top: 8rem;

    &__content {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      color: var(--white);
      h1 {
        color: var(--white);
        font-size: 2rem;
        margin-bottom: 0.5rem;
        .title {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
        .accent {
          color: var(--lightBlue);
          font-size: 60px;
          position: absolute;
          bottom: 0;
        }
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        font-size: 1rem;
        width: 90%;
        margin: 0 auto;
      }
      .btn {
        margin-top: 1.5rem;
        .main-button {
          width: 100%;
          margin: 0.5rem auto;
          background-color: var(--lightBlue);
          padding: 0.85rem 0.85rem 0.95rem 0.85rem;
          border-radius: 50px;
          border: none;
          span {
            color: #fafafa;
            font-size: 1.1rem;
          }
        }
        .alt-button {
          width: 100%;
          margin: 0.5rem auto;
          padding: 0.85rem 0.85rem 0.95rem 0.85rem;
          border-radius: 50px;
          background-color: transparent;
          border: solid 2px var(--lightBlue);
          span {
            color: var(--lightBlue);
          }
        }

        div {
          margin: 1rem auto;
          width: 135px;
          position: relative;
          p {
            width: 100%;
            height: auto;
          }
          svg {
            fill: var(--lightBlue);
            width: 15px;
            position: absolute;
            right: -10px;
            top: 12px;
            align-self: center;
            margin-left: 5px;
            transform: rotate(180deg);
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      padding-top: 9rem;
      &__content {
        h1 {
          font-size: 2.2rem;
        }
      }
    }
    @media only screen and (min-width: 414px) {
      padding-top: 10rem;
      &__content {
        width: 100%;
        margin: 0 auto;
        h1 {
          font-size: 2.5rem;
        }
        p {
          margin: 1rem auto;
          font-size: 1.1rem;
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
        .btn {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        }
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
            <span className="title">
              Mobile boosting<span className="accent">.</span>
            </span>
            <span className="title">
              Private 5G<span className="accent">.</span>
            </span>
            <span className="title">
              Unified Communication<span className="accent">.</span>
            </span>
          </h1>
          <p>{description}</p>
          <div className="btn">
            <button type="button" className="main-button">
              <span>Get started</span>
            </button>
            <button type="button" className="alt-button">
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

export default AltLandingPage;
