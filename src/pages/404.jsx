import React from 'react';

import styled from 'styled-components';
import MinimalLayout from '../layouts/minimalLayout';
import SEO from '../components/seo';

const MessageWrapper = styled.section`
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContent = styled.section`

`;


const NotFoundPage = () => (
  <MinimalLayout>
    <SEO title="404: Not found" />
    <MessageWrapper>
      <MessageContent>
        <h1>Page not Found</h1>
      </MessageContent>
    </MessageWrapper>
  </MinimalLayout>
);

export default NotFoundPage;
