import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../../components/functional/SEO';
import Layout from '../../components/Layout';
import WhiteHeaderBackground from '../../components/functional/WhiteAnimatedBackground';
import NHSsvg from '../../svgs/nhs.svg';
import Image from '../../components/functional/Image';

const NHSCaseStudy = ({ pageContext }) => {
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

export default NHSCaseStudy;

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
            <NHSsvg />
          </div>
          <h1>Connecting NHS buildings with strong mobile network coverage</h1>
        </div>
        <div className="landing__wrapper__right img-decoration">
          <Image
            filename="nhs.jpeg"
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
            <NHSsvg />
          </div>
          <h5>About</h5>
          <p>
            Based across eleven London boroughs and Hertfordshire, this NHS
            Trust provides community health services to more than two million
            people.
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
            <p>
              An NHS trust in the UK was in dire need of strong, reliable mobile
              network signal at two of their hospitals.
            </p>
            <p>
              With one location being badly affected by coronavirus, the project
              had to be carried out fast, without severe disruption to either
              premises.
            </p>
            <p>
              Here’s how UCtel implemented Cel-Fi’s mobile signal boosting
              technology to deliver an effective, speedy solution.
            </p>
          </div>
          <div className="csbody__main__box">
            <h3>The case for better mobile calls and data coverage</h3>
            <p>
              Like most healthcare providers in the UK, the trust has started to
              move towards a ‘mobile first’ strategy, with everything from
              patient records to colleague communications relying increasingly
              on mobile connections.
            </p>
            <p>
              Mobile has become such an integral part of healthcare, especially
              during the COVID-19 outbreak, that the NHS has{' '}
              <span>
                <a
                  href="https://www.nhsx.nhs.uk/information-governance/guidance/use-mobile-devices-patients-hospitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click here"
                >
                  released official guidance
                </a>
              </span>
              on how staff and patients can use devices safely.
            </p>
            <p>
              Digital services that need mobile data and calling to function
              include:
            </p>
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
            </ul>
          </div>
          <div className="csbody__main__box">
            <h3>Why WiFi and external mobile signal doesn’t always work </h3>
            <p>
              While WiFi can offer a partial solution, it’s often inconsistent
              across an entire hospital building, especially for hospitals that
              are arranged in blocks with walkways and outside spaces between
              wards and facilities. These ‘drop zones’ are not only
              inconvenient, but can delay emergency communications.
            </p>
            <p>
              As for relying on existing network coverage, healthcare buildings
              are among the worst affected by poor mobile coverage, with 82% of
              workers reporting bad signal in a recent study. While this can be
              due to location, it is mostly thanks to building layouts and
              materials such as brick, glass and metal obscuring signal.
            </p>
          </div>
          <div className="csbody__main__box">
            <h3>A fast, efficient solution with Cel-Fi</h3>
            <p>
              As one of the hospitals was particularly badly hit by coronavirus,
              access to digital services – for staff and patients alike – had
              suddenly become a significant priority. The solution needed to be
              fast, without causing disruption to busy wards.
            </p>
            <p>
              By installing Cel-Fi QUATRA signal boosters, UCtel could quickly
              bring reliable coverage from multiple networks into the premises.
            </p>
            <p>
              Surveys were carried out to determine the quantity and location of
              the Cel-Fi QUATRA units to provide the coverage needed. UCtel’s
              team of engineers installed new cabling throughout the building to
              connect the system and tuned it to deliver the optimal signal.
            </p>
            <p>
              Cel-Fi does not interfere with existing wireless products, making
              it safe to use alongside hospital equipment.
            </p>
          </div>

          <div className="csbody__main__box">
            <h3>The result</h3>
            <p>
              The new solution has transformed a user experience where there was
              either no coverage or a patchy, weak signal, to a consistent
              coverage with a high data throughput.
            </p>
            <p>
              Both hospitals now have reliable network coverage, allowing
              healthcare professionals, administrators and patients to access
              digital services and stay connected.
            </p>
            <p>
              Authorised by 200 mobile carriers, Cel-Fi also automatically
              adjusts to changing network conditions, so that the hospitals can
              rely on network coverage regardless of environmental changes.
            </p>
            <p>
              To discuss whether Cel-Fi could be the network solution your
              building needs, email{' '}
              <a
                href="mailto:ivor.nicholls@uctel.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ivor.nicholls@uctel.co.uk
              </a>{' '}
              or call 0333 344 4417. We can help you identify what’s causing
              your in-building signal problems and find the right solution for
              you.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyBodyStyles>
  );
};
