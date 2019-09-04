const generateTextScale = {
  // Saves scaleratio and text bases
  ratio: 1.333, // number
  base: [18], // array[ number ]
  defaultFontSize: 16,

  // Set Scale ratio (number)
  set setRatio(input) {
    this.ratio = input;
  },
  // Set Base size (array[number])
  set setBase(input) {
    this.base = input;
  },
  scale() {
    const baseSizes = this.base.map(currentValue => currentValue / this.defaultFontSize);
    // // Generate font sizes for a base size
    const generateTextSizes = (base) => {
      const { ratio } = this;
      const textSizes = [];
      for (let i = 0; i < 10; i++) {
        const newSize = base * (ratio ** i);
        textSizes.push(`${newSize}rem`);
      }
      return textSizes;
    };

    // Generate font sizes for a base size
    if (baseSizes.length > 1) {
      const allTextSizes = baseSizes.map(currentValue => generateTextSizes(currentValue));
      return allTextSizes;
    }
    return generateTextSizes(baseSizes);
  },
};

const scale = () => generateTextScale.scale();

const setBaseSize = () => generateTextScale.setBase;

const setRatio = () => generateTextScale.setRatio;

const configureTextScale = (base, ratio) => {
  generateTextScale.setBase = base;
  generateTextScale.setRatio = ratio;
};

export {
  setBaseSize,
  setRatio,
  configureTextScale,
};
export default scale;
