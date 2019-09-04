import React from 'react';
import styled from 'styled-components';

import {
  Facebook,
  Twitter,
  Behance,
  Linkedin,
  Vimeo,
  Youtube,
} from './icons';

const SocialButtonsBase = styled.ul`
  text-align: center;
  display: flex;
  list-style: none;
  padding: 1em;
  margin: 0;
  li {
    margin: 0;
    a {
      padding: 0.5em;
      transition: 0.1s ease;
      background: none;
      img {
        height: 1rem;
        width: 1em;
      }
      &:active {
        background: green;
      }
      &:hover {
        background: greenyellow;
      }
    }
  }
`;
const profile = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  behance: 'https://behance.net',
  linkedin: 'https://linkedin.com',
  vimeo: 'https://vimeo.com',
  youtube: 'https://youtube.com',
};

const SocialButtonBase = styled.li`

    margin: 0;
    a {
      padding: 0.5em;
      transition: 0.1s ease;
      background: none;
      img, svg {
        height: 1rem;
        width: 1em;
      }
      &:active {
        background: green;
      }
      &:hover {
        background: greenyellow;
      }
    }

`;

const SocialButton = (props) => {
  const { platform, children } = props;
  const target = platform.toLowerCase();
  if (profile[target]) {
    return (
      <SocialButtonBase>
        <a href={profile.facebook}>
          {children}
        </a>
      </SocialButtonBase>
    );
  }
};

// const getSocialButtons = (data) => {
//   const profileData = data;
//   const profileAmount = Object.keys(profileData).length;
//   return (
//     <>
//       {
//         for (let i = 0; i <= profileAmount; i++)(
//         <p>i</p>
//         )
//       }
//     </>
//   )
// }

const SocialButtons = () => (
  <SocialButtonsBase>

    {/* <li>
      <a href={profile.facebook}>
        <img src={icon.facebook} alt="Facebook" />
      </a>
    </li>
    <li>
      <a href={profile.twitter}>
        <img src={icon.twitter} alt="Twitter" />
      </a>
    </li>
    <li>
      <a href={profile.behance}>
        <img src={icon.behance} alt="Behance" />
      </a>
    </li>
    <li>
      <a href={profile.linkedin}>
        <img src={icon.linkedin} alt="LinkedIn" />
      </a>
    </li>
    <li>
      <a href={profile.vimeo}>
        <img src={icon.vimeo} alt="Vimeo" />
      </a>
    </li>
    <li>
      <a href={profile.youtube}>
        <img src={icon.youtube} alt="Youtube" />
      </a>
    </li> */}
  </SocialButtonsBase>
);

export default SocialButtons;
