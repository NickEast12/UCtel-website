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
      title="In-building mobile signal solutions"
      description="Delivering better communications and faster data speeds to your business"
    />
    <main>
      <BuildingIntro />
      <BuildingSub />
      <WeWill />
      <HowItWorks />
      <FindOut />
      <SuccessStoriesIntro
        quote="Seamless transformation for the end-user was paramount to Wolseley.
            UCtel understood our business and their delivery of our 600 sites
            was excellent."
        name="Nathan Wright"
        position="Wolseley Project Manager"
        img="successstory.jpg"
        alt="Seamless transformation for the end-user was paramount to Wolseley.
          UCtel understood our business and their delivery of our 600 sites
          was excellent."
        link="/case-studies/wolseley"
      />
    </main>
  </Layout>
);

export default InBuilding;
