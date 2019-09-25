import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../styles/theme';

const {
  colors, mediaQueries, repo, email, phone,
} = theme;

const FooterBase = styled.footer`
  display: flex;
  color: ${colors.white};
  min-height: 66vh;
  margin-top: 1em;
  padding: 5vh 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${colors.bgDark};
  @media ${mediaQueries.sm} {
    justify-content: space-between;
    margin-left: 4vw;
    margin-top: 4vw;
    padding: 3vh 5vw;
  }
  p {
    margin: 0;
  }
`;

const FoorterContent = styled.div`
padding: 2em 0;
@media ${mediaQueries.sm} {
    padding-top: 20vh;
  }
  @media ${mediaQueries.md} {
    width: 75%;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  @media ${mediaQueries.xs} {
    flex-direction: row;
  }
  @media ${mediaQueries.md} {
    width: 75%;
  }
`;

const FooterLinkColumn = styled.div`
  @media ${mediaQueries.sm} {
    flex-basis: 33%;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  margin-left: 0;
  @media ${mediaQueries.sm} {
    margin-left: 1em;
  }
`;

const FooterLi = styled.li`
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-weight: normal;
  line-height: 1.11em;
`;

const Footer = () => (
  <FooterBase>
    <FoorterContent>
      <h5>Richard van &apos;t Hof</h5>
      <h3><FooterLink href={`mailto:${email}`}>richardvanthof@pm.me</FooterLink></h3>
      <h3><FooterLink href={`tel:${phone}`}>+31 6 41 21 95 54</FooterLink></h3>
    </FoorterContent>
    <FooterLinks>
      <FooterLinkColumn>
        <FooterList>
          <FooterLink target="_blanc" href="https://goo.gl/maps/hL9ojTqKzf5e6zan8">
            <FooterLi>
            Weg en Bos 9E
            </FooterLi>
            <FooterLi>
            2661DG Bergschenhoek
            </FooterLi>
            <FooterLi>
            Netherlands
            </FooterLi>
          </FooterLink>
        </FooterList>
      </FooterLinkColumn>
      <FooterLinkColumn>
        <FooterList>
          <FooterLi>
            Terms of Service
          </FooterLi>
          <FooterLi>
            Privacy Statement
          </FooterLi>
          <FooterLi>
            <Link to="/sitemap.xml">Sitemap</Link>
          </FooterLi>
        </FooterList>
      </FooterLinkColumn>
      <FooterLinkColumn>
        <p>This site is open source!</p>
        <FooterLink target="_blanc" href={repo}>View source code</FooterLink>
      </FooterLinkColumn>
    </FooterLinks>

  </FooterBase>

);

export default Footer;
