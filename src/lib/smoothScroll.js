const smoothScrollToElement = (id) => {
  // eslint-disable-next-line no-undef
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: 'smooth',
  });
};

export default smoothScrollToElement;
