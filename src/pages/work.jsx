import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import Container from '../components/container';
import Thumbnail from '../components/thumbnail';

const img = 'https://withberlinlove.com/wp-content/uploads/2012/07/c215-sleeping-on-the-street.jpg';

const FlexContainer = styled(Container)`
  display: flex !important;

`;

const Work = () => (
  <DefaultLayout>
    <SEO title="Work" />
    <FlexContainer>
      <Thumbnail
        title="Richard Hotline"
        img={img}
      />
    </FlexContainer>
  </DefaultLayout>
);

export default Work;
