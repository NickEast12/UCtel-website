import React from 'react';
import styled from 'styled-components';
import Image from '../../functional/Image';

const SolutionsMidStyles = styled.div`
  width: 100%;
  .sm {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0 4rem 0;
    &--right {
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0 1rem 0;
        color: var(--slate);
      }
      p {
        margin-bottom: 0.85rem;
      }
    }
    &--left {
      width: 100%;
      &__img {
        width: 90%;
        margin: 2rem auto;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
`;
const SolutionsMid = () => (
  <SolutionsMidStyles>
    <div className="sm">
      <div className="sm--right">
        <h6 className="subtitle">Sub-section title</h6>
        <h3>Intro to sub-section</h3>
        <p>
          Using cellular technology, private 5G networks offer businesses the
          coverage, security and capabilities they need for more advanced
          wireless data and IoT applications, revolutionising the future of
          connectivity for a wide range of enterprises and industrial
          environments, thereby accelerating your digital transformation.
        </p>
        <p>
          As the driving force behind Industry 4.0, private 5G enables companies
          to automate and improve operations, transforming the current
          limitations of existing networks.
        </p>
      </div>
      <div className="sm--left">
        <div className="sm--left__img img-decoration">
          <Image filename="template.jpeg" alt="fil this in later" />
        </div>
      </div>
    </div>
  </SolutionsMidStyles>
);

export default SolutionsMid;
