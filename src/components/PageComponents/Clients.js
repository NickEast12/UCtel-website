import React, { useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import Fade from 'react-reveal/Fade';
import CiscoLogo from '../../svgs/cisco-2.svg';

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
        <h4>We're already working with some of the largest providers</h4>
        <Fade delay={200}>{size ? <DesktopClients /> : <MobileClients />}</Fade>
      </div>
    </ClientStyles>
  );
};

const ClientLogoStyles = styled.div`
  width: 100%;
  .flex--grid {
    width: 90%;
    margin: 2rem auto;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    svg {
      width: 80px;
      text-align: center;
      margin: 0 auto;
      height: auto;
    }
  }
  .logoDesktop {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const MobileClients = () => (
  <ClientLogoStyles>
    <div className="flex--grid">
      <CiscoLogo />
      <CiscoLogo />
    </div>
  </ClientLogoStyles>
);
const DesktopClients = () => (
  <ClientLogoStyles>
    <div className="flex--grid logoDesktop">
      <CiscoLogo />
      <CiscoLogo />
      <CiscoLogo />
      <CiscoLogo />
    </div>
  </ClientLogoStyles>
);

export default Clients;
