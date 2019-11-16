import { useEffect } from 'react';

const removeLoader = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const screen = document.querySelector('.loadingScreen');
    if (screen) {
      screen.className += ' loaded';
      setTimeout(() => {
        screen.remove();
      }, 500);
    }
  });
};

export default removeLoader;
