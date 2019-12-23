const generateTextSizes = (ratio, baseSize) => {
  // Generates all text sizes on the basis of a base size an a ratio
  const textSizes = [];
  const relativeBaseSize = (baseSize || 18) / 16;
  const scaleRatio = ratio || 1.33;
  for (let i = 0; i <= 10; i++) {
    const newTextSize = (relativeBaseSize * (scaleRatio ** i)).toFixed(3);
    textSizes.push(`${newTextSize}rem`);
  }
  return textSizes;
};

const scaleHeaders = (fontSizes) => {
  // Assigns the right text size to a header element and makes css automaticially
  const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reverse();
  let counter = 1;
  const headingSizes = elements.map((currentValue) => {
    const css = `${currentValue} { font-size: ${fontSizes[counter]}}`;
    counter++;
    return css;
  });
  return headingSizes.join('; ');
};

export { scaleHeaders };

export default generateTextSizes;
