import React from 'react';
import styled from 'styled-components';
import Image from '../../functional/Image';

const CiscoStyles = styled.section`
  width: 100%;
  .technology {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    &__wrapper {
      &--left {
        h3 {
          font-size: 1.85rem;
          margin: 0.5rem 0 1rem 0;
          color: var(--slate);
        }
      }
      &--right {
        width: 90%;
        margin: 2rem auto 2rem auto;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .technology {
      max-width: 1100px;
      &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        &--right {
          width: 100%;
          height: 100%;
          margin: 0;
          .gatsby-image-wrapper {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      .technology {
        &__wrapper {
          &--left {
            padding-top: 1.5rem;
          }
        }
      }
    }
  }
`;
const Cisco = () => (
  <CiscoStyles>
    <div className="technology">
      <div className="technology__wrapper">
        <div className="technology__wrapper--left">
          <h6 className="subtitle">Technology</h6>
          <h3>Cisco</h3>
          <p>
            Delivering solutions using Cisco UCCX, Cisco Webex Contact Centre,
            Amazon Connect and RingCentral provides a rich selection of leading
            platforms to ensure you have the right tools to engage with your
            customers in the most efficient way, whilst delivering maximum value
            to your business. Our experience of building and migrating customers
            from one platform to another means that you are in safe hands.
          </p>
        </div>
        <div className="technology__wrapper--right img-decoration">
          <Image filename="template.jpeg" alt="fill this in" />
        </div>
      </div>
    </div>
  </CiscoStyles>
);

export default Cisco;
