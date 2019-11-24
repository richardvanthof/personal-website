import theme from '../styles/theme';

const bg = theme.colors.white;// Example sketch from p5js.org, not made by me! replace with own sketch before launching!!!!

export default function sketch(p) {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    p.background(bg);
    p.rotateY(p.frameCount * 0.01);
    p.color(0,255,0);
    for (let j = 0; j < 5; j++) {
      p.push();
      for (let i = 0; i < 80; i++) {
        p.translate(
          p.sin(p.frameCount * 0.001 + j) * 100,
          p.sin(p.frameCount * 0.001 + j) * 100,
          i * 0.1,
        );
        p.rotateZ(p.frameCount * 0.002);
        p.push();
        p.sphere(8, 6, 4);
        p.pop();
      }
      p.pop();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};