import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import getYouTubeId from 'get-youtube-id';
import { window } from 'browser-monads';
import YouTube from 'react-youtube';
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookShareButton,
} from 'react-share';
import Layout from '../components/Layout';
import RelatedBlogs from '../components/PageComponents/RelatedBlogs';
import EmailIcon from '../svgs/email.svg';
import TwitterIcon from '../svgs/twitter.svg';
import FacebookIcon from '../svgs/facebook.svg';
import LinkedInIcon from '../svgs/linkedin.svg';
import SEO from '../components/functional/SEO';

const BlogPageStyles = styled.main`
  width: 100%;
  .bp--header {
    width: 90%;
    margin: 0 auto;
    padding-top: 5rem;
    border-radius: 4.5px;
    max-width: 1100px;
    .gatsby-image-wrapper {
      border-radius: 4.5px;
      width: 100%;
      height: 15rem;
      img {
        object-fit: fill !important;
      }
    }
  }
  .bp--content {
    width: 90%;
    max-width: var(--maxWidth);
    height: 100%;
    margin: 0rem auto 2rem auto;
    background-color: var(--white);
    border-radius: 4.5px;
    /* margin-top: -5rem; */
    position: relative;
    z-index: 10;
    padding: 1.5rem 1.5rem;
    box-shadow: 0 1.7778rem 1.6667rem rgb(10 10 10 / 10%);
    &__data {
      display: flex;
      justify-content: space-between;
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
      font-size: 2rem;
      margin: 1rem 0;
      color: var(--slate);
      font-family: Gellix-SemiBold;
    }
    &__author {
      display: flex;
      padding: 1rem 0;
      .img {
        .gatsby-image-wrapper {
          border-radius: 50%;
          width: 50px;
          height: 50px;
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
    &__share {
      padding: 0.5rem 0;
      display: flex;

      button {
        .share--box {
          width: 40px;
          margin-right: 15px;
          height: 40px;
          border-radius: 5px;
          position: relative;
          svg {
            top: 10px;
            left: 10px;
            width: 20px;
            position: absolute;
            fill: var(--white);
          }
        }
        .email {
          background-color: var(--orange);
        }
        .twitter {
          background-color: #1da1f2;
        }
        .linkedin {
          background-color: #0a66c2;
        }
        .facebook {
          background-color: #1778f2;
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
  @media only screen and (min-width: 414px) {
    .bp--header {
      width: 85%;
      .gatsby-image-wrapper {
        height: 18rem;
      }
    }
    .bp--content {
      width: 85%;
    }
  }
  @media only screen and (min-width: 701px) {
    .bp--header {
      width: 85%;
      padding-top: 8rem;
    }
    .bp__wrapper {
      display: grid;
      padding-top: 2rem;
      width: 85%;
      max-width: 1100px;
      margin: 0 auto;
      grid-template-columns: 30% 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      .sticky-signup {
        position: sticky;
        top: 5.85rem;
        .email {
          width: 100%;
        }
        .social {
          text-align: left;
        }
      }
      .bp--content {
        grid-area: b;
        width: 100%;
        padding-top: 0;
        box-shadow: none;
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .bp--header {
      width: 100%;
      margin-bottom: 2rem;
      .gatsby-image-wrapper {
        height: 20rem;
      }
    }
    .bp--content {
      width: 60%;
    }
  }
`;

const EmailSignUpStyles = styled.aside`
  width: 100%;
  .email {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    background-color: var(--lightBlue);
    border-radius: 4.5px;
    padding: 1.5rem 1rem;
    h6 {
      color: var(--white);
      font-size: 1.2rem;
    }
    p {
      margin: 1rem 0;
      color: var(--white);
      font-size: 1.1rem;
    }
    form {
      width: 80%;
      margin: 0 auto;
      input {
        width: 100%;
        background-color: var(--white);
        padding: 0.5rem;
        border-radius: 4.5px;
        border: none;
        margin-bottom: 0.85rem;
      }
      input::placeholder {
        color: var(--lightBlue);
        text-align: center;
        font-size: 1rem;
      }
    }
  }
  .social {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0;
    p {
      font-size: 1.2rem;
      font-family: Gellix-Medium;
    }
    &__wrapper {
      margin-top: 1rem;
      svg {
        fill: var(--lightBlue);
        width: 22.5px;
        margin-right: 10px;
      }
    }
  }
`;

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: 'production',
  }).image(source);

const Blogs = ({ pageContext, data }) => {
  const content = data.Blog;
  const { categories, authors } = content;
  const relatedBlogsData = data.Category;
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
  console.log(content.mainImage.asset.url);
  return (
    <Layout alt pageContext={pageContext}>
      <SEO
        title={`${content.title} | UCtel`}
        description={content.excerpt}
        img={content.mainImage.asset.url}
      />
      <BlogPageStyles>
        <div className="bp--header">
          <Img
            fluid={content.mainImage.asset.fluid}
            alt={content.mainImage.alt}
          />
        </div>
        <div className="bp__wrapper">
          <div className="bp--content">
            <div className="bp--content__data">
              {categories.map((cat) => (
                <h6>{cat.title}</h6>
              ))}
              <span>{content.readingTimeInMinutes} Min Read</span>
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
            <div className="bp--content__share">
              <EmailShareButton
                url={window.location.href}
                subject={content.title}
                body="Check out this amazing blog by the UCtel team"
              >
                <div className="share--box email">
                  <EmailIcon />
                </div>
              </EmailShareButton>
              <TwitterShareButton
                url={window.location.href}
                title={content.title}
              >
                <div className="share--box twitter">
                  <TwitterIcon />
                </div>
              </TwitterShareButton>
              <LinkedinShareButton
                url={window.location.href}
                summary={content.excerpt}
                source="UCtel Blog"
              >
                <div className="share--box linkedin">
                  <LinkedInIcon />
                </div>
              </LinkedinShareButton>
              <FacebookShareButton
                url={window.location.href}
                quote={content.title}
              >
                <div className="share--box facebook">
                  <FacebookIcon />
                </div>
              </FacebookShareButton>
            </div>
            <div className="bp--content__body">
              <PortableText
                blocks={content._rawBody}
                serializers={serializers}
              />
            </div>
          </div>
          <EmailSignUp />
        </div>
        <RelatedBlogs relatedBlogsData={relatedBlogsData} />
      </BlogPageStyles>
    </Layout>
  );
};

export default Blogs;

const EmailSignUp = () => {
  console.log('tewst');
  return (
    <EmailSignUpStyles>
      <div className="sticky-signup">
        <div className="email">
          <h6>Get our latest blogs straight to your inbox</h6>
          <p>Sign up to our mailing list</p>
          <form
            name="signup"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="honeypotsignup" value="singup" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              id="email"
              required
            />
            <button className="btn btn--slate" type="submit">
              <span>Submit</span>
            </button>
          </form>
        </div>
        <div className="social">
          <p>Follow us so you never miss a post...</p>
          <div className="social__wrapper">
            <a
              href="https://www.linkedin.com/company/uctel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/UCtel_Ltd "
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </EmailSignUpStyles>
  );
};

export const query = graphql`
  query SingleBlogQuery($slug: String!, $category: String!) {
    Blog: sanityPost(slug: { current: { eq: $slug } }) {
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
          url
        }
      }
    }
    Category: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { eq: $category } } }
        slug: { current: { ne: $slug } }
      }
      limit: 3
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
            url
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
