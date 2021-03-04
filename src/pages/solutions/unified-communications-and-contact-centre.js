import React from 'react';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import CommunicationIntro from '../../components/PageComponents/SolutionsComponents/CommunicationsIntro.js';
import CommunicationSub from '../../components/PageComponents/SolutionsComponents/CommunicationSub';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';
import CommunicationCTA from '../../components/PageComponents/SolutionsComponents/CommunicationCTA';
import Cisco from '../../components/PageComponents/SolutionsComponents/CiscoSection';
import CommunicationMid from '../../components/PageComponents/SolutionsComponents/CommunicationMid';
import CommunicationProjects from '../../components/PageComponents/SolutionsComponents/CommunicationsProjects';
import SEO from '../../components/functional/SEO';

const UnifiedCommunication = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <SEO />
    <BlackHeader
      title="Unified communications and contact centre"
      description="Creating digital experiences"
    />
    <main>
      <CommunicationIntro />
      <CommunicationCTA />
      <CommunicationSub />
      <CommunicationProjects />
      {/* <Cisco /> */}
      <CommunicationMid />
      <SuccessStoriesIntro
        quote="A fully updated new infrastructure across multiple Dufry offices around the globe"
        // name="Lee Reuben"
        position="Dufry"
        img="dufry-img.jpg"
        alt="A fully updated new infrastructure across multiple Dufry offices around the globe"
        link="/case-studies/dufry"
      />
    </main>
  </Layout>
);

export default UnifiedCommunication;
