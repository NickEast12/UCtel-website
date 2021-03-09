import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AboutPageIntro from '../components/PageComponents/AboutPage-Intro';
import BlackHeader from '../components/PageComponents/BlackHeader';
import Team from '../components/PageComponents/Team';
import WhereWeWork from '../components/PageComponents/WhereWeWork';
import PageBlogs from '../components/PageComponents/PageBlogs';
import AboutusLower from '../components/AboutusLower';
import SEO from '../components/functional/SEO';

const AboutUs = ({ data, pageContext }) => {
  const leaders = data.leaders.nodes;
  const blogs = data.AllBlogs.nodes;
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title="About us | Unified Communications Solutions | UCtel"
        description="Since 2011, UCtel has transformed business' digital infrastructures by delivering on-premise, cloud and hybrid unified communications solutions"
      />
      <BlackHeader
        title="About us"
        description=" Better communications for every workplace"
      />
      <main>
        <AboutPageIntro />
        <WhereWeWork />
        <AboutusLower />
        {/* <Team data={leaders} /> */}
        <PageBlogs Blogs={blogs} />
      </main>
    </Layout>
  );
};

export default AboutUs;

export const query = graphql`
  query MyQuery {
    leaders: allSanityAuthor {
      nodes {
        name
        id
        bio
        linkedin
        position
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
