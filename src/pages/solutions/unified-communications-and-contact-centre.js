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

const UnifiedCommunication = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
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
      {/* <SuccessStoriesIntro /> */}
    </main>
  </Layout>
);

export default UnifiedCommunication;
