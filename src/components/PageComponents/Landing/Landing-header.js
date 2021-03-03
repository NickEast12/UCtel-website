import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import { Link } from 'gatsby';
import AnimateHeaderBackground from '../../functional/NetAnimatedBackground';
import LandingNokia from '../../../assets/images/nokia.png';
import UCtelLogo from '../../../assets/images/UCtel-logo.png';
import ArrowIcon from '../../../svgs/right-arrow.svg';

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .landing__wrapper {
    z-index: 2;
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 4.5rem;
    max-width: 1100px;
    .logo {
      width: 175px;
    }
    &--img {
      width: 100%;
      margin-top: 1.5rem;
      display: none;
      img {
        width: 100%;
        height: 10rem;
      }
    }
    &__content {
      width: 100%;
      margin: 0 auto;
      color: var(--white);
      text-align: center;
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
        font-size: 1.4rem;
        font-family: Gellix-Regular;
        margin: 1em 0 0.5rem 0;
      }
      p {
        color: var(--white);
        padding: 0.5rem 0;
        width: 100%;
        font-size: 0.95rem;
        margin: 0 auto;
      }
      .nokia--btn {
        width: 100%;
        display: grid;
        margin-top: 0.85rem;
        grid-gap: 1rem;
        button {
          width: 100%;
          span {
            font-size: 0.95rem;
          }
        }
      }
      .fom {
        svg {
          fill: var(--white);
        }
        span {
          border-bottom: solid 1px var(--white);
        }
      }
    }
    @media only screen and (min-width: 375px) {
      padding-top: 8.5rem;
    }
  }
  @media only screen and (min-width: 414px) {
    .landing__wrapper {
      width: 85%;
      .logo {
        width: 225px;
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    .landing__wrapper {
      padding-top: 12.5rem;
      width: 75%;
      margin: 0 auto;
      &__content {
        width: 100%;
        margin: 0 auto;
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
          grid-template-columns: 1fr;
          grid-gap: 1rem;
          width: 400px;
        }
      }
      &--img {
        width: 100%;
        margin-top: 1.5rem;
        display: block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    height: 45rem;
    .landing__wrapper {
      padding-top: 10.5rem;
      width: 55%;
      margin: 0 auto;
      max-width: 800px;

      &__content {
        .logo {
          width: 285px;
        }
        h1 {
          margin: 1.25rem 0;
        }
      }
      &--img {
        padding: 3rem 0;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    height: 50rem;
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
          <h1>Nokia Digital Automation Cloud</h1>
          <h2>Accelerate your digital transformation.</h2>
          <p>
            To enable faster communication, better collaboration and improved
            operations in your organisation.
          </p>
          <div className="nokia--btn">
            <Link to="/get-started">
              <button className="btn btn--main" type="button">
                <span>Contact us</span>
              </button>
            </Link>
          </div>
          <a
            href="/static/UCTel_Private 5G whitepaper_Feb 21 v4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <div className="fom">
              <ArrowIcon />
              <span>Download our whitepaper</span>
            </div>
          </a>
        </div>

        {/* <div className="landing__wrapper--img">
          <img
            src={LandingNokia}
            alt="Nokia Digital Automation Cloud and UCtel"
          />
        </div> */}
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
