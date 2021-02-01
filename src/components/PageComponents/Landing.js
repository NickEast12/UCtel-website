import React from 'react';
import styled from 'styled-components';
import ParticlesBackground from '../functional/ParticlesBackground';
import ArrowIcon from '../../svgs/arrow.svg';

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

      h1 {
        color: var(--white);
        font-size: 2.7rem;
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--white);
        padding-top: 0.5rem;
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
        h1 {
          font-size: 4.15rem;
          width: 90%;
        }
        p {
          width: 60%;
          font-size: 1.25rem;
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
const LandingPage = ({
  background,
  colour,
  lines,
  darkTheme,
  distance,
  value,
}) => {
  const i = 'stay';
  return (
    <LandingPageStyles>
      <div className={`landing__wrapper ${darkTheme ? 'darkTheme' : ''}`}>
        <div className="landing__wrapper__content">
          <h1>What this website does and why they should care?</h1>
          <p>
            Introduction into UCtel, briefly summarise what we do, how we do it
            and how this will benefit your business.
          </p>
          <button type="button">
            <span>Find out more</span>
            <div>
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
      <ParticlesBackground
        background={background}
        colour={colour}
        lines={lines}
        distance={distance}
        value={value}
      />
    </LandingPageStyles>
  );
};

export default LandingPage;
