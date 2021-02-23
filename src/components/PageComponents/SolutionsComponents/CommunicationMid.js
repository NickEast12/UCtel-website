import React from 'react';
import styled from 'styled-components';
import Image from '../../functional/Image';

const CiscoStyles = styled.div`
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
        p {
          margin-bottom: 0.5rem;
        }
      }
      &--right {
        width: 90%;
        margin: 2rem auto 0 auto;
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
`;
const CommunicationMid = () => (
  <CiscoStyles>
    <div className="technology">
      <div className="technology__wrapper">
        <div className="technology__wrapper--left">
          <h6 className="subtitle">Technology</h6>
          <h3>Rich Call</h3>
          <p>
            Partnering with Richcall, UCtel can bring a mobile and collaborative
            culture to your business with technology designed to offer the next
            generation in customer and team experiences.
          </p>
          <p>
            Offering click-to-call, click-to-video and co-browsing, Richcall is
            a cost-effective solution that can be easily integrated into your
            contact centre software or used in a standalone mode. Available for
            both cloud and on-premise deployments, Richcall establishes a fully
            interactive, collaborative environment that empowers customers and
            enables sales agents to work in a blended, cross-channel mode.
          </p>
        </div>
        <div className="technology__wrapper--right img-decoration">
          <Image filename="template.jpeg" alt="fill this in" />
        </div>
      </div>
    </div>
  </CiscoStyles>
);

export default CommunicationMid;
