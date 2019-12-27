import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './button';

import theme from '../styles/theme';
import Socials from './socials';
import Copyright from './copyright';

const { colors, container, mediaQueries } = theme;

const Logo = require('../static/trademarks/logo.svg');

const FooterBase = styled.footer`
  background: ${colors.bgLight};
  margin: 0;
  padding: 3em 1em 1em;
  width: 100vw;
  overflow: hidden;
  @media ${mediaQueries.md} {
    padding: 5vh ${container.md} 1em;
  }
`;

const FooterContent = styled.div`
display: column;
@media ${mediaQueries.xs} {
  display: flex;
}

`;

const FooterLogo = styled.img`
  max-width: 7.5em;
`;

const FooterLinksList = styled.ul`
  margin: 0.33em 0.05em;
`;

const FooterLinkBase = styled.li`
`;

const FooterHref = styled.a`
  text-decoration: none;
  color: ${colors.textLight};
`;

const FooterLink = ({ title, to }) => (
  <FooterLinkBase>
    <FooterHref target="_blanc" href={to}>
      {title || 'learn more'}
    </FooterHref>
  </FooterLinkBase>
);

const FooterColumn = styled.div`
    flex-direction: column;
    ul {
      list-style: none;
      list-style-position: outside;
      margin-right:
    }
    @media ${mediaQueries.xs} {
      p {
        margin-left: 0.1em;
      }
    }
    @media ${mediaQueries.sm} {
      width: 50%;
      flex-basis: 50%;
      padding: 3em;
    }
    @media ${mediaQueries.md} {
      width: 25%;
      flex-basis: 25%;
      padding: 3em;
    }
`;

const Footer = () => (
  <FooterBase>
    <FooterContent>
      <FooterColumn>
        <FooterLogo src={Logo} />
      </FooterColumn>
      <FooterColumn>
        <h6>Open Source</h6>
        <p className="light small">Good news! This site is open source. Would you like to see how I made it or do you want to build from this site? It’s all possible!</p>
        <Button external title="View source code" to="https://github.com/RichART-Official/therichart.space" />
      </FooterColumn>

      <FooterColumn>
        <h6>Follow me!</h6>
        <Socials />
      </FooterColumn>
      <FooterColumn>
        <h6>References</h6>
        <FooterLinksList>
          <FooterLink to="/sitemap.xml" title="Sitemap" />
        </FooterLinksList>
      </FooterColumn>
    </FooterContent>
    <Copyright />
  </FooterBase>
);

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Footer;
