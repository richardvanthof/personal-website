import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const logo = require('../images/trademarks/logo.svg');

const Nav = styled.nav`
  display: flex;
  padding: 1em 2em;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}
`

const NavLinks = styled.div`
align-items: center;
text-decoration: none;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      a {
        text-decoration: none;
        padding: 1em;
        transition: .5s ease;
        &:before {
          content: "";
          background: red;
          width: 100%;
          height: 1em;
        }
      }
    }
  }
`

const Logo = styled.img`
  width: 5rem;
  margin: 0;
  mix-blend-mode: luminosity;
`

const Navbar = ({ siteTitle }) => (
  <Nav>
    <div>
      <Link to="/">
        <Logo src={logo} alt={siteTitle} />
      </Link>

    </div>
    <NavLinks>
      <ul>
      <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/work">
            Work
          </Link>
        </li>
        <li></li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </NavLinks>
  </Nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar;
