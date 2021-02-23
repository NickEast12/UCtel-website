import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ArrowIcon from '../../svgs/right-arrow.svg';
import MissionIcon from '../../svgs/mission.svg';

const SolutionsIntroStyles = styled.div`
  width: 100%;
  background-color: var(--ghostWhite);
  .solutions {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    &__content {
      text-align: left;
      color: var(--slate);
      h3 {
        font-size: 1.85rem;
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
      }
    }
    &__grid {
      &__box {
        padding: 2rem 0;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        > svg {
          width: 50px;
        }
        h4 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
`;
const SolutionsIntro = () => (
  <SolutionsIntroStyles>
    <div className="solutions">
      <div className="solutions__content">
        <h6 className="subtitle">Solutions</h6>
        <h3>How we can help your business grow?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          quaerat obcaecati architecto distinctio dignissimos! Sint provident
          molestiae porro voluptatibus rerum. Fuga optio quam a fugiat!
        </p>
      </div>
      <div className="solutions__grid">
        <Link to="/">
          <div className="solutions__grid__box">
            <MissionIcon />
            <h4>In-Building Mobile</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, obcaecati.
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="solutions__grid__box">
            <MissionIcon />
            <h4>Private 5G</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, obcaecati.
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="solutions__grid__box">
            <MissionIcon />
            <h4>Unified Communications</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, obcaecati.
            </p>
            <div className="fom">
              <ArrowIcon />
              <span>Learn more</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </SolutionsIntroStyles>
);

export default SolutionsIntro;