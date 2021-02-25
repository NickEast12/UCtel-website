import React from 'react';
import styled from 'styled-components';
import Image from '../../functional/Image';

const BuildingSubStyles = styled.div`
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
        <h6 className="subtitle">Contact centres</h6>
        <h3>Customer experience</h3>
        <p>
          Contact centres are key to customer experience – customers want to be
          connected to the right resource using the channels of their choice to
          get fast, accurate and first-time resolutions.
        </p>
        <ul>
          <li>
            <span className="bullet">•</span>Higher customer satisfaction rates
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
      </div>
      <div className="bulsub--right img-decoration">
        <Image filename="template.jpeg" alt="fill this in" />
      </div>
    </div>
  </BuildingSubStyles>
);

export default BuildingSub;
