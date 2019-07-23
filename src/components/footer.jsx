import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  padding: 3em;
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
    <h4>
      To be honest, this site is a litte bit under construction.
      So, not a lot to see here. But come back in a while and you will be amazed
      <span role="img" aria-label="Magic">✨</span>
    </h4>
    {/* <SocialButtons /> */}
    <h5>Copyright Richard van &apos;t Hof 2019</h5>
  </FooterBase>
);

export default Footer;
