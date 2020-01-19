class Product {
  constructor(name) {
    this.name = name
  }
  init() {}
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create("p1")
p.init()
