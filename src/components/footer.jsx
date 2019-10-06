import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';
import { Subtitle } from './typography';
import theme from '../styles/theme';


const {
  typography, colors, mediaQueries,
} = theme;

const FooterBase = styled.footer`
  font-family: ${(typography.heading.font).join(',')};
  display: flex;
  color: ${colors.white};
  min-height: 75vh;
  margin-top: 1em;
  padding: 5vh 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${colors.bgDark};
  @media ${mediaQueries.xs} {
    justify-content: space-between;
    margin-left: 4vw;
    margin-top: 4vw;
    padding: 3vh 5vw;
  }
  p {
    margin: 0;
    margin-bottom: 0.33em;
  }
`;

const FoorterContent = styled.div`
padding: 2em 0;
@media ${mediaQueries.xs} {
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
  @media ${mediaQueries.xs} {
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

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerMetaData {
      site {
        siteMetadata {
          author
          repo
          phone
          github
          linkedin
          email
        }
      }
    }
  `);

  const {
    author, repo, email, phone,
  } = data.site.siteMetadata;
  return (
    <>
      <FooterBase>
        <FoorterContent>
          <Subtitle>{author}</Subtitle>
          <h3><FooterLink href={`mailto:${email}`}>{email}</FooterLink></h3>
          <h3><FooterLink href={`tel:${phone}`}>{phone}</FooterLink></h3>
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
                <a href="/sitemap.xml">Sitemap</a>
              </FooterLi>
            </FooterList>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <p>Handmade in Roterdam</p>
            <Button title="View Source Code" light external to={repo} />
          </FooterLinkColumn>
        </FooterLinks>
      </FooterBase>

    </>
  );
};

export default Footer;
