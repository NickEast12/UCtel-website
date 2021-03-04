import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { window, document, exists } from 'browser-monads';
import styled from 'styled-components';
//* Icons
import UCtelLogo from '../assets/images/UCtel-logo.png';
import DownArrow from '../svgs/down-arrow.svg';
import FiveGIcon from '../svgs/fiveg.svg';
import InBuildingIcon from '../svgs/smartphone.svg';
import CommunicationsIcon from '../svgs/connection.svg';

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
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNav);
  return (
    <MainNavWrapper className={navbar ? 'navbar active' : 'navbar'}>
      <MobileNav className="mobileNav" alt={alt} />
      <DesktopNav className={navbar ? 'navbar active' : 'navbar'} alt={alt} />
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
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  width: 20px;
  margin-top: 7.5px;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
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
    &:focus {
      outline: none;
    }
    ul {
      list-style: none;
      color: var(--slate);
      > li {
        padding-bottom: 1.5rem;
        font-size: var(--headingTiny);
        button {
          padding: 0.75rem 0;
          width: 100% !important;
          max-width: 100% !important;
          span {
            font-size: 1.1rem;
            color: var(--white);
          }
        }

        .submenu {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          &:focus {
            outline: none;
          }
          display: flex;
          justify-content: space-between;
          margin: 0;
          height: ${({ active }) => (active ? '25px' : '25px')};
          svg {
            fill: var(--slate);
            width: 17px;
            transition: all 0.3s ease;
            transform: ${({ active }) =>
              active ? 'rotate(-180deg)' : 'rotate(0deg)'};
          }
        }
        .dropdown {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
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
              align-items: center;
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
                  <Link to="/solutions/in-building-mobile-solutions">
                    <div className="dropdown--box">
                      <InBuildingIcon />
                      <div className="dropdown--box__text">
                        <span>In-building mobile signal solutions</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/private-5g">
                    <div className="dropdown--box">
                      <FiveGIcon />
                      <div className="dropdown--box__text">
                        <span>Private 5G</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/unified-communications-and-contact-centre">
                    <div className="dropdown--box">
                      <CommunicationsIcon />
                      <div className="dropdown--box__text">
                        <span>Unified communications</span>
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
              <Link to="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/get-started">
                <button className="btn btn--main" type="button">
                  <span>Get started</span>
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
  @media only screen and (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    display: block;
    transition: all 0.3s ease;
    .d-nav {
      max-width: 1100px;
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      transition: all 0.3s ease;

      &__img {
        img {
          width: 160px;
        }
        margin-right: 20px;
      }
      &__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > ul {
          position: relative;
          display: flex;
          > li {
            list-style: none;
            margin-right: 20px;
            color: #ffffff;
            font-size: 1rem;
            transition: all 0.3s ease;
          }
          .none {
            display: none;
          }
          .desktop--submenu {
            position: absolute;
            top: 1rem;
            left: -65px;
            width: 100%;
            margin: 0;
            padding: 1rem 0 0 0 !important;
            display: none;
            /* overflow: hidden; */
            @media only screen and (min-width: 1280px) {
              left: -60px;
              width: 80%;
            }
            &__wrapper {
              /* opacity: 0; */
              border-radius: 4.5px;
              background-color: var(--white);
              width: 65%;
              margin: 0 auto;
              box-shadow: 0 2.4rem 4.4rem 0 rgb(5 22 70 / 15%);
              .no-border {
                border: none;
              }
              ul {
                list-style: none;
                position: relative;
                &::after {
                  width: 50px;
                  height: 50px;
                  position: absolute;
                  top: 0;
                  left: 40%;
                  content: '';
                  z-index: -2;
                  background-color: var(--white);
                  transform: rotate(45deg);
                  @media only screen and (min-width: 1280px) {
                    left: 42%;
                  }
                }
              }

              &--box {
                width: 100%;
                display: flex;
                border-bottom: 1px solid #eee;
                padding: 1rem 0.85rem;
                align-items: center;
                grid-template-columns: 1fr 1fr;
                svg {
                  width: 35px !important;
                  margin-right: 20px;
                }
                p {
                  font-size: 1rem;
                  font-family: Gellix-Medium;
                  text-align: left;
                }
              }
            }
          }
        }
      }
      .desk-submenu-hover {
        cursor: pointer !important;
      }
      &__btn {
        width: 130px;

        button {
          width: 100%;
          padding: 0.65rem 0;
          margin: 0;
        }
      }
      .desk-submenu-hover:hover .desktop--submenu {
        /* overflow: visible;
        opacity: 1 !important;
        overflow: visible !important;
        max-width: 50rem !important; */
        display: block;
      }
      /* .desktop--submenu:hover .desktop--submenu__wrapper {
        overflow: visible;
        opacity: 1 !important;
        overflow: visible !important;
        max-width: 50rem !important;
      } */
    }
  }
  @media only screen and (min-width: 1280px) {
    .d-nav {
      &__btn {
        width: 180px;
        button {
          width: 100%;
        }
      }
    }
    .none {
      display: block !important;
    }
  }
`;
const DesktopNav = ({ alt }) => {
  const i = 'stay';
  return (
    <DesktopNavStyles id="desktopNav">
      <div className={alt ? 'd-nav alt-desktopNav' : 'd-nav'}>
        <div className="d-nav__img">
          <Link to="/">
            <img src={UCtelLogo} alt="UCtel Logo" />
          </Link>
        </div>
        <div className="d-nav__links">
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li className="desk-submenu-hover">
              Solutions
              <div className="desktop--submenu">
                <div className="desktop--submenu__wrapper">
                  <ul>
                    <li>
                      <Link to="/solutions/in-building-mobile-solutions">
                        <div className="desktop--submenu__wrapper--box">
                          <section>
                            <InBuildingIcon />
                          </section>
                          <p>In-building mobile signal solutions</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/private-5g">
                        <div className="desktop--submenu__wrapper--box">
                          <section>
                            <FiveGIcon />
                          </section>
                          <p>Private 5G</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/unified-communications-and-contact-centre">
                        <div className="desktop--submenu__wrapper--box no-border">
                          <section>
                            <CommunicationsIcon />
                          </section>
                          <p>Unified communication</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/case-studies">Case studies</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="none">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="d-nav__btn">
          <Link to="/get-started">
            <button type="button" className="btn btn--main">
              <span>Get started</span>
            </button>
          </Link>
        </div>
      </div>
    </DesktopNavStyles>
  );
};

export default Nav;
