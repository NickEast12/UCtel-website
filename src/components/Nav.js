import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { window, document, exists } from 'browser-monads';
import styled from 'styled-components';
//* Icons
import UCtelLogo from '../assets/images/UCtel-logo.png';
import ArrowIcon from '../svgs/arrow.svg';
import DownArrow from '../svgs/down-arrow.svg';
import FiveGIcon from '../svgs/fiveg.svg';

const MainNavWrapper = styled.nav`
  width: 100%;
  position: relative;
  background-color: none;
  z-index: 100;
  transition: all 0.3s ease;
`;
const Nav = ({ alt }) => {
  const [navbar, setNavbar] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNav);
  return (
    <MainNavWrapper className={navbar ? 'navbar active' : 'navbar'}>
      <MobileNav className="mobileNav" alt={alt} />
      <DesktopNav />
    </MainNavWrapper>
  );
};
const MobileNavStyles = styled.nav`
  width: 100%;
  position: fixed;
  background-color: ${({ open }) => (open ? 'white' : 'none')};
  transition: all 0.3s ease;
  .m-nav {
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;
    &__img {
      img {
        width: 130px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  width: 20px;
  margin-top: 7.5px;
  margin-right: 5px;
  div {
    width: 100%;
    height: 2px;
    background-color: ${({ open }) => (open ? 'var(--slate)' : 'var(--white)')};
    margin-bottom: 3px;
    transform-origin: 2.15px;
    transition: all 0.35s ease 0.3s;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(50px)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-40deg)' : 'rotate(0deg)')};
    }
  }
`;
const MobileMenuStyles = styled.div`
  width: 100%;
  height: 100%;
  transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: transform 0.5s ease;
  background-color: var(--white);
  position: fixed;
  overflow-y: scroll;
  padding-top: 6rem;
  top: 0;
  bottom: 0;
  z-index: -1;
  scroll-behavior: initial;
  .mobile__menu {
    position: relative;
    width: 85%;
    margin: 0 auto;
    ul {
      list-style: none;
      color: var(--slate);

      > li {
        padding-bottom: 1.5rem;
        font-size: var(--headingTiny);
        button {
          padding: 0.75rem 0;
          span {
            font-size: 1.1rem;
            color: var(--white);
          }
        }

        .submenu {
          display: flex;
          justify-content: space-between;
          margin: 0;
          height: ${({ active }) => (active ? '100%' : '25px')};
          svg {
            fill: var(--slate);
            width: 17px;
            transition: all 0.3s ease;
            transform: ${({ active }) =>
              active ? 'rotate(-180deg)' : 'rotate(0deg)'};
          }
        }
        .dropdown {
          overflow-y: scroll;
          height: 100%;
          max-height: ${({ active }) => (active ? '500px' : '0')};
          /* visibility: ${({ active }) => (active ? 'shown' : 'hidden')}; */

          transition: all 0.5s ease;
          li {
            padding: 0.85rem 0;
            .dropdown--box {
              display: grid;
              grid-template-columns: 1fr 80%;
              overflow-y: none;
              padding: 0.5rem 0 0 0;
              svg {
                width: 38px;
                margin-top: 0;
              }
              &__text {
                margin-top: 0px;
                span {
                  margin: 0;
                  display: block;
                  padding: 0;
                  font-size: 0.938rem;
                }

                p {
                  font-size: 0.813rem;
                }
              }
            }
            &:nth-child(3) {
              padding-bottom: 0;
            }
          }
        }
      }
    }
    li,
    a,
    span {
      font-family: Gellix-Medium;

      color: inherit;
      text-decoration: none;
    }
  }
`;
const MobileNav = ({ alt }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <MobileNavStyles open={open}>
        <div className={alt ? 'm-nav alt' : 'm-nav'}>
          <div className="m-nav__img">
            <Link to="/">
              <img src={UCtelLogo} alt="UCtel Logo" />
            </Link>
          </div>
          <Hamburger
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
            role="button"
            tabIndex={0}
            open={open}
            id="hamburger"
          >
            <div id="menuDiv" />
            <div id="menuDiv" />
            <div id="menuDiv" />
          </Hamburger>
        </div>
      </MobileNavStyles>
      <MobileMenuStyles active={active ? 1 : 0} open={open}>
        <div className="mobile__menu">
          <ul>
            <li>
              <div
                className="submenu"
                onClick={() => setActive(!active)}
                onKeyDown={() => setActive(!active)}
                role="button"
                tabIndex={0}
              >
                <span active={active ? 1 : 0}>Solutions</span>
                <DownArrow active={active ? 1 : 0} />
              </div>
              <ul className="dropdown">
                <li>
                  <Link to="/">
                    <div className="dropdown--box">
                      <FiveGIcon />
                      <div className="dropdown--box__text">
                        <span>Solution</span>
                        <p>Understand, secure, and optimize video.</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="dropdown--box">
                      <FiveGIcon />
                      <div className="dropdown--box__text">
                        <span>Solution</span>
                        <p>Understand, secure, and optimize video.</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="dropdown--box">
                      <FiveGIcon />
                      <div className="dropdown--box__text">
                        <span>Solution</span>
                        <p>Understand, secure, and optimize video.</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/about-us">Casestudies</Link>
            </li>
            <li>
              <Link to="/about-us">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/get-started">
                <button className="btn btn--main" type="button">
                  <span>Get Started</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </MobileMenuStyles>
    </>
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
            color: #ffffff;
          }
        }
        button {
          margin-top: 0;
          width: 170px;
          border: none;
          display: grid;
          border-radius: 3px;
          position: relative;
          background-color: var(--lightBlue);
          span {
            padding: 0.65rem 1rem;
            text-align: left;
            color: #ffffff;
          }
          div {
            border-radius: 0 3px 3px 0;
            right: 0;
            width: 25%;
            height: 100%;
            background-color: #386682;
            padding: 0.65rem;
            position: absolute;

            svg {
              fill: #ffffff;

              width: 12px;
              height: 12px;
              transform: rotate(180deg);
            }
          }
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
