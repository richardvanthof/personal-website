import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import theme from '../styles/theme';

const { colors } = theme;

const logo = require('../static/trademarks/logo.svg');

const Nav = styled.nav`
  font-family: ${(theme.typography.heading.font).join(',')};
  display: flex;
  padding: 0.1em 1em;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${colors.white};
}`;

const NavLinks = styled.div`
  align-items: center;
  text-decoration: none;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
  }
`;

const NavLinkBase = styled.li`
  text-decoration: none;
  padding: 1em;
  transition: 0.5s ease;
  text-decoration: none;
  margin-bottom: 0;
  a {
    text-decoration: none;
  }
  &:before {
    content: "";
    background: red;
    width: 100%;
    height: 1em;
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
  width: 3rem;
  margin: 0;
`;

const Navbar = ({ siteTitle }) => (
  <Nav>
    <div>
      <AniLink paintDrip to="/">
        <Logo src={logo} alt={siteTitle} />
      </AniLink>
    </div>
    <NavLinks>
      <ul>
        <NavLink title="Home" to="/" />
        <NavLink title="About" to="/about" />
        <NavLink title="Work" to="/work" />
        <NavLink title="Contact" to="/contact" />
      </ul>
    </NavLinks>
  </Nav>
);

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
