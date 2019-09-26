import React from 'react';
import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
// TODO: Implement Gatsby Image for better image optimisation.
import headerImg from '../../static/img/work/voorlater/voorlater-10.png';

const StoryAboutLines = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      video="https://player.vimeo.com/video/272906948"
      client="Radio Dabanga // Free Press Unlimited"
      title="A Story About Lines"
      description="A film about the absurdity of gender roles"
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
  </PortfolioLayout>
);

export default StoryAboutLines;
