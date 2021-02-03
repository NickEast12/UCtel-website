import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    padding-top: 7.5rem;

    &__content {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      h3 {
        color: var(--orange);
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
      h1 {
        color: var(--white);
        font-size: 2.2rem;
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        font-size: 1.1rem;
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
          padding: 0.85rem 1rem;
          text-align: left;
          color: #ffffff;
        }
        div {
          border-radius: 0 3px 3px 0;
          right: 0;
          width: 25%;
          height: 100%;
          background-color: var(--orange);
          padding: 0.85rem;
          position: absolute;

          svg {
            fill: #ffffff;

            width: 12px;
            height: 12px;
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
        margin: 0 auto 0 0;
        h1 {
          font-size: 3rem;
        }
      }
    }
    @media only screen and (min-width: 768px) {
      padding-top: 12rem;
      &__content {
        width: 80%;
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
        .btn {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          button {
            margin: 1rem auto;
          }
        }
      }
    }
  }
  .darkTheme {
    .landing__wrapper__content {
      h1,
      p {
        color: var(--darkBlue);
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
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="btn">
            <button type="button">
              <span>Find out more</span>
              <div>
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
      {isDesktop ? (
        <AnimateHeaderBackground points="15" distance="20" spacing="20" />
      ) : (
        <AnimateHeaderBackground />
      )}
    </LandingPageStyles>
  );
};

export default AltLandingPage;
