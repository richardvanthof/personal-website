/* eslint-disable */
export default function sketch(p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(255);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    rotation += 0.01;
    p.fill(0, 0, 255);
    p.box(p.windowWidth / 3);
    p.pop();
  };
}
/* eslint-enable */
