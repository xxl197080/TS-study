// class Person1 {
//   constructor (private _name: string){}
//   get name () { // getter 属性，获取变量值
//     return 'hi ' + this._name
//   }
//   set name(name) { // setter 属性修改变量值
//     const realName = name.split(' ')[1]
//     this._name = realName
//   }
// }
// const person = new Person1('tony')
// console.log(person.name) // 可以直接答应出来 tony，通过 get属性获取到_name值(_name是私有属性)
// person.name = 'hello job' // _name是 private 访问属性，是私有的，不能用 get 属性直接赋值，可以通过写 set 属性来赋值
// console.log(person.name)


// 单例模式

class Demo {
  private static instance: Demo; // 如果不在 private 后面加上 static 的话，就不能通过 this.instance获取到instance，没有挂载到 Demo上
  private constructor (public name: string) {}
  static getInstance (name: string) { // static 这样写相当于前面默认有个 public
    if (!this.instance) {
      this.instance = new Demo(name)
    }
    return this.instance
  }
}

// const demo1 = Demo.getInstance('tony')
// console.log(demo1.name) // 'tony'
// const demo2 = Demo.getInstance('job') /// 因为是单利模式，上面已经 new 过了，所以直接返回的是 tony
// console.log(demo2.name) // 'tony'
// console.log(demo1 === demo2) // true


function add({first, second}:{first: number, second: number}) {
  return first + second
}

interface obj {first: number, second: number}

function add1({first, second}:obj) {
  return first + second
}
function add2({first, second}:obj) {
  return first + second
}
var object1 = {
  first: 1,
  second: 2
}

// 类型断言  类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
// 语法格式： <类型>值 || 值 as 类型
var object2 = <obj> object1
var object3 = object1 as obj
console.log(object2)
console.log(object3)
