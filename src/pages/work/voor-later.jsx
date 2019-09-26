import React from 'react';
import PortfolioLayout from '../../layouts/portfolioLayout';
import PortfolioHeader from '../../components/portfolioHeader';
import Button from '../../components/button';
import Gallery from '../../components/gallery';
// TODO: Implement Gatsby Image for better image optimisation.
import headerImg from '../../static/img/work/voorlater/voorlater-10.png';
import img18 from '../../static/img/work/voorlater/voorlater-18.png';
import img11 from '../../static/img/work/voorlater/voorlater-11.png';
import img07 from '../../static/img/work/voorlater/voorlater-7.png';
import img12 from '../../static/img/work/voorlater/voorlater-12.png';
import img06 from '../../static/img/work/voorlater/voorlater-6.png';

const VoorLater = () => (
  <PortfolioLayout>
    <PortfolioHeader
      image={headerImg}
      video="https://www.youtube.com/embed/Jy4Fg6n4f_4"
      title="Voor Later"
      description="A film about the decline of the emotional value of photos because of the digital age."
    >
      <Button external to="https://richardhotline.nl" title="View Website">View Website</Button>
    </PortfolioHeader>
    <Gallery width={100}>
      <img src={img18} alt="Still from film" />
    </Gallery>
    <Gallery width={50}>
      <img src={img11} alt="Still from film" />
      <img src={img07} alt="Still from film" />
      <img src={img12} alt="Still from film" />
      <img src={img06} alt="Still from film" />
    </Gallery>
  </PortfolioLayout>
);

export default VoorLater;
