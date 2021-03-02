import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogSorter from '../components/functional/BlogSorter';
import Layout from '../components/Layout';
import SingleBlog from '../components/PageComponents/SingleBlog';
import WhiteLandingPage from '../components/PageComponents/WhiteHeader';
import TwitterIcon from '../svgs/twitter.svg';
import InstagramIcon from '../svgs/instagram.svg';
import LinkedInIcon from '../svgs/linkedin.svg';

const BlogGridStyles = styled.div`
  width: 100%;
  .bg {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 1100px;
    @media only screen and (min-width: 375px) {
      width: 85%;
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 30% 1fr;
      width: 90%;

      grid-template-areas: 'a b';
      grid-gap: 1rem;
      &--blogs {
        grid-area: b;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
      .sticky-signup {
        position: sticky;
        top: 5rem;
        grid-area: a;

        .email {
          width: 100%;
        }
      }

      .social {
        text-align: left;
      }
    }
  }
`;

const Blogs = ({ pageContext, data }) => {
  const blogs = data.AllBlogs.nodes;
  console.log(blogs);
  return (
    <Layout alt pageContext={pageContext}>
      <WhiteLandingPage
        title={`${pageContext.title || 'UCtel blogs'}`}
        description="Browse our industry insights to help you make the best decision for your business"
      />
      <main>
        <BlogSorter />
        <BlogGridStyles>
          <div className="bg">
            <div className="bg--blogs">
              {blogs.map((blog) => (
                <SingleBlog blog={blog} />
              ))}
            </div>
            <EmailSignUp />
          </div>
        </BlogGridStyles>
      </main>
    </Layout>
  );
};

export default Blogs;

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
            action="/email-signup-sucess"
          >
            <input type="hidden" name="form-name" value="signup" />
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
