import React from 'react';
import Layout from '../../components/Layout';
import BlackHeader from '../../components/PageComponents/BlackHeader';
import BuildingIntro from '../../components/PageComponents/SolutionsComponents/BuildingIntro';
import BuildingSub from '../../components/PageComponents/SolutionsComponents/BuildingSub';
import FindOut from '../../components/PageComponents/SolutionsComponents/FindOut';
import HowItWorks from '../../components/PageComponents/SolutionsComponents/HowItWorks';
import SuccessStoriesIntro from '../../components/PageComponents/SuccessStoriesIntro';

const InBuilding = () => (
  <Layout>
    <BlackHeader
      title="In-building mobile connectivity"
      description="Fill this in"
    />
    <main>
      <BuildingIntro />
      <BuildingSub />
      <HowItWorks />
      <FindOut />
      <SuccessStoriesIntro />
    </main>
  </Layout>
);

export default InBuilding;
