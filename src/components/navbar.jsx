import PropTypes from 'prop-types';
import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import lottie from 'lottie-web';
import gsap from 'gsap';
import theme from '../styles/theme';

import hamburger from '../static/animations/hamburgermenu.json';

const { colors, mediaQueries } = theme;

const logo = require('../static/trademarks/logo.svg');

const Nav = styled.nav`
  font-family: ${(theme.typography.heading.font).join(',')};
  display: flex;
  padding: 0.1em 1em;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10;
  color: ${colors.white};
  padding: 0.66em;
  top: 0;
  transform: 0.3s ease-in;
  width: 100vw;
  background: transparent;
  .hamburger-btn {
    display: none;
    @media ${mediaQueries.sm} {
      display: inline-block;
      margin: 0 !important;
    }
  }
`;

const NavLinksDesktop = styled.ul`
  display: none;
  @media ${mediaQueries.xs} {
    display: block;
    text-decoration: none;
    list-style: none;
    margin: 0 0.5em;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    li {
      line-height: 1.22em;
      font-weight: bold;
      color: transparent;
      position: relative;
    }
  }
`;

const NavLinkBase = styled.li`
  text-decoration: none;
  transition: 0.5s ease;
  text-decoration: none;
  margin: 1em;
  position: relative;
  overflow: hidden;
  .nav-link-content {
    position: relative;
    display: inline-block;
    @media ${mediaQueries.xs} {
      transform: none;
    }
  }
  &:before {
      content: '';
      left: 0;
      width: 100%;
      height: 50%;
      top: 25%;
      background: ${colors.yellow};
      position: absolute;
      z-index: -1;
      transition: 0.2s ease-in-out;
      transform: translate(-0.3em, 0.4em) scaleX(0);
      display: inline-block;
  }
  &:hover {
    &:before {
      transform:  translate(-0.3em, 0.4em) scaleX(1);
    }
  }
  &:active{
    a {
      color: ${colors.primairy};
      -webkit-text-stroke: 0.005em ${colors.primairy};
    }
  }
  &:focus {
    color: ${colors.white};
    a {
      color: ${colors.white};
    }
  }
  a {
    color: ${colors.textDark};
    opacity: 0.7;
    text-decoration: none;
    &:hover {
      opacity: 1;
    }
  }
`;


const Logo = styled.img`
  width: 4em;
  margin: 0;
`;


const HamburgerButton = styled.a`
  width: 3em;
  height: 3em;
  z-index: 10;
  cursor: pointer;
  display: inline-block;

  & > * {
    width: 3em;
  }
  @media ${mediaQueries.xs} {
    display: none;
    visibility: hidden;
  }
`;

const MobileMenuOverlay = styled.div`
  background: ${colors.bgLight};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: self-start;
  opacity: 0;
  pointer-events: 0;
  @media ${mediaQueries.xs} {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin: 1em;;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 40em;
  margin-top: 15vh;
  text-align: center;
  li {
    width: 100%;
    margin: 0.33em 0;
    a {
      color: ${colors.textLight};
      text-align: center;
      font-size: 4em;
    }
  }
`;

let btn;
const navOverlay = createRef();
const hamburgerBtn = createRef();
const navLinks = [];

const NavLink = (props) => {
  const { title, to } = props;
  const appendElement = element => navLinks.push(element);
  return (
    <NavLinkBase>
      <Link ref={appendElement} className="nav-link-content" duration={1} to={to}>
        {title}
      </Link>
    </NavLinkBase>
  );
};

const navTl = gsap.timeline();

const NavLinksContent = () => (
  <>
    <NavLink className="nav-link" title="Home" to="/" />
    <NavLink className="nav-link" title="Work" to="/work" />
    <NavLink className="nav-link" title="About" to="/about" />
    <NavLink className="nav-link" title="Contact" to="/contact" />
  </>
);

const MobileMenu = () => (
  <MobileMenuOverlay ref={navOverlay} className="menu-overlay">
    <MobileNavLinks className="nav-links">
      <NavLinksContent />
    </MobileNavLinks>
  </MobileMenuOverlay>
);

const Navbar = ({ siteTitle }) => {
  const [active, setActive] = useState(false);


  useEffect(() => {
    setActive(false);
    btn = lottie.loadAnimation({
      container: hamburgerBtn.current,
      renderer: 'svg',
      animationData: hamburger,
      loop: false,
    });
    btn.setSpeed(2);
    navTl.fromTo(navOverlay.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.2,
    }, 0)
      .fromTo(navLinks, {
        transform: 'translateY(5em)',
        pointerEvents: 'none',
      }, {
        transform: 'translateY(0)',
        duration: 0.3,
        pointerEvents: 'all',
        stagger: 0.05,
      }, '<0.2');
    navTl.pause();
  },
  []);

  useEffect(() => {
    if (active) {
      btn.setDirection(1);
    } else {
      navTl.reverse();
      btn.setDirection(-1);
    }
    btn.play();
  });

  const handleClick = () => {
    setActive(!active);
    navTl.play();
  };

  return (
    <>
      <Nav>
        <div>
          <Link to="/">
            <Logo src={logo} alt={siteTitle} />
          </Link>
        </div>
        <NavLinksDesktop>
          <NavLinksContent />
        </NavLinksDesktop>
        <MobileMenu />
        <HamburgerButton ref={hamburgerBtn} onClick={handleClick} />
        { active
            && <MobileMenu />
          }
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: '',
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

NavLink.defaultProps = {
  to: '#',
};


export default Navbar;
