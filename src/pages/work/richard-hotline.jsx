import React from 'react';
import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
import Gallery from '../../components/gallery';
// TODO: Implement Gatsby Image for better image optimisation.
import headerImg from '../../static/img/work/richardhotline/richardhotline-12.png';
import image3 from '../../static/img/work/richardhotline/richardhotline-3.jpg';
import start from '../../static/img/work/richardhotline/start-screen.png';
import compose from '../../static/img/work/richardhotline/compose-window.png';
import endScreen from '../../static/img/work/richardhotline/end-screen.png';

const RichardHotline = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      title="Richard Hotline"
      description="This is a project born out of frustration to the expectation of immediate reaction of instant messaging which results in always having to be connected. It is like a system that I have to conform myself to, but what if that system can conform to me? I wanted to find to make the digital world come to me instead of me having to seek the digital. Also, making people jump through this hoop makes the messages feel more personal"
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
    <Gallery fluid width={50}>
      <img src={compose} alt="Compose window" />
      <img src={endScreen} alt="Livestream endscreen" />
    </Gallery>
    <Gallery width={100}>
      <img src={start} alt="Printed message" />
      <img src={image3} alt="Printed message" />
    </Gallery>
  </PortfolioLayout>
);

export default RichardHotline;
