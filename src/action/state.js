class State {
  constructor(color) {
    this.color = color;
  }
  handle(context) {
    console.log("turn to " + this.color);
    context.setState(this);
  }
}

class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

let context = new Context();

let green = new State("green");
let red = new State("red");
let yellow = new State("yellow");

green.handle(context);
console.log(context.getState());
yellow.handle(context);
console.log(context.getState());
red.handle(context);
console.log(context.getState());

import StateMachine from "javascript-state-machine";

let fsm = new StateMachine({
  init: "收藏",
  transitions: [
    { name: "doStore", from: "收藏", to: "取消收藏" },
    { name: "deleteStore", from: "取消收藏", to: "收藏" }
  ],
  methods: {
    onDoStore: function() {
      console.log("收藏");
      doSomething();
    },
    onDeleteStore: function() {
      console.log("取消收藏");
      doSomething();
    }
  }
});

var $btn = $("#btn");
var $text = $("#text");
$btn.click(function() {
  if (fsm.is("收藏")) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
});
function doSomething() {
  $text.val(fsm.state);
}
doSomething();

//定义promise
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    fn(
      () => {
        fsm2.resolve(this);
      },
      () => {
        fsm2.reject(this);
      }
    );
  }
  then(suFn, faFn) {
    this.successList.push(suFn);
    this.failList.push(faFn);
  }
}

let fsm2 = new StateMachine({
  init: "pending",
  transitions: [
    { name: "resolve", from: "pending", to: "fullfilled" },
    { name: "reject", from: "pending", to: "rejected" }
  ],
  methods: {
    onResolve: function(state, data) {
      data.successList.forEach(fn => fn());
    },
    onReject: function(state, data) {
      data.failList.forEach(fn => fn());
    }
  }
});

function loadImg(src) {
  let promise = new MyPromise(function(resolve, reject) {
    let img = document.createElement("img");
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return promise;
}
let src =
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2699597612,3650223652&fm=200&gp=0.jpg";
let result = loadImg(src);

result.then(
  function() {
    alert(1);
  },
  function() {
    alert(2);
  }
);
result.then(
  function(img) {
    alert(1 + 1);
  },
  function(img) {
    alert(1 + 2);
  }
);
