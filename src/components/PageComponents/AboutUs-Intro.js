import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from '../functional/Image';
import ArrowIcon from '../../svgs/right-arrow.svg';

const AboutUsIntroStyles = styled.div`
  width: 100%;
  .aboutus {
    padding: 3rem 0 4rem 0;
    width: 90%;
    margin: 0 auto;
    &--image {
      width: 95%;
      margin: 0 auto 0 0;
    }
    &--content {
      padding-top: 2.5rem;
      color: var(--slate);
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 700px) {
      width: 85%;
      display: grid;
      grid-template-columns: 45% 1fr;
      grid-gap: 2rem;
      padding: 2rem 0 7rem 0;
      &--image {
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
      &--content {
        padding-top: 0;
      }
    }
    @media only screen and (min-width: 1024px) {
      max-width: 1000px;
      &--content {
        padding-top: 0.5rem;
      }
    }
  }
`;
const AboutUsIntro = () => (
  <AboutUsIntroStyles>
    <div className="aboutus">
      <div className="aboutus--image img-decoration">
        <Image
          filename="about-us.png"
          alt="Bringing business into the digital age"
        />
      </div>
      <div className="aboutus--content">
        <Fade delay={450}>
          <h6 className="subtitle">About us</h6>
          <h3>Bringing business into the digital age</h3>
          <p>
            Business is constantly evolving, and in today’s digital-first world,
            you need to be more agile than ever. With market-leading,
            forward-thinking and cutting-edge technologies, we can transform
            your communication infrastructure, drive your IoT initiatives and
            keep you connected.
          </p>
          <Link to="/about-us">
            <div className="fom">
              <ArrowIcon />
              <span>Find out more</span>
            </div>
          </Link>
        </Fade>
      </div>
    </div>
  </AboutUsIntroStyles>
);

export default AboutUsIntro;
