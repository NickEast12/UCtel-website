import React from 'react';
import styled from 'styled-components';
import UCtelLogo from '../assets/images/UCtel-logo.png';
import ArrowIcon from '../svgs/arrow.svg';

const MainNavWrapper = styled.nav`
  width: 100%;
  position: relative;
  background-color: none;
  z-index: 100;
`;
const Nav = () => {
  console.log('Nav');

  return (
    <MainNavWrapper>
      <MobileNav />
      <DesktopNav />
    </MainNavWrapper>
  );
};
const MobileNavStyles = styled.div`
  width: 100%;
  position: fixed;

  .m-nav {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    &__img {
      img {
        width: 150px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  width: 30px;
  margin-top: 5px;
  div {
    width: 100%;
    height: 2px;
    background-color: var(--slate);
    margin-bottom: 5px;
  }
`;
const MobileNav = () => {
  const i = 'stay';
  return (
    <MobileNavStyles>
      <div className="m-nav">
        <div className="m-nav__img">
          <img src={UCtelLogo} alt="UCtel Logo" />
        </div>
        <Hamburger
          //   onClick={() => setOpen(!open)}
          //   onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          //   open={open}
        >
          <div />
          <div />
          <div />
        </Hamburger>
      </div>
    </MobileNavStyles>
  );
};
const DesktopNavStyles = styled.div`
  @media only screen and (min-width: 0px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    display: block;
    .d-nav {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;

      &__img {
        img {
          width: 160px;
        }
      }
      &__links {
        display: flex;
        align-items: center;
        ul {
          display: flex;
          li {
            list-style: none;
            margin-right: 20px;
          }
        }
        button {
          margin-top: 0rem;
        }
      }
    }
  }
`;
const DesktopNav = () => {
  const i = 'stay';
  return (
    <DesktopNavStyles>
      <div className="d-nav">
        <div className="d-nav__img">
          <img src={UCtelLogo} alt="UCtel Logo" />
        </div>
        <div className="d-nav__links">
          <ul>
            <li>About</li>
            <li>Solutions</li>
            <li>Team</li>
            <li>Case Studies</li>
            <li>Blogs</li>
          </ul>
          <button type="button">
            <span>Find out more</span>
            <div>
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
    </DesktopNavStyles>
  );
};

export default Nav;
