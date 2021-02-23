import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window } from 'browser-monads';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import WhiteHeaderBackground from '../components/functional/WhiteAnimatedBackground';
import PageBlogs from '../components/PageComponents/PageBlogs';

const CaseStudy = ({ data, pageContext }) => {
  const Case = data.sanityCasestudies;
  const Blogs = data.AllBlogs.nodes;
  console.log(Blogs);
  return (
    <Layout alt pageContext={pageContext}>
      <CaseStudyHeader data={Case} />
      <main>
        <CaseStudyBody data={Case} />
        <PageBlogs Blogs={Blogs} />
      </main>
    </Layout>
  );
};

export default CaseStudy;

const CaseStudyHeaderStyles = styled.header`
  width: 100%;
  position: relative;
  height: 100%;
  .landing__wrapper {
    position: relative;
    z-index: 5;
    width: 90%;
    margin: 0 auto;
    padding-top: 3rem;
    &__right {
      width: 250px;
      margin: 0 auto;
      margin-bottom: 3rem;
    }
    &__left {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
      &__img {
        width: 185px;
        padding: 1rem 0;
      }
      h1 {
        font-size: 1.75rem;
        font-family: Gellix-SemiBold;
        color: var(--slate);
      }
    }
  }
`;
const CaseStudyHeader = ({ data }) => {
  const [isDesktop, setDesktop, setPoints] = useState(window.innerWidth > 1200);
  const updateScreenSize = () => {
    setDesktop(window.innerWidth > 1280);
  };
  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  });
  return (
    <CaseStudyHeaderStyles>
      <div className="landing__wrapper">
        <div className="landing__wrapper__left">
          <div className="landing__wrapper__left__img">
            <Img fluid={data.logo.asset.fluid} alt={data.logo.alt} />
          </div>
          <h1>{data.mainTitle}</h1>
        </div>
        <div className="landing__wrapper__right img-decoration">
          <Img fluid={data.mainImage.asset.fluid} alt={data.mainImage.alt} />
        </div>
      </div>
      {isDesktop ? (
        <WhiteHeaderBackground points="20" distance="20" spacing="20" />
      ) : (
        <WhiteHeaderBackground />
      )}
    </CaseStudyHeaderStyles>
  );
};

const CaseStudyBodyStyles = styled.main`
  width: 100%;
  .csbody {
    width: 90%;
    margin: 0 auto;
    &__card {
      border: solid 2px #d8d8d8;
      padding: 1.5rem;
      color: var(--slate);
      &__logo {
        width: 180px;
        margin-bottom: 1.5rem;
      }
      h5 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
      hr {
        background-color: var(--lightBlue);
        border: none;
        height: 2px;
        margin: 1.5rem 0;
      }
      p {
        font-size: 1.1rem;
      }
      button {
        width: 70%;
      }
    }
    &__main {
      padding: 2rem 0 3rem 0;
      width: 90%;
      margin: 0 auto;
      .quote {
        padding-bottom: 2rem;
        div {
          position: relative;
          content: '';
          width: 100%;
          height: 3rem;
          span {
            color: var(--lightBlue);
            font-size: 5rem;
            position: absolute;
          }
        }
        h5 {
          color: var(--lightBlue);
          font-size: 1.45rem;
          margin-top: 0.85rem;
        }
        h6 {
          font-size: 1.25rem;
          color: var(--slate);
          margin-top: 0.25rem;
        }
      }
      &__box {
        margin-bottom: 2rem;

        h3 {
          font-size: 1.75rem;
          color: var(--slate);
        }
        p {
          margin-top: 1rem;
        }
      }
    }
  }
`;
const CaseStudyBody = ({ data }) => {
  const i = true;
  return (
    <CaseStudyBodyStyles>
      <div className="csbody">
        <aside className="csbody__card">
          <div className="csbody__card__logo">
            <Img fluid={data.logo.asset.fluid} alt={data.logo.alt} />
          </div>
          <h5>About</h5>
          <p>{data.about}</p>
          <hr />
          <h5>Headquarters</h5>
          <p>{data.headquarters}</p>
          <hr />
          <h5>Industry</h5>
          <p>{data.industry}</p>
          <hr />
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn--main" type="button">
              <span>Visit website</span>
            </button>
          </a>
        </aside>
        <div className="csbody__main">
          <div className="csbody__main__box">
            <h3>The Challenge</h3>
            <p>{data.challenge}</p>
          </div>
          <div className="csbody__main__box quote">
            <div>
              <span>"</span>
            </div>
            <h3>{data.quote}</h3>
            <h5>{data.clientname}</h5>
            <h6>{data.clientposition}</h6>
          </div>
          <div className="csbody__main__box">
            <h3>The Solution</h3>
            <p>{data.solution}</p>
          </div>
          <div className="csbody__main__box">
            <h3>The Result</h3>
            <p>{data.result}</p>
          </div>
        </div>
      </div>
    </CaseStudyBodyStyles>
  );
};

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    sanityCasestudies(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      mainTitle
      logo {
        alt
        asset {
          fluid(maxWidth: 150) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mainImage {
        alt
        asset {
          fluid(maxWidth: 350) {
            ...GatsbySanityImageFluid
          }
        }
      }
      clientname
      clientposition
      about
      industry
      headquarters
      link
      result
      quote
      challenge
      solution
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