export default function sketch (p) {
    let position = new p.createVector();
    let velocity = new p.createVector();
    let w;

    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight);
      position.set(p.windowWidth /2, p.windowHeight / 2);
      velocity.set(1, 0.75);
      w = 100;
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
      p.background(150);
      p.rect(position.x, position.y,w,w);
      p.move();
      // p.borders();
    };

    p.move = function () {
      position.add(velocity);
    }

    p.borders = function () {
      if(position.x > p.windowWidth) {
        position.x = 0;
      }
      if(position.x < p.windowWidth) {
        position.x = p.windowWidth;
      }
      if(position.y > p.windowHeight) {
        position.y = 0;
      }
      if(position.y < p.windowHeight) {
        position.y = p.windowHeight;
      }
    }
  };