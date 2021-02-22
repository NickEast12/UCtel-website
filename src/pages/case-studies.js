import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import WhiteHeader from '../components/PageComponents/WhiteHeader';

const CaseStudies = ({ data, pageContext }) => {
  const Casestudiesdata = data.allCaseStudies.nodes;
  return (
    <Layout alt pageContext={pageContext}>
      <WhiteHeader
        title="Case studies"
        description="Learn how UCtel drives growth and results for any business through these in-depth case studies and customer stories."
      />
      <main>
        <div>
          {Casestudiesdata.map((casestudy) => (
            <SingleCaseStudy key={casestudy._id} data={casestudy} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default CaseStudies;

const SingleCaseStudyStyles = styled.div`
  width: 100%;
  .cs {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    &--content {
      width: 100%;
      margin: 0 auto;

      &--img {
        padding-top: 1rem;
        width: 185px;
        margin: 0 auto;
      }
      h3 {
        margin: 1rem 0;
        text-align: center;
        font-size: 1.6rem;
        color: var(--slate);
      }
      &--btn {
        width: 70%;
        margin: 0 auto;
      }
    }
    &--card {
      background-color: var(--white);
      margin: 1.5rem 0;
      z-index: 5;
      &--img {
        height: 10rem;
        .gatsby-image-wrapper {
          height: 10rem;
        }
      }
      &--content {
        border: solid 3px #2d3c41;
        border-top: none;
        padding: 1rem;
        background-color: var(--white);
        z-index: 5;
        .quote {
          font-size: 1.2rem;
          color: var(--lightBlue);
        }
        p {
          font-size: 1.2rem;
          font-family: Gellix-Medium;
        }
        h5 {
          font-size: 1.3rem;
          font-family: Gellix-SemiBold;
          color: var(--lightBlue);
          margin-top: 1rem;
        }
        h6 {
          font-size: 1.1rem;
          color: var(--slate);
        }
      }
    }
  }
`;
const SingleCaseStudy = ({ data, left }) => {
  console.log(data);
  return (
    <SingleCaseStudyStyles>
      <div className={left ? ' cs cs-left' : ' cs cs-right'}>
        <div className="cs--content">
          <div className="cs--content--img">
            <Img fluid={data.logo.asset.fluid} alt={data.logo.alt} />
          </div>
          <h3>{data.mainTitle}</h3>
          <div className="cs--content--btn">
            <Link to={`/case-studies/${data.slug.current}`}>
              <button className="btn btn--main" type="button">
                <span>Read more</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="cs--card img-decoration">
          <div className="cs--card--img">
            <Img fluid={data.mainImage.asset.fluid} alt={data.mainImage.alt} />
          </div>
          <div className="cs--card--content">
            <p>
              <span className="quote">"</span>
              {data.quote}
              <span className="quote">"</span>
            </p>
            <h5>{data.clientname}</h5>
            <h6>{data.clientposition}</h6>
          </div>
        </div>
      </div>
    </SingleCaseStudyStyles>
  );
};

export const query = graphql`
  query CaseStudyPageQuery {
    allCaseStudies: allSanityCasestudies {
      nodes {
        _id
        mainTitle
        slug {
          current
        }
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
        quote
        clientname
        clientposition
      }
    }
  }
`;
