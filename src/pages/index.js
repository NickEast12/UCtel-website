import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import AboutUsIntro from '../components/PageComponents/AboutUs-Intro';
import Clients from '../components/PageComponents/Clients';
import LandingPage from '../components/PageComponents/Landing';
import OurMission from '../components/PageComponents/OurMission';
import PageBlogs from '../components/PageComponents/PageBlogs';
import SolutionsIntro from '../components/PageComponents/SolutionsIntro';
import SuccessStoriesIntro from '../components/PageComponents/SuccessStoriesIntro';

const index = ({ data, pageContext }) => {
  const Blogs = data.AllBlogs.nodes;
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title="Unified Communications Solutions | UCtel"
        description="UCtel is a market-leading provider of unified communications and contact centre solutions to businesses across the world"
      />
      <LandingPage
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Next-generation technology keeping you connected."
      />
      <main>
        <Clients />
        <OurMission />
        <AboutUsIntro />
        <SolutionsIntro />
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
        <PageBlogs Blogs={Blogs} />
      </main>
    </Layout>
  );
};

export default index;

export const query = graphql`
  query BlogQuery {
    AllBlogs: allSanityPost(
      limit: 3
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        readingTimeInMinutes
        id
        excerpt
        categories {
          title
        }
        authors {
          author {
            name
            id
            image {
              alt
              asset {
                fluid(maxWidth: 50) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        cardImage {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
        mainImage {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
