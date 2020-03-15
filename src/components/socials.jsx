import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Linkedin from '../static/icons/Social/linkedin.svg';
import Github from '../static/icons/Social/github.svg';
import BNO from '../static/icons/Social/bno.svg';

import theme from '../styles/theme';

const { colors } = theme;

const SocialMedia = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  margin-left: 0.2em;
  padding: 0.33em 0;
`;

const SocialMediaListItem = styled.li`
  margin-right: 1em;
  a {
    font-size: 0.88em;
    text-decoration: none;
    color: ${colors.teal};
    & > * {
      height: 1.33em;
    }
  }
`;

const SocialMediaItem = ({ name, href, children }) => {
  if (href) {
    return (
      <SocialMediaListItem>
        <a className="light" target="_blanc" href={href}>
          {children || name}
        </a>
      </SocialMediaListItem>
    );
  }
  return null;
};

const Socials = () => (
  <StaticQuery
    query={
      graphql`
       query getSocialsData {
        site {
           siteMetadata {
             linkedin
             github
             behance
             bno
            }
          }
        }
      `
    }
    render={(data) => {
      const {
        linkedin, github, bno,
      } = data.site.siteMetadata;
      return (
        <SocialMedia>
          <SocialMediaItem name="LinkedIn" href={linkedin}><Linkedin /></SocialMediaItem>
          <SocialMediaItem name="GitHub" href={github}><Github /></SocialMediaItem>
          {/* <SocialMediaItem name="Behance" href={behance}><Behance /></SocialMediaItem> */}
          <SocialMediaItem name="BNO" href={bno}><BNO /></SocialMediaItem>
        </SocialMedia>
      );
    }
    }
  />
);

SocialMediaItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SocialMediaItem.defaultProps = {
  children: null,
};

export default Socials;
