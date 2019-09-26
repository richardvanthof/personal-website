import React from 'react';
import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
// TODO: Implement Gatsby Image for better image optimisation.
import headerImg from '../../static/img/work/voorlater/voorlater-10.png';

const VoorLater = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      title="Bytecode Rebranding"
      description="The rebranding of Nooijen Solutions to Bytecode"
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
  </PortfolioLayout>
);

export default VoorLater;
