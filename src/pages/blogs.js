import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogSorter from '../components/functional/BlogSorter';
import Layout from '../components/Layout';
import SingleBlog from '../components/PageComponents/SingleBlog';
import WhiteLandingPage from '../components/PageComponents/WhiteHeader';

const BlogGridStyles = styled.div`
  width: 100%;
  .bg {
    width: 85%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

const Blogs = ({ pageContext, data }) => {
  const blogs = data.AllBlogs.nodes;
  console.log(blogs);
  return (
    <Layout alt>
      <WhiteLandingPage
        title={`${pageContext.title || 'UCtel Blogs'}`}
        description={`${
          pageContext.description ||
          'The latest updates, tips and stories from our team'
        }`}
      />
      <main>
        <BlogSorter />
        <BlogGridStyles>
          <div className="bg">
            {blogs.map((blog) => (
              <SingleBlog blog={blog} />
            ))}
          </div>
        </BlogGridStyles>
      </main>
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  query Query($categoryRegex: String) {
    AllBlogs: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { regex: $categoryRegex } } }
      }
      sort: { fields: _createdAt, order: DESC }
    ) {
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
