class Product {
  constructor(name) {
    this.name = name;
  }
  init() {}
}

//将new 操作单独封装，提供创建对象的公共接口
class Creator {
  create(name) {
    return new Product(name);
  }
}

let creator = new Creator();
let p = creator.create("p1");
p.init();
