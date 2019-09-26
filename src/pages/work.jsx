import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import Thumbnail from '../components/thumbnail';
import Gallery from '../components/gallery';

const img = 'https://withberlinlove.com/wp-content/uploads/2012/07/c215-sleeping-on-the-street.jpg';


const Work = () => (
  <DefaultLayout>
    <SEO title="Work" />
    <Gallery width={50}>
      <Thumbnail
        title="Richard Hotline"
        img={img}
        small
      />
      <Thumbnail
        title="Richard Hotline"
        img={img}
        small
      />
    </Gallery>
  </DefaultLayout>
);

export default Work;
