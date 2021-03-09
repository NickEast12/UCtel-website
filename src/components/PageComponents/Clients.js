import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import Fade from 'react-reveal/Fade';
import CiscoLogo from '../../svgs/cisco-2.svg';
import Image from '../functional/Image';
import RichcallSVG from '../../svgs/richcall.svg';
import RingCentralSVG from '../../svgs/ringcentral-svg.svg';
import CiscoSvg from '../../svgs/cisco-svg.svg';
import Ciscomeraki from '../../svgs/ciscomeraki-svg.svg';
import CelfiSvg from '../../svgs/celfi-svg.svg';
import ArrowIcon from '../../svgs/right-arrow.svg';
import NokiaIcons from '../../svgs/nokia.svg';
// 527
// 179

const ClientStyles = styled.section`
  width: 100%;
  background-color: var(--lightBlue);
  .clients {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    max-width: var(--maxWidth);
    h4 {
      color: var(--white);
      text-align: center;
      font-size: 1.4rem;
    }
    section {
      color: var(--white);
      text-align: center;
      span {
        border-bottom: var(--white) 1px solid;
        font-size: 1rem;
      }
      svg {
        width: 12px;
        fill: var(--white);
      }
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 1280px) {
      width: 70%;
      h4 {
        padding-bottom: 1rem;
      }
    }
  }
`;
const Clients = () => {
  const [size, setSize] = useState(!false);
  const displayComponent = () => {
    if (window.screen.width >= 768) {
      setSize(true);
    } else {
      setSize(false);
    }
  };
  window.addEventListener('load', displayComponent);
  window.addEventListener('resize', displayComponent);

  return (
    <ClientStyles>
      <div className="clients">
        <h4>Working with industry-leading vendors</h4>
        <Fade delay={200}>{size ? <DesktopClients /> : <MobileClients />}</Fade>
        <Link to="/case-studies">
          <section className="fom">
            <ArrowIcon />
            <span>Read our customer stories</span>
          </section>
        </Link>
      </div>
    </ClientStyles>
  );
};

const ClientLogoStyles = styled.div`
  width: 100%;
  .flex--grid {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    text-align: center;
    /* grid-template-columns: 1fr 1fr 1fr; */
    justify-content: space-between;
    text-align: center;
    grid-gap: 1rem;
    .gatsby-image-wrapper {
      height: auto;
      width: 100%;
    }
    svg {
      width: 80px;
      height: 30px;
      fill: var(--white) !important;
    }
  }

  @media only screen and (min-width: 414px) {
    .flex--grid {
      svg {
        width: 85px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .flex--grid {
      justify-content: space-evenly;

      svg {
        width: 100px;
        height: 70px;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .flex--grid {
      svg {
        width: 120px;
        height: 70px;
      }
    }
  }
`;
const MobileClients = () => (
  <ClientLogoStyles>
    <div className="flex--grid">
      <CiscoSvg />
      <NokiaIcons />
      <RichcallSVG />
      {/* <RingCentralSVG /> */}
      {/* <Ciscomeraki /> */}
    </div>
  </ClientLogoStyles>
);
const DesktopClients = () => (
  <ClientLogoStyles>
    <div className="flex--grid logoDesktop">
      <CiscoSvg />
      <CelfiSvg />
      <NokiaIcons />
      <RichcallSVG />
      {/* <RingCentralSVG /> */}
      {/* <Ciscomeraki /> */}
    </div>
  </ClientLogoStyles>
);

export default Clients;
