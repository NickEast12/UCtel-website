import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AboutPageIntro from '../components/PageComponents/AboutPage-Intro';
import BlackHeader from '../components/PageComponents/BlackHeader';
import Team from '../components/PageComponents/Team';
import WhereWeWork from '../components/PageComponents/WhereWeWork';
import PageBlogs from '../components/PageComponents/PageBlogs';

const AboutUs = ({ data, pageContext }) => {
  const leaders = data.leaders.nodes;
  const blogs = data.AllBlogs.nodes;
  return (
    <Layout pageContext={pageContext}>
      <BlackHeader
        title="About us"
        description="Short introduction into about us"
      />
      <main>
        <AboutPageIntro />
        <WhereWeWork />
        <Team data={leaders} />
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
