import { useEffect } from 'react';

const removeLoader = () => {
  useEffect(() => {
    /* eslint-disable no-undef */
    const screen = document.querySelector('.loadingScreen');
    /* eslint-enable no-undef */
    if (screen) {
      screen.className += ' loading-screen__deactivate';
    }
  });
};

export default removeLoader;
