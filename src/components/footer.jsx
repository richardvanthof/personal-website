import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';
import { Subtitle } from './typography';
import { Big, Small } from '../components/typography';
import theme from '../styles/theme';
import Socials from '../components/socials';
import Copyright from '../components/copyright';

 const {colors, container, mediaQueries } = theme;

 const Logo = require('../static/trademarks/logo.svg');

const FooterBase = styled.footer`
  background: ${colors.blue};
  margin: 0;
  padding: 3em 1em 1em;
  @media ${mediaQueries.md} {
    padding: 5vh ${container.md} 1em ;
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

const FooterColumn = styled.div`
    flex-direction: column;
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

const Footer = () => {
  return (
    <FooterBase>
      <FooterContent>
        <FooterColumn >
          <FooterLogo src={Logo}></FooterLogo>
        </FooterColumn>
        <FooterColumn>
          <h6>Open Source</h6>
          <p className="light"><Small>Good news! This site is open source. Would you like to see how I made it or do you want to build from this site? It’s all possible!</Small></p>
          <Button external title="View source code" to="https://github.com/RichART-Official/therichart.space"/>
        </FooterColumn>

        <FooterColumn>
          <h6>Follow me!</h6>
          <Socials/>
        </FooterColumn>
        <FooterColumn>
          <ul>
            <li><a href="/sitemap.xml" target="_blanc">Sitemap</a></li>
          </ul>
        </FooterColumn>
      </FooterContent>
      <Copyright />
    </FooterBase>
  )
}
export default Footer;
