import React from 'react';
import styled from 'styled-components';
import Image from '../../functional/Image';

const BuildingSubStyles = styled.div`
  width: 100%;
  .bulsub {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0 5rem 0;
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
`;
const BuildingSub = () => (
  <BuildingSubStyles>
    <div className="bulsub">
      <div className="bulsub--left">
        <h6 className="subtitle">Mobile Signal Booster</h6>
        <h3>
          Cost effective and Ofcom-approved, revolutionary mobile-signal booster
        </h3>
        <p>
          Cel-Fi works by bringing the outdoor signal into a building’s
          interior. Hospitals, warehouses, offices and retail units – to name
          but a few – no longer need to suffer in silence because there is a
          solution that’s:
        </p>
        <ul>
          <li>
            <span className="bullet">•</span>Authorised by 200 carriers globally
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
      </div>
      <div className="bulsub--right img-decoration">
        <Image filename="template.jpeg" alt="fill this in" />
      </div>
    </div>
  </BuildingSubStyles>
);

export default BuildingSub;
