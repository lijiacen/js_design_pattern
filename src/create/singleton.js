class Singleton {}

//系统中唯一使用，并提供全局访问
Singleton.getInstance = (function() {
  //一个类只有一个实例
  let instance;
  return function() {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

class LoginForm {
  constructor() {
    this.state = "hide";
  }
  show() {
    if (this.state === "show") {
      alert("已经显示");
      return;
    }
    this.state = "show";
  }
  hide() {
    if (this.state === "hide") {
      alert("已经隐藏");
      return;
    }
    this.state = "hide";
  }
}
LoginForm.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();

let lg1 = LoginForm.getInstance();
lg1.show();

let lg2 = LoginForm.getInstance();
lg2.show();

console.log(lg1 === lg2);
