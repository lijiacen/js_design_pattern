class RealImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk(); // 初始化即从硬盘加载
  }
  display() {
    console.log("display");
  }
  loadFromDisk() {
    console.log("loadFromDisk" + this.fileName);
  }
}

//使用者无权访问目标对象，中间加代理，通过代理做授权控制
class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName);
  }
  display() {
    this.realImg.display();
  }
}

let proxyImg = new ProxyImg("1.png");
proxyImg.display();

//明星
let star = {
  name: "li",
  age: 31,
  phone: "13776653196"
};

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === "phone") {
      return "1377665588";
    }
    if (key === "price") {
      return 120000;
    }
    return target[key];
  },
  set: function(taget, key, value) {
    if (key === "customPrice") {
      if (value < 100000) {
        throw new Error("low");
      } else {
        target[key] = value;
        return true;
      }
    }
  }
});

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 50000;
