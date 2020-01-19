//旧接口格式和使用者不兼容，中间加一个适配转换接口
class Adaptee {
  specificRequest() {
    return "德国标准插头";
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  //适配转换接口
  request() {
    let info = this.adaptee.specificRequest();
    return info + "-转换器-中国标准插头";
  }
}

let target = new Target();
console.log(target.request());
