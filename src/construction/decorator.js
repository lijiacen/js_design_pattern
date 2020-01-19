class Circle {
  draw() {
    console.log("圆形");
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  //为对象添加新功能且不改变原有功能
  draw() {
    this.circle.draw();
    this.setRedBorder(circle);
  }
  setRedBorder(circle) {
    console.log("red border");
  }
}

let circle = new Circle();
let d = new Decorator(circle);
d.draw();
