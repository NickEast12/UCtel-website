import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AltLandingPage from '../components/PageComponents/AltLanding';
import LandingPage from '../components/PageComponents/Landing';

const Mockup = styled.main`
  width: 100%;
`;

const index = () => (
  <Mockup>
    <Layout>
      <LandingPage
        background="#1A2536"
        colour="#1A2536"
        lines="#278A9C"
        distance="80"
        value="200"
        subtitle="Get Connected"
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected"
      />
      <AltLandingPage
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected."
      />
    </Layout>
  </Mockup>
);

export default index;
