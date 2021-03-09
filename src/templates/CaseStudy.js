import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window } from 'browser-monads';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import WhiteHeaderBackground from '../components/functional/WhiteAnimatedBackground';
import PageBlogs from '../components/PageComponents/PageBlogs';
import SEO from '../components/functional/SEO';

const CaseStudy = ({ data, pageContext }) => {
  const Case = data.sanityCasestudies;
  const Blogs = data.AllBlogs.nodes;
  console.log(Blogs);
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={data.sanityCasestudies.title}
        description={data.sanityCasestudies.mainTitle}
        img={data.sanityCasestudies.mainImage.url}
      />
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
    max-width: 1100px;
    z-index: 5;
    width: 90%;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    &__right {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 3rem;
    }
    &__left {
      width: 90%;

      margin: 0 auto;
      padding: 2rem 0;
      text-align: center;
      &__img {
        width: 185px;
        padding: 1rem 0;
        margin: 0 auto;
      }
      h1 {
        font-size: 1.75rem;
        color: var(--white);
        margin: 1rem 0;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .landing__wrapper {
      display: flex;
      padding-top: 10rem;
      width: 80%;
      &__right {
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
      &__left {
        padding: 0;
        margin: 0;
        &__img {
          padding: 0.5rem 0 0 0;
          margin: 0;
        }
        h1 {
          text-align: left;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    /* margin-top: -3rem; */
    .landing__wrapper {
      width: 70%;
      padding-top: 9.5rem;
      &__right {
        height: 90%;
        max-width: 450px;
        .gatsby-image-wrapper {
          height: 90%;
        }
      }
      &__left {
        margin: 0 2rem 0 0;
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
        <WhiteHeaderBackground points="10" distance="20" spacing="15" />
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
    margin: 5rem auto 0 auto;
    max-width: 1100px;
    &__card {
      border: solid 2px #d8d8d8;
      padding: 1.5rem;
      background-color: var(--white);
      position: relative;
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
        font-size: 0.95rem;
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
  @media only screen and (min-width: 414px) {
    padding-top: 0rem;
  }
  @media only screen and (min-width: 768px) {
    .csbody {
      width: 80%;
      display: flex;
      display: grid;
      grid-template-columns: 40% 1fr;
      &__card {
        position: sticky;
        top: 6rem;
        height: 40rem;
      }
      &__main {
        padding-top: 0;
        flex-grow: 2;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .csbody {
      width: 70%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .csbody {
      width: 70%;
      grid-template-columns: 35% 1fr;
      &__card {
        height: 38rem;
      }
      &__main {
        &__box {
          margin-bottom: 4rem;
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
          <aside>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn--main" type="button">
                <span>Visit website</span>
              </button>
            </a>
          </aside>
        </aside>
        <div className="csbody__main">
          <div className="csbody__main__box">
            <h3>The challenge</h3>
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
            <h3>The solution</h3>
            <p>{data.solution}</p>
          </div>
          <div className="csbody__main__box">
            <h3>The result</h3>
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
            url
          }
        }
      }
    }
  }
`;
