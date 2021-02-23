import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Map from '../components/functional/Map';
import Layout from '../components/Layout';
import WhiteLandingPage from '../components/PageComponents/WhiteHeader';
import MissionIcon from '../svgs/mission.svg';
import ArrowIcon from '../svgs/right-arrow.svg';

const Contact = ({ pageContext }) => {
  const i = true;
  return (
    <Layout alt pageContext={pageContext}>
      <WhiteLandingPage
        title="Contact"
        description="We'd love to hear from you, feel free to drop us a line."
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
      a {
        padding: 2rem 0;
      }
      .icon {
        width: 50px;
        fill: var(--lightBlue);
      }
      h2 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
  }
`;
const ContactBoxes = () => (
  <ContactBoxesStyles>
    <div className="contact">
      <Link to="/">
        <div className="contact--box">
          <MissionIcon className="icon" />
          <h2>Email us</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="fom">
            <ArrowIcon />
            <span>Send us an email</span>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="contact--box">
          <MissionIcon className="icon" />
          <h2>Read our blog</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="fom">
            <ArrowIcon />
            <span>Send us an email</span>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="contact--box">
          <MissionIcon className="icon" />
          <h2>Call us</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="fom">
            <ArrowIcon />
            <span>Send us an email</span>
          </div>
        </div>
      </Link>
    </div>
  </ContactBoxesStyles>
);

const MapWrapperStyles = styled.div`
  width: 100%;
  padding-top: 2rem;
  .contact {
    text-align: center;
    &__map {
    }
    &__content {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            quidem?
          </p>
        </div>
        <div className="contact__map">
          <Map />
        </div>
      </div>
    </MapWrapperStyles>
  );
};
