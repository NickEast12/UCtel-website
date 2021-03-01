import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import HealthcareIcon from '../../svgs/healthcare.svg';
import ConstructionIcon from '../../svgs/altconstruction.svg';
import FarmingIcon from '../../svgs/farming.svg';
import WarehousesIcon from '../../svgs/warehouses.svg';

const WhereWeWorkStyles = styled.section`
  width: 100%;
  .work {
    width: 90%;
    margin: 0 auto;
    padding: 0 0 3rem 0;
    color: var(--slate);
    max-width: 1000px;
    &__content {
      h3 {
        font-size: 1.65rem;
      }
    }
    &__areas {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__box {
        padding: 0.5rem 0;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        > svg {
          width: 45px;
          fill: var(--lightBlue);
        }
        h5 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
        }
        p {
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      .work {
        &__areas {
          margin-top: 0;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .work {
      padding: 3rem 0 5rem 0;
      &__areas {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
const WhereWeWork = () => (
  <WhereWeWorkStyles>
    <div className="work">
      <div className="work__content">
        <h6 className="subtitle">What we do</h6>
        <h3>For businesses of the future</h3>
        <p>
          We pride ourselves on offering cutting-edge technology that enables
          faster communication, better collaborations and improved operations.{' '}
        </p>
      </div>
      <div className="work__areas">
        <Fade delay={250}>
          <div className="work__areas__box">
            <HealthcareIcon />
            <h5>Healthcare</h5>
          </div>
        </Fade>
        <Fade delay={350}>
          <div className="work__areas__box">
            <FarmingIcon />
            <h5>Agriculture</h5>
          </div>
        </Fade>
        <Fade delay={450}>
          <div className="work__areas__box">
            <ConstructionIcon />
            <h5>Construction</h5>
          </div>
        </Fade>
        <Fade delay={550}>
          <div className="work__areas__box">
            <WarehousesIcon />
            <h5>Warehousing</h5>
          </div>
        </Fade>
      </div>
    </div>
  </WhereWeWorkStyles>
);

export default WhereWeWork;
