import React from 'react';
import styled from 'styled-components';

import SocialButtons from './socialButtons';

const FooterBase = styled.footer`
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const Footer = () => (
  <FooterBase>
    <hr />

    <SocialButtons />
    <h5>Copyright Richard van &apos;t Hof 2019</h5>
  </FooterBase>
);

export default Footer;
