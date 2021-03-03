import React from 'react';
import styled from 'styled-components';
import ConnectivityIcon from '../../../svgs/connectivity.svg';
import UserIcon from '../../../svgs/multi-user.svg';
import CoverageIcon from '../../../svgs/coverage.svg';
import ConnectionIcon from '../../../svgs/connection.svg';
import NetworkIcon from '../../../svgs/network.svg';
import PerformanceIcon from '../../../svgs/performance.svg';
import SecurityIcon from '../../../svgs/security.svg';
import BandwidthIcon from '../../../svgs/bandwidth.svg';
import TransferIcon from '../../../svgs/transfer.svg';
import CapacityIcon from '../../../svgs/capacity.svg';

const LandingInfoStyles = styled.section`
  width: 100%;
  background-color: var(--ghostWhite);
  .landing__info {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    max-width: 1100px;
    &--left {
      padding-bottom: 1rem;
      h3 {
        font-size: 1.4rem;
      }
    }
    &--right {
      ul {
        list-style: none;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        li {
          align-items: center;
          padding: 0.25rem 0;
          text-align: center;
          margin-bottom: 0.85rem;
          align-self: center;
          align-items: baseline;
          svg {
            width: 40px;
            margin: 0 auto;
            display: block;
            fill: var(--lightBlue);
            display: flex;
          }
          p {
            margin-top: 0.5rem;
            display: block;
            font-family: Gellix-SemiBold;
          }
        }
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      width: 75%;
      &--right {
        ul {
          margin-top: 2rem;
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      width: 60%;
      padding: 5rem 0;
      &--right {
        ul {
          li {
            svg {
              width: 50px;
            }
          }
        }
      }
    }
  }
`;
const LandingInfo = () => (
  <LandingInfoStyles>
    <div className="landing__info">
      <div className="landing__info--left">
        <h3>
          Addressing the need for critical wireless communication, private 5G is
          predicted to grow by £4.2bn in 2024. Essential for Industry 4.0
          implementation, it allows for:
        </h3>
      </div>
      <div className="landing__info--right">
        <ul>
          <li>
            <ConnectivityIcon />
            <p>Unified connectivity</p>
          </li>
          <li>
            <UserIcon />
            <p>High multi-user capabilities</p>
          </li>
          <li>
            <CapacityIcon />
            <p>Specific coverage and capacity</p>
          </li>
          <li>
            <NetworkIcon />
            <p>One dedicated network</p>
          </li>
          <li>
            <PerformanceIcon />
            <p>High, predictable performance</p>
          </li>
          <li>
            <SecurityIcon />
            <p>Improved security and mobility</p>
          </li>
          <li>
            <BandwidthIcon />
            <p>Enhanced bandwidths</p>
          </li>
          <li>
            <TransferIcon />
            <p>Faster transmission of greater amounts of data</p>
          </li>
          <li>
            <CoverageIcon />
            <p>Coverage precisely where needed (inside and outside)</p>
          </li>
        </ul>
      </div>
    </div>
  </LandingInfoStyles>
);

export default LandingInfo;
