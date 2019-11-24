const smoothScrollToElement = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth',
    });
};

export default smoothScrollToElement;
