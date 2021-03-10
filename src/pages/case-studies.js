import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import WhiteHeader from '../components/PageComponents/WhiteHeader';
import SEO from '../components/functional/SEO';
import Image from '../components/functional/Image';
import NHSSvg from '../svgs/nhs.svg';

const CaseStudies = ({ data, pageContext }) => {
  const Casestudiesdata = data.allCaseStudies.nodes;

  return (
    <Layout pageContext={pageContext}>
      <SEO
        title="Case Studies | Unified Communications Solutions | UCtel"
        description="Check out our case studies to find out how our unified communications solutions have helped multiple businesses drive productivity, growth and success"
      />
      <WhiteHeader
        title="Case studies"
        description="Learn how UCtel drives growth and results for any business through these in-depth case studies and customer stories"
      />
      <main>
        <CaseStudiesStyles>
          {Casestudiesdata.map((casestudy) => (
            <SingleCaseStudy key={casestudy._id} data={casestudy} />
          ))}
          <SingleCaseStudyNoCMS
            mainTitle="Connecting NHS buildings with strong mobile network coverage"
            slug="connecting-NHS-buildings-with-strong-mobile-network-coverage"
            image="nhs.jpeg"
            alt="Connecting NHS buildings with strong mobile network coverage"
          >
            <NHSSvg />
          </SingleCaseStudyNoCMS>
          <SingleCaseStudyNoCMS
            mainTitle="London North West University Healthcare NHS Trust"
            slug="london-north-west-university-healthcare-NHS-trust"
            image="install3.png"
            alt="London North West University Healthcare NHS Trust"
          >
            <Image
              filename="lnwh.png"
              alt="Connecting NHS buildings with strong mobile network coverage"
            />
          </SingleCaseStudyNoCMS>
        </CaseStudiesStyles>
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
        .gatsby-image-wrapper {
          img {
            object-fit: contain !important;
          }
        }
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
        text-align: center;
        @media only screen and (min-width: 768px) {
          text-align: left;
        }
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
          object-fit: fill !important;
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
          margin-top: 0.25rem;
          color: var(--slate);
        }
      }
    }
    @media only screen and (min-width: 375px) {
      &--card {
        width: 90%;
        margin: 2rem auto;
      }
    }
  }
  .static {
    margin: 1rem auto;
    .cs--card {
      &--img {
        height: 14rem;
        @media only screen and (min-width: 768px) {
          height: 16rem;
        }
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
    }
  }
`;
const SingleCaseStudy = ({ data, left }) => {
  const i = true;
  return (
    <SingleCaseStudyStyles id="caseFlex">
      <div className={left ? 'cs cs-left' : 'cs cs-right'}>
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
const SingleCaseStudyNoCMS = ({
  left,
  mainTitle,
  slug,
  image,
  alt,
  children,
}) => {
  const i = true;
  return (
    <SingleCaseStudyStyles id="caseFlex">
      <div className={left ? 'cs cs-left static' : 'cs cs-right static'}>
        <div className="cs--content">
          <div className="cs--content--img">{children}</div>
          <h3>{mainTitle}</h3>
          <div className="cs--content--btn">
            <Link to={`/case-studies/${slug}`}>
              <button className="btn btn--main" type="button">
                <span>Read more</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="cs--card img-decoration ">
          <div className="cs--card--img">
            <Image filename={image} alt={alt} />
          </div>
        </div>
      </div>
    </SingleCaseStudyStyles>
  );
};
const CaseStudiesStyles = styled.section`
  width: 100%;
  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;
    max-width: 900px;
    margin: 0 auto;
    #caseFlex {
      display: flex;
      &:nth-child(even) {
        .cs {
          flex-direction: row-reverse;
          justify-content: space-between;
          &--content {
            margin-left: 3rem;
            &--img {
              margin: 0 0 0 0;
              padding-top: 0;
            }
            h3 {
              text-align: left;
            }
            &--btn {
              margin: 0;
            }
          }
        }
      }
      &:nth-child(odd) {
        .cs {
          &--content {
            margin-right: 1rem;
            &--img {
              margin: 0 0 0 0;
              padding-top: 0;
            }
            h3 {
              text-align: left;
            }
            &--btn {
              margin: 0;
            }
          }
        }
      }
    }
    .cs {
      display: flex;
      align-items: center;
      &--card {
        max-width: 500px;
      }
    }
    .cs {
      width: 80%;
    }
  }
`;
export const query = graphql`
  query CaseStudyPageQuery {
    allCaseStudies: allSanityCasestudies(
      sort: { fields: _updatedAt, order: DESC }
    ) {
      nodes {
        _id
        _createdAt
        _updatedAt
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
