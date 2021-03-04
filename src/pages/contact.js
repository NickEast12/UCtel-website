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
