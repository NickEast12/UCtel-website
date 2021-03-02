import React from 'react';
import SEO from '../../components/functional/SEO';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import BuildingIntro from '../../components/PageComponents/SolutionsComponents/BuildingIntro';
import BuildingSub from '../../components/PageComponents/SolutionsComponents/BuildingSub';
import FindOut from '../../components/PageComponents/SolutionsComponents/FindOut';
import HowItWorks from '../../components/PageComponents/SolutionsComponents/HowItWorks';
import WeWill from '../../components/PageComponents/SolutionsComponents/WeWill';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';

const InBuilding = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <SEO />
    <BlackHeader
      title="In-building mobile connectivity"
      description="Delivering better communications and faster data speeds to your business"
    />
    <main>
      <BuildingIntro />
      <BuildingSub />
      <WeWill />
      <HowItWorks />
      <FindOut />
      <SuccessStoriesIntro />
    </main>
  </Layout>
);

export default InBuilding;
