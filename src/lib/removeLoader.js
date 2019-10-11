import { useEffect } from 'react';

const removeLoader = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const element = document.querySelector('.loadingScreen');
    if (element) {
      element.className += ' loaded';
      setTimeout(() => {
        element.remove();
      }, 500);
    }
  });
};

export default removeLoader;
