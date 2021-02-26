import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Map from '../components/functional/Map';
import Layout from '../components/Layout';
import WhiteLandingPage from '../components/PageComponents/WhiteHeader';
import MissionIcon from '../svgs/mission.svg';
import ArrowIcon from '../svgs/right-arrow.svg';
import TwitterIcon from '../svgs/twitter.svg';
import InstagramIcon from '../svgs/instagram.svg';
import LinkedInIcon from '../svgs/linkedin.svg';

const Contact = ({ pageContext }) => {
  const i = true;
  return (
    <Layout alt pageContext={pageContext}>
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
        <div className="contact--box">
          <MissionIcon className="icon" />
          <h2>Email us</h2>
          <p>On sales@uctel.co.uk</p>
        </div>
      </a>
      <div className="contact--box">
        <MissionIcon className="icon" />
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
      </div>
      <a href="tel:0333 344 4417" rel="noopener noreferrer">
        <div className="contact--box">
          <MissionIcon className="icon" />
          <h2>Call us</h2>
          <p>On 0333 344 4417</p>
        </div>
      </a>
    </div>
  </ContactBoxesStyles>
);

const MapWrapperStyles = styled.div`
  width: 100%;
  padding: 2rem 0 0 0;
  max-width: 1100px;
  margin: 0 auto;
  .contact {
    text-align: center;
    &__map {
    }
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
  }
  @media only screen and (min-width: 768px) {
    .contact {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;

      &__content {
        text-align: left;
        width: 60%;
        padding-top: 5rem;
        max-width: 400px;
      }
    }
  }
  @media only screen and (min-width: 1100px) {
    .contact {
      padding-bottom: 5rem;
    }
  }
`;
const MapWrapper = () => {
  console.log('map is active');
  return (
    <MapWrapperStyles>
      <div className="contact">
        <div className="contact__content">
          <h6 className="subtitle">Our Office</h6>
          <h3>UCtel HQ</h3>
          <address>
            <a
              href="http://maps.google.com/?q=UCtel Ltd, Leatherhead"
              target="__blank"
            >
              75 Cannon Grove, <br /> Fetcham, <br /> Leatherhead, <br />{' '}
              Surrey, <br /> KT22 9LP
            </a>
          </address>
        </div>
        <div className="contact__map">
          <Map />
        </div>
      </div>
    </MapWrapperStyles>
  );
};
