import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../static/animations/loader.json';

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (

    <Lottie
      options={defaultOptions}
    />

  );
};

export default LoadingAnimation;
