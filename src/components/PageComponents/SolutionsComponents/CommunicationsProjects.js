import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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
        width: 100%;
        margin: 2rem auto 2rem auto;
        ul {
          list-style: none;
          li {
            border-left: solid 3px var(--lightBlue);
            padding-left: 5px;
            margin-bottom: 1.5rem;
            align-items: center;
          }
        }
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
        /* display: grid;
        grid-template-columns: 35% 1fr;
        grid-gap: 0.5rem; */
        &--right {
          width: 100%;
          height: 100%;
          margin: 0;
          ul {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
          }
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      .technology {
        &__wrapper {
          &--right {
            ul {
              grid-template-columns: repeat(2, 1fr);
              li {
                padding-left: 10px;
                display: flex;
              }
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
  }
`;
const CommunicationProjects = () => (
  <CiscoStyles>
    <div className="technology">
      <div className="technology__wrapper">
        <div className="technology__wrapper--left">
          <h6 className="subtitle">Example projects</h6>
          <h3>UCtel solutions</h3>
        </div>
        <div className="technology__wrapper--right">
          <Fade delay={350}>
            <ul>
              <li>
                Design and Build of new, on-premise Cisco solutions (CUCM, UCCX)
              </li>
              <li>Upgrades of on-premise Cisco solutions</li>
              <li>
                Migrations from Cisco Unified Communications Manager to
                RingCentral
              </li>
              <li>
                Migrations of Cisco Unified Communications Manager to Cisco
                Webex Calling
              </li>
              <li>Hybrid solutions of on-premise CUCM and Webex Calling</li>
              <li>
                Integrations of third-party applications with CUCM and UCCX to
                deliver additional business benefit
              </li>
              <li>Migration to Amazon Connect with Omningage desktop</li>
              <li>
                Integration of Cisco UCM and Webex Calling with Microsoft Teams
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  </CiscoStyles>
);

export default CommunicationProjects;
