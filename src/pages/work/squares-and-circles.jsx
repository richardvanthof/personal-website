import React from 'react';
import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
// TODO: Implement Gatsby Image for better image optimisation.
import headerImg from '../../static/img/work/voorlater/voorlater-10.png';

const SquaresAndCircles = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      video="https://www.youtube.com/embed/0ItZhpv4pto"
      title="Squares & Circles"
      description="A film about the absurdity of gender roles"
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
  </PortfolioLayout>
);

export default SquaresAndCircles;
