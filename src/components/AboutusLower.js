import React from 'react';
import styled from 'styled-components';

const AboutusLowerStyles = styled.section`
  width: 100%;
  .lower {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0 3rem 0;
    max-width: 1000px;
    &--left {
      h4 {
        font-size: 1.45rem;
        margin-bottom: 1rem;
        line-height: 1.85rem;
      }
    }
    &--right {
      p {
        margin-bottom: 1rem;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 50% 1fr;
      grid-gap: 2rem;
    }
    @media only screen and (min-width: 1280px) {
      width: 80%;
      padding-bottom: 6rem;
    }
  }
`;
const AboutusLower = () => (
  <AboutusLowerStyles>
    <div className="lower">
      <div className="lower--left">
        <h4>
          With indoor signal boosting solutions; next-generation private 5G
          networks; and unified communications software, we are at the forefront
          of transforming business’ digital infrastructures and bringing global
          companies into the digital age.
        </h4>
      </div>
      <div className="lower--right">
        <p>
          Providing innovative solutions for every client, the experienced team
          at UCtel are there from the word go – from supplying initial designs
          to the implementation and ongoing support to each and every customer.
        </p>
        <p>
          If your business needs improved communications, high-performing and
          robust connectivity, or full interactive customer experiences, UCtel
          has the solutions.
        </p>
      </div>
    </div>
  </AboutusLowerStyles>
);

export default AboutusLower;
