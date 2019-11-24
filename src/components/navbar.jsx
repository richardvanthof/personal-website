import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
  margin: 1em 0;
  top: 0;
`;

const NavLinks = styled.ul`
  text-decoration: none;
  list-style: none;
  margin: 0 0.5em;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  overflow: scroll;
  li {
    line-height: 1.22em;
    font-weight: bold;
    color: transparent;
  }
`;

const NavLinkBase = styled.li`
  text-decoration: none;
  transition: 0.5s ease;
  text-decoration: none;
  margin: 1em;
  &:before {
      content: '';
      width: 4em;
      height: 1em;
      background: ${colors.yellow};
      position: absolute;
      z-index: -1;
      transition: 0.2s ease-in-out;
      transform: translate(-0.3em, 0.4em) scaleX(0);
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

const NavLink = (props) => {
  const { title, to } = props;
  return (
    <NavLinkBase>
      <AniLink paintDrip duration={1} to={to}>
        {title}
      </AniLink>
    </NavLinkBase>
  );
};

const Logo = styled.img`
  width: 4em;
  margin: 0;
`;


const Overlay = () => (
    <NavLinks>
      <NavLink title="Work" to="/" />
      <NavLink title="About" to="/about" />
      <NavLink title="Contact" to="/contact" />
    </NavLinks>
);

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
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
            <AniLink paintDrip to="/">
              <Logo src={logo} alt={siteTitle} />
            </AniLink>
          </div>
          <Overlay />
        </Nav>
        {isActive
          && <Overlay />
        }
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
