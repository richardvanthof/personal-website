import { useEffect } from 'react';

const removeLoader = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const screen = document.querySelector('.loadingScreen');
    const styles = document.querySelector('.loadingScreen__styles');
    if (screen) {
      screen.className += ' loaded';
      setTimeout(() => {
        screen.remove();
        styles.remove();
      }, 500);
    }
  });
};

export default removeLoader;
