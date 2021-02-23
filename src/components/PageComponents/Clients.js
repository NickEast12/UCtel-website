import React, { useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import Image from '../functional/Image';
import CiscoLogo from '../../svgs/cisco-2.svg';
import CiscoMerakiLogo from '../../svgs/cisco-meraki.svg';

const ClientStyles = styled.div`
  width: 100%;
  background-color: var(--lightBlue);
  .clients {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    h4 {
      color: var(--white);
      text-align: center;
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
  }
`;
const Clients = () => {
  const [size, setSize] = useState(false);
  const displayComponent = () => {
    if (window.screen.width >= 768) {
      setSize(true);
    } else {
      setSize(false);
    }
  };
  window.addEventListener('resize', displayComponent);

  return (
    <ClientStyles>
      <div className="clients">
        <h4>We're already working with some of the largest providers</h4>
        {size ? <DesktopClients /> : <MobileClients />}
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
  <div>
    <h1>Desktop</h1>
  </div>
);

export default Clients;
