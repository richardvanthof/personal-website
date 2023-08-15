export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`) // eslint-disable-line no-eval
      console.log(`# IntersectionObserver is polyfilled!`)
    }
}