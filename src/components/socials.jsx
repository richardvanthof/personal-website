import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import theme from '../styles/theme';

const { colors, mediaQueries } = theme;

const SocialMedia = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 1em 0;
  li {
    margin-right: 1em;
    a {

    }
  }
`;

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
    render={data => {
      const { linkedin, github, behance} = data.site.siteMetadata;
      return (
        <SocialMedia>
        <li>
          <a className="light" href={linkedin}>LinkedIn</a>
        </li>
        <li>
          <a className="light" href={github}>GitHub</a>
        </li>
        <li>
          <a className="light" href={behance}>Behance</a>
        </li>
      </SocialMedia>
      )
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
