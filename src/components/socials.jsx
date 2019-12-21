import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Behance from '../static/icons/Social/behance.svg';
import Linkedin from '../static/icons/Social/linkedin.svg';
import Github from '../static/icons/Social/github.svg';

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

const SocialMediaItem = ({ name, href, children }) => (
  <SocialMediaListItem>
    <a className="light" target="_blanc" href={href}>
      {children || name}
    </a>
  </SocialMediaListItem>
);

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
            }
          }
        }
      `
    }
    render={(data) => {
      const { linkedin, github, behance } = data.site.siteMetadata;
      return (
        <SocialMedia>
          <SocialMediaItem name="LinkedIn" href={linkedin}><Linkedin /></SocialMediaItem>
          <SocialMediaItem name="GitHub" href={github}><Github /></SocialMediaItem>
          <SocialMediaItem name="Behance" href={behance}><Behance /></SocialMediaItem>
        </SocialMedia>
      );
    }
    }
  />
);


// const Socials = () => (
//   <staticQuery
//     query={
//     graphql`
//       query getSocialsData {
//         site {
//           siteMetadata {
//             linkedin
//             github
//             behance
//           }
//         }
//       }
//     `
//   }
//     render={ data => (
//       <SocialMedia>
//         <li>
//           <a className="light" href="#">LinkedIn</a>
//         </li>
//         <li>
//           <a className="light" href="#">GitHub</a>
//         </li>
//         <li>
//           <a className="light" href="#">Behance</a>
//         </li>
//       </SocialMedia>
//     )}
//   />

// );

// const query = graphql`
// {
//   "data": {
//     "site": {
//       "siteMetadata": {
//         "author": "Richard van 't Hof",
//         "email": "hello@therichard.space",
//         "github": "https://www.github.com/RichART-Official",
//         "linkedin": "https://www.linkedin.com/in/richard-van-t-hof/",
//         "phone": "+31 6 41219554",
//         "repo": "https://www.github.com/RichART-Official/therichart.space",
//         "behance": "https://www.behance.net/therichartspace"
//       }
//     }
//   }
// }
// `;

export default Socials;
