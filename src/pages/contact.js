import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Map from '../components/functional/Map';
import Layout from '../components/Layout';
import WhiteLandingPage from '../components/PageComponents/WhiteHeader';
import MissionIcon from '../svgs/mission.svg';
import TwitterIcon from '../svgs/twitter.svg';
import LinkedInIcon from '../svgs/linkedin.svg';
import MailIcon from '../svgs/mail.svg';
import SocialIcon from '../svgs/social-network.svg';
import TelephoneIcon from '../svgs/telephone.svg';
import SEO from '../components/functional/SEO';

const Contact = ({ pageContext }) => {
  const i = true;
  return (
    <Layout pageContext={pageContext}>
      <SEO />
      <WhiteLandingPage
        title="Contact"
        description="Get in touch to find out more"
      />

      <main>
        <ContactBoxes />
        <MapWrapper />
      </main>
    </Layout>
  );
};

export default Contact;

const ContactBoxesStyles = styled.div`
  width: 100%;
  .contact {
    width: 90%;
    margin: 0 auto;
    &--box {
      padding: 2rem 0;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      > a {
        padding: 2rem 0;
      }
      svg {
      }
      .icon {
        width: 50px;
        fill: var(--lightBlue);
      }
      h2 {
        font-size: 1.5rem;
        margin: 0.5rem 0 1rem 0;
      }
      p {
        margin-top: 0.5rem;
      }
      &--icons {
        padding-top: 0.5rem;
        width: 75px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        svg {
          width: 25px;
          height: 25px;
          fill: var(--lightBlue);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .contact {
      display: grid;
      max-width: 1100px;
      padding-top: 3rem;
      grid-template-columns: repeat(3, 1fr);
      &--box {
        &--icons {
          padding-top: 0;
          svg {
            width: 22.5px;
          }
        }
      }
    }
  }
`;
const ContactBoxes = () => (
  <ContactBoxesStyles>
    <div className="contact">
      <a href="mailto:sales@uctel.co.uk">
        <Fade delay={350}>
          <div className="contact--box">
            <MailIcon className="icon" />
            <h2>Email us</h2>
            <p>On sales@uctel.co.uk</p>
          </div>
        </Fade>
      </a>
      <div className="contact--box">
        <Fade delay={450}>
          <SocialIcon className="icon" />
          <h2>Follow us</h2>
          <div className="contact--box--icons">
            <a
              href="https://www.linkedin.com/company/uctel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://twitter.com/UCtel_Ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Fade>
      </div>
      <a href="tel:0333 344 4417" rel="noopener noreferrer">
        <Fade delay={550}>
          <div className="contact--box">
            <TelephoneIcon className="icon" />
            <h2>Call us</h2>
            <p>On 0333 344 4417</p>
          </div>
        </Fade>
      </a>
    </div>
  </ContactBoxesStyles>
);

const MapWrapperStyles = styled.div`
  width: 100%;
  padding: 2rem 0;
  max-width: 1100px;
  margin: 0 auto;
  .contact {
    text-align: center;

    &__content {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
      h3 {
        font-size: 2rem;
      }
      address {
        font-style: normal;
        margin-top: 1rem;
        color: var(--slate);
        line-height: 1.5;
      }
    }
    &__form {
      width: 80%;
      margin: 0 auto;
      &__wrapper {
        box-shadow: -1px 3rem 9rem rgb(10 10 10 / 10%);
        border-radius: 5px;
        padding: 1rem;
        form {
          i {
            font-style: normal;
            display: block;
            font-family: Gellix-Regular;
            width: 80%;
            margin: 0.5rem auto;
            text-align: center;
            a {
              color: var(--lightBlue);
            }
          }
          p {
            text-align: left;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 7.5px;
            span {
              color: red;
              padding-left: 3px;
            }
          }
          input {
            width: 90%;
            border-radius: 5px;
            padding: 0.5rem;
            background-color: none;
            font-size: 1.1;
            border: solid 1px rgba(0, 0, 0, 0.25);
            margin-bottom: 7.5px;
          }
          textarea {
            width: 90%;
            border-radius: 5px;
            padding: 0.5rem;
            background-color: none;
            font-size: 1.1;
            border: solid 1px rgba(0, 0, 0, 0.25);
            margin-bottom: 7.5px;
            height: 7.5rem;
            resize: vertical;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
    padding-bottom: 4rem;
    .contact {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 55%;
      grid-gap: 3rem;

      &__content {
        text-align: left;
        width: 100%;
        padding-top: 5rem;
      }
      &__form {
        width: 100%;
        &__wrapper {
          width: 100%;
          padding: 2rem 3rem;
          form {
            p,
            input,
            textarea {
              width: 100%;
            }
          }
          .form--section {
            display: flex;
            justify-content: space-between;
            div {
              width: 48%;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact {
      width: 80%;
      margin: 2rem auto 0 auto;
      padding-bottom: 2rem;
    }
  }
`;
const MapWrapper = () => {
  console.log('map is active');
  return (
    <MapWrapperStyles>
      <div className="contact">
        <div className="contact__content">
          <Fade delay={550}>
            <h6 className="subtitle">Talk to an expert</h6>
            <h3>Get in touch</h3>
            <p>
              Interested in how UCtel can help power you company's digital
              connectivity and communications? Leave us a message and a
              dedicated specialist will be in touch.
            </p>
          </Fade>
        </div>
        <div className="contact__form">
          <div className="contact__form__wrapper">
            <form
              name="getincontact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/successful-submission"
            >
              <input type="hidden" name="form-name" value="getincontact" />
              <div className="form--section">
                <div>
                  <p htmlFor="firstName">
                    First name<span>*</span>
                  </p>
                  <input type="text" name="firstName" id="firstName" required />
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
                  <p htmlFor="Company Name">
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
              <p htmlFor="message">
                Messages <span>*</span>
              </p>
              <textarea name="message" id="message" required />

              <button type="submit" className="btn btn--main">
                <span>Send inquiry</span>
              </button>
              <i>
                By contacting us your are agreeing to our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </i>
            </form>
          </div>
        </div>
      </div>
    </MapWrapperStyles>
  );
};
