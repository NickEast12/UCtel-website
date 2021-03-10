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
    <SEO
      title="In-building mobile signal solutions | UC Solutions | UCtel"
      description="Solve the problem of dropped calls, poor voice quality and slow browsing speeds with our in-building mobile signal solutions today"
    />
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
        quote="Connecting NHS buildings with strong mobile network coverage"
        name=""
        position=""
        img="nhs.jpeg"
        alt="Central London Community Healthcare NHS Trust"
        link="/case-studies/connecting-NHS-buildings-with-strong-mobile-network-coverage"
      />
    </main>
  </Layout>
);

export default InBuilding;
