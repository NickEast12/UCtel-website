import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from '../../functional/Image';

const BuildingSubStyles = styled.section`
  width: 100%;
  .bulsub {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    &--left {
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0 1rem 0;
        color: var(--slate);
      }
      p {
        margin-bottom: 1rem;
      }
      h6 {
        font-size: 1.1rem;
        color: var(--lightBlue);
      }
      ul {
        list-style: none;
        padding: 1rem 0;
        li {
          padding: 0.15rem 0;
          font-family: Gellix-Medium;
          .bullet {
            color: var(--lightBlue);
            font-size: 1.5rem;
            margin-right: 5px;
          }
        }
      }
    }
    &--right {
      width: 90%;
      margin: 2rem auto 0 auto;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  .bulsub--lower {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    &--content {
      width: 90%;
      margin: 0 auto;
      @media only screen and (min-width: 375px) {
        width: 85%;
      }
      @media only screen and (min-width: 768px) {
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    .bulsub {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      grid-gap: 1rem;
      max-width: 1100px;
      &--right {
        grid-area: a;
        margin: 0;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          img {
            object-fit: cover !important;
          }
        }
      }
      &--left {
        grid-area: b;
      }
    }
  }
`;
const BuildingSub = () => (
  <BuildingSubStyles>
    <div className="bulsub">
      <div className="bulsub--left">
        <Fade delay={350}>
          <h6 className="subtitle">Contact centre</h6>
          <h3>Customer experience</h3>
          <p>
            Contact centres are key to customer experience – customers want to
            be connected to the right resource using the channels of their
            choice to get fast, accurate and first-time resolutions.
          </p>
          <h6>This leads to:</h6>
          <ul>
            <li>
              <span className="bullet">•</span>Higher customer satisfaction
              rates
            </li>
            <li>
              <span className="bullet">•</span>More customer acquisitions
            </li>
            <li>
              <span className="bullet">•</span>Enhanced brand reputation
            </li>
            <li>
              <span className="bullet">•</span>Increased customer conversions
            </li>
            <li>
              <span className="bullet">•</span>Better customer engagement
            </li>
            <li>
              <span className="bullet">•</span>Improved crisis management
            </li>
            <li>
              <span className="bullet">•</span>Heightened customer loyalty and
              retention
            </li>
          </ul>
        </Fade>
      </div>
      <div className="bulsub--right img-decoration">
        <Image
          filename="contact-center.jpeg"
          alt="Customer experience & Contact centres "
        />
      </div>
    </div>
    <div className="bulsub--lower">
      <div className="bulsub--lower--content">
        <Fade delay={550}>
          <p>
            Delivering solutions using Cisco UCCX, Cisco Webex Contact Centre,
            Amazon Connect and RingCentral provides a rich selection of leading
            platforms to ensure you have the right tools to engage with your
            customers in the most efficient way, whilst delivering maximum value
            to your business. Our experience of building and migrating customers
            from one platform to another means that you are in safe hands.
          </p>
        </Fade>
      </div>
    </div>
  </BuildingSubStyles>
);

export default BuildingSub;
