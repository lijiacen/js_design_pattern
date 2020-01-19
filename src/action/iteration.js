class Iterator {
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }

  //生成遍历器
  getIterator() {
    return new Iterator(this);
  }
}

let array = [1, 2, 3, 4, 5, 6];
let container = new Container(array);
let iterator = container.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

function es6Each(data) {
  //生成遍历器
  let iterator = data[Symbol.iterator]();

  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value);
    }
  }
}

let m = new Map();
m.set("a", 100);
m.set("b", 200);

es6Each(array);
es6Each(nodeList);
es6Each(m);

function forOfEach(data) {
  for (let item of data) {
    console.log(item);
  }
}
forOfEach(array);
forOfEach(nodeList);
forOfEach(m);
