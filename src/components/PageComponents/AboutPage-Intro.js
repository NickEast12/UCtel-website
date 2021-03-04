import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from '../functional/Image';

const AboutPageIntroStyles = styled.section`
  width: 100%;
  .ap {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    color: var(--slate);
    max-width: 1000px;
    &--left {
      h6 {
        margin-bottom: 0.5rem;
      }
      h2 {
        font-size: 1.85rem;
        margin-bottom: 0.85rem;
      }
    }
    &--right {
      width: 100%;
      height: 20rem;
      margin: 2rem auto;
      display: grid;
      grid-row-gap: 9px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 9px;
      grid-template-areas:
        'grid-a grid-b grid-b'
        'grid-a grid-b grid-b'
        'grid-c grid-c grid-d';
      .ap--right--img {
        width: 100%;
        height: 100%;
        object-fit: fill !important;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          object-fit: fill !important;
        }
      }
      .grid-a {
        grid-area: grid-a;
      }
      .grid-b {
        grid-area: grid-b;
      }
      .grid-c {
        grid-area: grid-c;
      }
      .grid-d {
        grid-area: grid-d;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .ap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      &--left {
        padding-top: 3rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .ap {
      display: grid;
      grid-template-columns: 40% 1fr;
      grid-gap: 4rem;
      &--left {
        padding-top: 5rem;
      }
      &--right {
        width: 90%;
        grid-gap: 1rem;
        grid-template-rows: 100px 120px 140px;
      }
    }
  }
`;
const AboutPageIntro = () => (
  <AboutPageIntroStyles>
    <div className="ap">
      <Fade delay={500}>
        <div className="ap--left">
          <h6 className="subtitle">Our Story</h6>
          <h2>World-class service and state-of-the-art technology</h2>
          <p>
            UCtel has been providing leading unified communications and contact
            centre solutions to businesses across the world since 2011.
            Delivering on-premise, cloud and hybrid solutions, we are passionate
            about keeping businesses connected and ahead of the competition.
          </p>
        </div>
      </Fade>
      <div className="ap--right">
        <div className="ap--right--img grid-a">
          <Image filename="about1.png" alt="Mobile connection" />
        </div>
        <div className="ap--right--img grid-b">
          <Image filename="about6.png" alt="Change this later" />
        </div>
        <div className="ap--right--img grid-c">
          <Image filename="about3.png" alt="UCtel team" />
        </div>
        <div className="ap--right--img grid-d">
          <Image filename="about4.png" alt="Change this later" />
        </div>
      </div>
    </div>
  </AboutPageIntroStyles>
);

export default AboutPageIntro;
