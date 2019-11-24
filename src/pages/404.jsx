import React from 'react';

import styled from 'styled-components';
import MinimalLayout from '../layouts/minimalLayout';
import SEO from '../components/seo';
import Button from '../components/button';

const MessageWrapper = styled.section`
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContent = styled.section`
  max-width: 35em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  p {
    max-width: 25em;
  }
`;


const NotFoundPage = () => (
  <MinimalLayout>
    <SEO title="404: Not found" />
    <MessageWrapper>
      <MessageContent>
        <h6>Error 404</h6>
        <h2>Bummer, this page is empty</h2>
        <p>The page you tried to look for can not be found. Please recheck the URL. The page could also have been deleted. </p>
        <Button back title="Back to home" to="/"/>
      </MessageContent>
    </MessageWrapper>
  </MinimalLayout>
);

export default NotFoundPage;
