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
`;

const NavLinks = styled.ul`
  text-decoration: none;
  list-style: none;
  margin: 0 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: scroll;
  li {
    font-size: 23vw;
    line-height: 1.22em;
    font-weight: bold;
    text-stroke: white 1px;
    color: transparent;
    font-family: serif;
    @media ${mediaQueries.xs} {
      font-size: 15vw;
      line-height: 1em;
    }
    @media ${mediaQueries.md} {
      font-size: 11vw;
      line-height: 1em;
    }
  }
`;

const NavLinkBase = styled.li`
  text-decoration: none;
  transition: 0.5s ease;
  text-decoration: none;
  margin-bottom: 0;
  &:before {
      content: '';
      width: 3em;
      height: 0.5em;
      background: ${colors.primairy};
      position: absolute;
      z-index: -1;
      transition: 0.2s ease-in-out;
      transform: translateY(0.4em) scaleX(0);
  }
  &:hover {
    &:before {
      transform: translateY(0.4em) scaleX(1);
    }
    a {
      color: ${colors.bgLight};
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
    text-decoration: none;
    -webkit-text-stroke: 0.005em ${colors.white};
    color: transparent;
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

const HamburgerButton = styled.button`
  width: 5em;
  height: 5em;
  cursor: pointer;
  border: none;
  background: none;
`;

const OverlayBase = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20vh 1em 10vh 1em;
  z-index: 9;
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background: ${colors.bgDark};
    z-index: -2;
    animation: slideIn 0.2s ease-in-out;
    transform-origin: right center;
  }
  @media ${mediaQueries.xs} {
    display: grid;
    padding: 5vh;
    padding-top: 15vh;
    grid-template: auto/2fr 1fr;
    align-items: flex-end;
  }
  @media ${mediaQueries.md} {
    padding-top: 15vh;
    grid-template: auto/3fr 1fr;
  }
  @keyframes slideIn {
    0% {
      transform: scaleX(0)
    },
    100% {
      transform: scaleX(1)
    },
  }
`;

const ContactInfo = styled.div`
  display: none;
  overflow: scroll;
  padding: 2em 0;
  color: ${colors.bgLight};
  @media ${mediaQueries.xs} {
    display: block;
  }
`;

const ContactDetails = styled.ul`
  list-style: none;
  margin: 0.66em 0 0.33em 0;
  li {
    margin: 0;
  }
`;

const Overlay = () => (
  <OverlayBase>
    <NavLinks>
      <NavLink title="Home" to="/" />
      <NavLink title="Work" to="/work" />
      <NavLink title="About" to="/about" />
      <NavLink title="Contact" to="/contact" />
    </NavLinks>
    <ContactInfo>
      <h6>Richard van &apos;t Hof</h6>
      <ContactDetails>
        <li>hello@therichard.space</li>
        <li>+31 6 41 21 95 54</li>
      </ContactDetails>
      <ContactDetails>
        <li>Weg en Bos 9e</li>
        <li>2661DG Bergschehoek</li>
        <li>Netherlands</li>
      </ContactDetails>
    </ContactInfo>
  </OverlayBase>
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
          <HamburgerButton onClick={this.handleClick}>
            <Lottie
              setDirection="-1"
              options={{
                animationData: hamburger,
                loop: true,
                autoplay: true,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
            />
          </HamburgerButton>
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
