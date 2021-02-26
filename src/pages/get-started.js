import { Link, navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import AnimateHeaderBackground from '../components/functional/NetAnimatedBackground';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography.js';
import Image from '../components/functional/Image';
import CiscoLogo from '../svgs/cisco-2.svg';

const GetStartedStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  .back {
    position: absolute;
    z-index: 10;
    width: 40px;
    height: 40px;
    top: 0;
    right: 15px;
    padding-top: 0.25rem;
    padding-left: 0.5rem;
    background-color: var(--white);
    border: none;
    div {
      width: 20px;
      height: 3px;
      background-color: var(--lightBlue);
      margin-bottom: 5px;
      border: none;
      &:nth-child(1) {
        transform: rotate(-45deg);
        transform-origin: 15px;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
        transform-origin: 16px;
      }
    }
  }
  .started__wrapper {
    position: relative;
    z-index: 5;
    color: var(--white);
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0;
    &__content {
      .gatsby-image-wrapper {
        width: 150px;
      }
      h1 {
        padding: 0.85rem 0;
        font-size: 1.85rem;
        color: var(--white);
      }
      &__clients {
        margin: 0.85rem 0;
        svg {
          margin-right: 1rem;
          display: inline-block;
          width: 90px;
          height: 50px;
        }
      }
      p {
        color: var(--white);
      }
      .name {
        margin: 1rem 0 0.25rem 0;
        color: var(--orange);
      }
      .business {
        color: var(--white);
      }
      .name,
      .business {
        font-size: 1.1rem;
      }
    }
    &__form {
      margin: 2rem 0;
      background-color: var(--white);
      border-radius: 4.5px;
      padding: 1rem 0;
      &__inner {
        width: 90%;
        margin: 0 auto;
        h3 {
          color: var(--lightBlue);
          font-size: 1.4rem;
          font-family: Gellix-SemiBold;
        }
        form {
          margin-top: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    .back {
      right: 4rem;
    }
    .started__wrapper {
      width: 80%;
      display: grid;
      grid-template-columns: 40% 1fr;
      grid-gap: 2rem;
      &__content {
        padding-top: 5rem;
      }
      &__form {
        padding: 2rem 1rem;
      }
    }
  }
`;

const GetStarted = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  const updateScreenSize = () => {
    setDesktop(window.innerWidth > 1280);
  };
  useEffect(() => {
    console.log('screen change');
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  });
  return (
    <GetStartedStyles>
      <GlobalStyles />
      <Typography />
      <main>
        <div className="started__wrapper">
          <div className="started__wrapper__content">
            <Image filename="UCtel-logo.png" alt="UCtel Logo" />
            <h1>A snappy call to action for the get started page.</h1>
            <div className="started__wrapper__content__clients">
              <CiscoLogo />
              <CiscoLogo />
            </div>
            <p>
              “Seamless transformation for the end-user was paramount to
              Wolseley. UCtel understood our business and their delivery of our
              600 sites was excellent.”
            </p>
            <h5 className="name">Nathan Wright</h5>
            <h5 className="business">Wolseley Project Manager</h5>
          </div>
          <div className="started__wrapper__form">
            <div className="started__wrapper__form__inner">
              <h3>Get started with UCtel</h3>
              <p>Find out how much value you could add to your business....</p>
              <form action="">
                <input type="text" name="" id="" />
              </form>
            </div>
          </div>
        </div>
        <button type="button" className="back">
          <Link to="/">
            <div />
            <div />
          </Link>
        </button>
      </main>
      {isDesktop ? (
        <AnimateHeaderBackground points="10" distance="20" spacing="15" />
      ) : (
        <AnimateHeaderBackground />
      )}
    </GetStartedStyles>
  );
};

export default GetStarted;
