import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../../components/functional/Image';
import SEO from '../../components/functional/SEO';
import WhiteHeaderBackground from '../../components/functional/WhiteAnimatedBackground';
import Layout from '../../components/Layout';
import CelFiSvg from '../../svgs/cel-fi-white.svg';
import CelFiSvgBlack from '../../svgs/cel-fi.svg';

const CelFi = ({ pageContext }) => {
  const i = true;
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title="Connecting NHS buildings with strong mobile network coverage| UCtel"
        description="As healthcare in the UK moves to ‘mobile first’, reliable mobile data and calling is essential to hospitals. Here’s how Cel-Fi and UCtel provided a transformative solution. "
      />
      <CaseStudyHeader />
      <main>
        <CaseStudyBody />
        {/* <PageBlogs Blogs={Blogs} /> */}
      </main>
    </Layout>
  );
};

export default CelFi;

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
        width: 80%;
        margin: 0 auto;
        .gatsby-image-wrapper {
          width: 100%;
          margin-right: auto;
        }
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
        height: 15rem;
        .gatsby-image-wrapper {
          height: 100%;
        }
      }
      &__left {
        padding: 0;
        margin: 1rem 0 0 0;
        text-align: left;
        &__img {
          width: 60%;
          margin: 0 auto 0 0;
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
            <Image
              filename="lnwh.png"
              alt="Connecting NHS buildings with strong mobile network coverage"
            />
          </div>
          <h1>London North West University Healthcare NHS Trust</h1>
        </div>
        <div className="landing__wrapper__right img-decoration">
          <Image
            filename="install3.png"
            alt="Connecting NHS buildings with strong mobile network coverage"
          />
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
    margin: 5rem auto 2rem auto;
    max-width: 1100px;
    &__card {
      border: solid 2px #d8d8d8;
      padding: 1.5rem;
      background-color: var(--white);
      position: relative;
      color: var(--slate);
      &__logo {
        svg {
          width: 90px;
        }
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
        ul {
          list-style: inside;
          margin: 0.5rem 0;
          li {
            color: var(--slate);
            margin: 1rem 0;
          }
        }
        &__img {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(2, 10rem);
          grid-template-areas:
            'a b'
            'd e';
          grid-gap: 0.5rem;
          width: 100%;
          @media only screen and (min-width: 768px) {
            grid-template-rows: repeat(2, 12rem);
          }
          div {
            .gatsby-image-wrapper {
              width: 100%;
              height: 100%;
            }
          }
          .box1 {
            grid-area: a;
          }
          .box2 {
            grid-area: b;
          }

          .box4 {
            grid-area: d;
          }
          .box5 {
            grid-area: e;
          }
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
const CaseStudyBody = () => {
  const i = true;
  return (
    <CaseStudyBodyStyles>
      <div className="csbody">
        <aside className="csbody__card">
          <div className="csbody__card__logo">
            <Image
              filename="lnwh.png"
              alt="Connecting NHS buildings with strong mobile network coverage"
            />
          </div>
          <h5>About</h5>
          <p>
            London North West University Healthcare NHS Trust is an NHS trust
            based in London, United Kingdom.
          </p>
          <hr />
          <h5>Headquarters</h5>
          <p>London, UK</p>
          <hr />
          <h5>Industry</h5>
          <p>Health care</p>
          <hr />
          <aside>
            <a
              href="https://www.clch.nhs.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn--main" type="button">
                <span>Visit website</span>
              </button>
            </a>
          </aside>
        </aside>
        <div className="csbody__main">
          <div className="csbody__main__box">
            <h3>The challenge</h3>
            <p>Two hospitals covering 46,027 sqm (495,432 sqft)</p>
            <p>
              Poor / no indoor mobile coverage for hospital staff and patients
            </p>
            <p>Implementing the solution during the COVID-19 outbreak</p>
            <p>
              London North West University Healthcare NHS Trust (LNWUH) includes
              Northwick Park Hospital and Central Middlesex Hospital. There were
              a number of buildings at each hospital that had patchy or no
              mobile coverage.
            </p>
            <p>
              Mobile communication became of particular importance during the
              COVID-19 outbreak, with Northwick Park Hospital being particularly
              hard-hit.
            </p>
            <p>Key requirements for mobile technology included:</p>
            <ul>
              <li>
                Accessing digital patient records on tablets and mobile phones
                (particularly important for outpatients to specialist units such
                as diabetes management clinics and maternity services)
              </li>
              <li>
                Communication between staff (especially those on emergency call)
              </li>
              <li>
                Communication between patients and their next of kin (something
                that rapidly became a priority as coronavirus prohibited
                visitors to wards)
              </li>
              <li>
                Organisation and digital planning (a rising number of Nurses now
                use mobile devices to plan rotas and patient visits)
              </li>
              <p>
                The initial requirement was to provide coverage on a single
                network but following an initial single network deployment this
                was expanded to cover all four UK mobile networks.
              </p>
            </ul>
          </div>
          <div className="csbody__main__box">
            <h3>The solution</h3>
            <p>
              LNWUH approached Cisilion as a leading systems integrator to see
              if they had a solution to their in-building mobile coverage
              problems. Cisilion worked with UCtel, a Cel-Fi partner, who
              proposed a Cel-Fi QUATRA solution.
            </p>
            <p>
              Due to the size and shapes of the building at the two hospitals,
              two different solutions were proposed.
            </p>
            <p>
              For Northwick Park Hospital, one building (6,117sqm or 65,843sqft)
              required two QUATRA systems per network and a second building
              (3,410sqm or 36,706sqft) needed one QUATRA system per network to
              provide the coverage needed. The Central Middlesex Hospital
              building covered a much larger area with 36,500 sqm split over the
              three floors. In this case a hybrid QUATRA and passive DAS
              solution with twelve systems in total were used to balance
              coverage, performance and cost.
            </p>
          </div>
          <div className="csbody__main__box">
            <h3>The installation</h3>
            <p>
              During initial surveys, suitable locations were identified on the
              roofs of each of the buildings for the donor antennas and a range
              of antennas were tested to ensure the best signal was captured
              from each network.
            </p>
            <p>
              Cabling was installed through the buildings with CAT-6 throughout
              for the full QUATRA solution and CAT-6 and COAX cabling for the
              passive DAS segments. The CU’s were installed below the ceiling
              tiles and the passive antennas above the ceilings for neatness.
            </p>
            <p>
              Prior to the installation, there was patchy coverage on some
              networks and no coverage at all on any network in some areas.
            </p>
            <p>
              Post-installation surveys and walk tests showed the impact that
              the solution had, with full 4G coverage throughout and the ability
              to hold video calls whilst walking the entire building.
            </p>
            <p>
              Central Middlesex Hospital installation (36,500m² or around
              400,000ft²)
            </p>
            <div className="csbody__main__box__img">
              <div className="box1">
                <Image filename="install1.jpg" alt="" />
              </div>
              <div className="box2">
                <Image filename="install2.jpg" alt="" />
              </div>

              <div className="box4">
                <Image filename="install5.jpg" alt="" />
              </div>
              <div className="box5">
                <Image filename="install4.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="csbody__main__box">
            <h3>The result</h3>
            <p>
              The hospital now has full mobile coverage in the areas where they
              need it to support clinicians and patients. The solution is
              monitored and supported via a managed service from Cisilion and
              UCtel, ensuring that coverage is maintained and any incidents or
              changes in the environment are quickly addressed.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyBodyStyles>
  );
};
