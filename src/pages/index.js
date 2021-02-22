import { graphql } from 'gatsby';
import React from 'react';
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
      <LandingPage
        title="Mobile boosting | Private 5G | Unified Communications"
        description="Market leading technology keeping you connected."
      />
      <main>
        <Clients />
        <OurMission />
        <AboutUsIntro />
        <SolutionsIntro />
        <SuccessStoriesIntro />
        <PageBlogs Blogs={Blogs} />
      </main>
    </Layout>
  );
};

export default index;

export const query = graphql`
  query BlogQuery {
    AllBlogs: allSanityPost(limit: 3) {
      nodes {
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
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
