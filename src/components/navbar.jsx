import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import styled from 'styled-components';
import Lottie from 'react-lottie';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';
import theme from '../styles/theme';

import hamburger from '../static/animations/hamburgermenu.json';


const { colors, mediaQueries } = theme;

const logo = require('../static/trademarks/logo.svg');

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10;
  color: ${colors.white};
  padding-left: 0.66em;
  top: 0;
  transform: 0.3s ease-in;
  width: 100vw;
  background: ${colors.white};
  transform: translateY(${props => (props.hide ? '-100%' : '0')});
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
    margin: 0 1em;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    li {
      line-height: 1.22em;
      font-size: 1.22rem;s
      font-weight: 300;
      color: transparent;
      position: relative;
    }
  }

`;

const NavLinkBase = styled.li`
  text-decoration: none;
  transition: 0.1s ease;
  text-decoration: none;
  margin: 1em 1.33em;
  position: relative;
  &:before {
      content: '';
      left: 0.2em;
      width: 100%;
      height: 2px;
      bottom: 0;
      background: ${colors.black};
      position: absolute;
      z-index: -1;
      transition: 0.1s ease-in-out;
      transform: translate(0, 0.4em) scaleX(0);
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
    color: ${colors.black};
    text-decoration: none;
  }
`;

const NavLink = (props) => {
  const { title, to } = props;
  return (
    <NavLinkBase>
      <Link duration={1} to={to}>
        {title}
      </Link>
    </NavLinkBase>
  );
};

const Logo = styled.h3`
  font-weight: 400;
`;


const NavLinksContent = () => (
  <>
    <NavLink title="Work" to="/" />
    <NavLink title="About" to="/about" />
    <NavLink title="Contact" to="/contact" />
  </>
);

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
  animation: fadeIn 0.1s ease-in-out;
  @keyframes fadeIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  animation: fadeInLinks 0.2s ease-in-out;
  @keyframes fadeInLinks {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  li {
    width: 100%;
    margin: 1em 0;
    a {
      text-align: center;
      font-size: 3em;
    }
  }
`;

const MobileMenu = () => (
  <MobileMenuOverlay>
    <MobileNavLinks>
      <NavLinksContent />
    </MobileNavLinks>
  </MobileMenuOverlay>
);

const hamburgerButtonConfig = {
  loop: false,
  autoplay: true,
  animationData: hamburger,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isHidden: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }


  render() {
    const { siteTitle } = this.props;
    const { isActive } = this.state;
    return (
      <>
        <Nav>
          <div>
            <Link to="/">
              <Logo>Richard van 't Hof</Logo>
            </Link>
          </div>
          <NavLinksDesktop>
            <NavLinksContent />
          </NavLinksDesktop>
          <HamburgerButton className="hamburgerBtn" onClick={this.handleClick}>
            <Lottie
              options={hamburgerButtonConfig}
              isStopped={!isActive}
              height={50}
            />
          </HamburgerButton>
          { isActive
            && <MobileMenu />
          }
        </Nav>
      </>
    );
  }
}


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
