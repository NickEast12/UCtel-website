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
    right: 0px;
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
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    max-width: 1100px;
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
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
      padding: 0.5rem 0;
      &__inner {
        width: 90%;
        margin: 0 auto;
        h3 {
          color: var(--lightBlue);
          font-size: 1.4rem;
          font-family: Gellix-SemiBold;
        }
        form {
          margin-top: 1rem;
          p {
            color: var(--slate);
            margin: 10px 0 5px 0;
            display: block;
            font-size: 0.95rem;
            span {
              color: red;
              padding-left: 3px;
              font-size: 0.95rem;
            }
          }
          @media only screen and (min-width: 768px) {
            .form--section {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 1rem;
            }
          }
          input {
            width: 100%;
            border-radius: 5px;
            padding: 0.5rem;
            background-color: none;
            font-size: 1.1;
            border: solid 1px rgba(0, 0, 0, 0.25);
          }
          input[type='file'] {
            border: none;
          }
          textarea {
            width: 100%;
            border-radius: 5px;
            padding: 0.5rem;
            height: 10rem;
            font-size: 1.1rem;
            resize: vertical;
            background-color: none;
            border: solid 1px rgba(0, 0, 0, 0.25);
            @media only screen and (min-width: 768px) {
              height: 5rem;
              resize: none;
              margin-bottom: 1rem;
            }
          }
          .btn--wrapper {
            margin: 1rem 0;
            width: 100%;
            @media only screen and (min-width: 768px) {
              margin: 0.15rem 0;
            }
            button {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    .back {
    }
    .started__wrapper {
      width: 80%;
      display: grid;
      grid-template-columns: 40% 1fr;
      grid-gap: 2rem;
      padding-bottom: 0;
      &__content {
        padding-top: 3rem;
        .gatsby-image-wrapper {
          width: 250px;
        }
      }
      &__form {
        padding: 1rem 1rem;

        &__inner {
        }
        .btn--wrapper {
          button {
            margin: 0;
          }
        }
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
            <h1>
              Contact the team to discover how UCtel can improve your digital
              connectivity and communications.
            </h1>
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
              <form
                className="contact__wrapper__inner__form"
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form--section">
                  <div>
                    <p htmlFor="firstName">
                      First name<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                    />
                  </div>
                  <div>
                    <p htmlFor="lastName">Last name</p>
                    <input type="text" name="lastName" id="lastName" />
                  </div>
                </div>
                <p htmlFor="email">
                  Email<span>*</span>
                </p>
                <input type="email" name="email" id="email" required />
                <p htmlFor="telephone">
                  Mobile number<span>*</span>
                </p>
                <input type="tel" name="telephone" id="telephone" required />
                <div className="form--section">
                  <div>
                    <p htmlFor="Companyname">
                      Company name<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="Companyname"
                      id="Companyname"
                      required
                    />
                  </div>
                  <div>
                    <p htmlFor="jobTitle">Job title</p>
                    <input type="text" name="jobTitle" id="jobTitle" />
                  </div>
                </div>
                <p>Upload floor plans (PDF)</p>
                <input
                  type="file"
                  id="floorPlans"
                  name="floorPlans"
                  accept="application/pdf"
                />
                <p htmlFor="message">
                  Messages <span>*</span>
                </p>
                <textarea
                  placeholder="Message"
                  name="message"
                  id="message"
                  required
                />

                <button type="submit" className="btn btn--main">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
          <button type="button" className="back">
            <Link to="/">
              <div />
              <div />
            </Link>
          </button>
        </div>
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
