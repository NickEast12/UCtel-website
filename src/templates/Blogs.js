import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import Layout from '../components/Layout';

const BlogPageStyles = styled.main`
  width: 100%;
  .bp--header {
    width: 100%;
    .gatsby-image-wrapper {
      height: 12.5rem;
    }
  }
  .bp--content {
    width: 90%;
    height: 100%;
    margin: 0 auto 2rem auto;
    background-color: var(--white);
    border-radius: 4.5px;
    margin-top: -5rem;
    position: relative;
    z-index: 10;
    padding: 1.5rem 1.5rem;
    box-shadow: 0 1.7778rem 1.6667rem rgb(10 10 10 / 10%);
    &__data {
      display: flex;
      h6 {
        font-size: 1rem;
        color: var(--lightBlue);
        margin-right: 10px;
      }
      span {
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--slate);
      }
    }
    h1 {
      font-size: 1.65rem;
      margin: 1rem 0;
      color: var(--slate);
    }
    &__author {
      display: flex;
      padding: 1rem 0;
      .img {
        .gatsby-image-wrapper {
          border-radius: 50%;
          width: 45px;
          height: 45px;
        }
      }
      .info {
        margin-left: 10px;
        p {
          color: var(--lightBlue);
          font-size: 1rem;
          font-family: Gellix-Medium;
        }
        span {
          font-size: 1rem;
        }
      }
    }
    &__body {
      color: var(--slate);
      h2 {
        font-size: 1.25rem;
        line-height: 1.5;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1rem 0;
        font-family: Gellix-SemiBold;
      }
      strong {
        font-family: Gellix-SemiBold;
        color: var(--black);
      }
      p {
        line-height: 1.45;
        font-size: 1.1rem;
        margin: 1.2rem 0;
      }
      ul {
        list-style: inside;
      }
      li {
        margin: 0.5rem 0;
        line-height: 1.45;
        font-size: 1.1rem;
      }
      a {
        color: var(--mainColour);
        font-weight: 800;
      }
      .image {
        img {
          width: 100%;
          height: auto;
        }
      }
      iframe {
        width: 100%;
      }
    }
  }
`;

const urlFor = (source) =>
  urlBuilder({
    projectId: 'cvd7buc8',
    dataset: 'production',
  }).image(source);

const Blogs = ({ pageContext, data }) => {
  const content = data.Blog;
  const { categories, authors } = content;
  console.log(content);
  const serializers = {
    types: {
      mainImage: (props) => (
        <div className="image">
          <img src={urlFor(props.node.asset)} alt="Blog Photos" />
        </div>
      ),
      videoEmbed: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);
        return <YouTube videoId={id} className="video" />;
      },
    },
  };
  return (
    <Layout>
      <BlogPageStyles>
        <div className="bp--header">
          <Img
            fluid={content.mainImage.asset.fluid}
            alt={content.mainImage.alt}
          />
        </div>
        <div className="bp--content">
          <div className="bp--content__data">
            {categories.map((cat) => (
              <h6>{cat.title}</h6>
            ))}
            <span>5 Min Read</span>
          </div>
          <h1>{content.title}</h1>
          <div className="bp--content__author">
            {authors.map((aut) => (
              <>
                <div className="img">
                  <Img
                    fluid={aut.author.image.asset.fluid}
                    alt={aut.author.image.asset.alt}
                  />
                </div>
                <div className="info">
                  <p>{aut.author.name}</p>
                  <span>{content.publishedAt}</span>
                </div>
              </>
            ))}
          </div>
          <div className="bp--content__body">
            <PortableText blocks={content._rawBody} serializers={serializers} />
          </div>
        </div>
      </BlogPageStyles>
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  query SingleBlogQuery($slug: String!) {
    Blog: sanityPost(slug: { current: { eq: $slug } }) {
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
      _rawBody
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
        alt
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
