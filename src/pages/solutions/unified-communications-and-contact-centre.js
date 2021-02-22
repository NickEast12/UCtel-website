import React from 'react';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import CommunicationIntro from '../../components/PageComponents/SolutionsComponents/CommunicationsIntro.js';
import CommunicationSub from '../../components/PageComponents/SolutionsComponents/CommunicationSub';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';
import CommunicationCTA from '../../components/PageComponents/SolutionsComponents/CommunicationCTA';
import Cisco from '../../components/PageComponents/SolutionsComponents/CiscoSection';
import CommunicationMid from '../../components/PageComponents/SolutionsComponents/CommunicationMid';

const UnifiedCommunication = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <BlackHeader
      title="Unified communications and contact centre"
      description="Fill this in"
    />
    <main>
      <CommunicationIntro />
      <CommunicationCTA />
      <CommunicationSub />
      <Cisco />
      <CommunicationMid />
      <SuccessStoriesIntro />
    </main>
  </Layout>
);

export default UnifiedCommunication;
