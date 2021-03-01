import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from '../../functional/Image';

const BuildingSubStyles = styled.section`
  width: 100%;
  .bulsub {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0 5rem 0;
    max-width: 1100px;
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
    .bulsub {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'a b';
      grid-gap: 1rem;
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
        padding-top: 1.5rem;
      }
    }
  }
`;
const BuildingSub = () => (
  <BuildingSubStyles>
    <div className="bulsub">
      <div className="bulsub--left">
        <Fade delay={350}>
          <h6 className="subtitle">Mobile Signal Booster</h6>
          <h3>
            Solve the problem of dropped calls, poor voice quality and low data
          </h3>
          <p>
            Cost effective and Ofcom-approved, revolutionary mobile-signal
            booster Cel-Fi works by bringing the outdoor signal into a
            building’s interior. Hospitals, warehouses, offices and retail units
            – to name but a few – no longer need to suffer in silence because
            there is a solution that’s:
          </p>
          <ul>
            <li>
              <span className="bullet">•</span>Authorised by 200 carriers
              globally
            </li>
            <li>
              <span className="bullet">•</span>Network safe
            </li>
            <li>
              <span className="bullet">•</span>Easy to install and maintain
            </li>
            <li>
              <span className="bullet">•</span>Guaranteed to not interfere with
              other wireless systems
            </li>
            <li>
              <span className="bullet">•</span>Able to boost one or all UK
              networks
            </li>
          </ul>
        </Fade>
      </div>
      <div className="bulsub--right img-decoration">
        <Image
          filename="mobile-signal-booster.png"
          alt="Mobile Signal Booster"
        />
      </div>
    </div>
  </BuildingSubStyles>
);

export default BuildingSub;
