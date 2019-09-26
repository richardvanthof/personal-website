import React from 'react';

import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
import Gallery from '../../components/gallery';

const headerImg = require('../../static/img/work/richardhotline/richardhotline-12.png');

const RichardHotline = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      title="Richard Hotline"
      description="This is a project born out of frustration to the expectation of immediate reaction of instant messaging which results in always having to be connected. It is like a system that I have to conform myself to, but what if that system can conform to me? I wanted to find to make the digital world come to me instead of me having to seek the digital. Also, making people jump through this hoop makes the messages feel more personal"
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
    <Gallery width={33}>
      <img src={headerImg} alt="Printer" />
      <img src={headerImg} alt="Printer" />
      <img src={headerImg} alt="Printer" />
    </Gallery>
    <Gallery width={100}>
      <img src={headerImg} alt="Printer" />
    </Gallery>
  </PortfolioLayout>
);

export default RichardHotline;
