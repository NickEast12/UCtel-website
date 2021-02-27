import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import LinkedInIcon from '../../svgs/linkedin.svg';

const TeamStyles = styled.section`
  width: 100%;
  background-color: var(--lightBlue);
  .team {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 800px;
    h4 {
      color: var(--white);
      font-size: 1.65rem;
      text-align: center;
      padding-bottom: 1rem;
    }
    &__wrapper {
      margin: 2rem 0;
      &__profile {
        width: 90%;
        margin: 0 auto;
        background-color: var(--white);
        border-radius: 4.5px;
        padding: 2rem;
        text-align: center;
        .empty {
          display: none;
        }
        &--img {
          margin: 0 auto;
          width: 100px;
          .gatsby-image-wrapper {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        h6 {
          font-size: 1.2rem;
          margin-top: 1rem;
          color: var(--slate);
          font-family: Gellix-SemiBold;
        }
        .title {
          color: var(--lightBlue);
          font-family: Gellix-Regular;
          padding: 0.5rem 0;
          margin: 0;
          font-size: 1.1rem;
        }
        .icon {
          padding: 1rem 0;
          margin: 1rem auto;
          width: 40px;
          background-color: var(--lightBlue);
          height: 35px;
          border-radius: 7px;
          position: relative;
          a {
            svg {
              position: absolute;
              top: 17px;
              left: 10px;
              fill: var(--white);
              margin-top: -10px;
              width: 20px;
            }
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .team {
      padding: 3rem 0;
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
const Team = ({ data }) => (
  <TeamStyles>
    <div className="team">
      <h4>Your industry leaders</h4>
      <div className="team__wrapper">
        {data.map((person) => (
          <div className="team__wrapper__profile">
            <div className="team__wrapper__profile--img">
              <Img fluid={person.image.asset.fluid} alt={person.image.alt} />
            </div>
            <h6>{person.name}</h6>
            <h6 className="title">{person.position}</h6>
            <p>{person.bio}</p>
            <div className={person.linkedin === null ? 'empty' : 'icon'}>
              <a href={person.linkedin} target="__blank">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </TeamStyles>
);
export default Team;
