## 展开操作符：

顾名思义，用于对象或数组之前的展开操作符`（…）`，将一个结构展开为列表。

**演示一下：**

```
let firstHalf = [  one ,  two ];
let secondHalf = [ three ,  four , ...firstHalf];
```

这种写法够优雅，够简洁吧？如果不用展开操作符

**我们得这么写：**

```
let firstHalf = [  one ,  two ];
let secondHalf = [ three ,  four ];
for(var i=0, i <firstHalf.length; i++ ) {
  secondHalf.push(firstHalf[i]);
}
```

**展开操作符也适用于合并对象的属性：**

```
const hero = {
  name:  Xena - Warrior Princess ,
  realName:  Lucy Lawless
}
const heroWithSword = {
 ...hero,
 weapon:  sword
}
```

**不用展开操作符的话，需要遍历对象的属性：**

```
let keys = Object.keys(hero);
let obj = {};

for(var i=0; i< keys.length; i++) {
   obj[keys[i]] = keys[props[i]];
}
```

## 剩余参数

剩余参数将剩余的参数收入数列。JavaScript 的特性是参数数目很灵活。通常会有一个 `arguments` 变量收集参数。

**让我们看一个例子：**

```
function add(first, second, ...remaining) {
  return first + second;
}
```

上面的一段代码仅仅将 first 和 second 加起来，也就是说，调用 add(1, 2) 和 add(1, 2, 3, 4) 会得到相同的结果。

**下面我们修正一下：**

```
function add(first, second, ...remaining) {
  return first + second + remaining.reduce((acc, curr) => acc + curr, 0);
}
```

如前所述，…remaining 收集了剩余的参数，为我们提供了这些参数的命名，清楚地表明我们打算处理剩余的参数。我记得至迟 ES5 已经有 `arguments` 了，不过少有人知。

## 字符串插值

见过这样的语句吗？

```
class Product {
 constructor(name, description, price) {
   this.name = name;
   this.description = description;
   this.price = price;
 }
getDescription() {
   return " Full description
" +
   " name: " + this.name +
   " description: " + this.description
 }
}
```

当然，我指的是 `getDescription()` 方法中那个可读性不佳的多行长语句。大多数编程语言中都存在类似现象。一些语言提供了字符串插值，幸运的是，JavaScript 正是其中之一。

**我们改写一下 getDescription() 方法：**

```
getDescription() {
   return `Full description
:
   name: ${this.name}
   description ${this.description}
   `;
}
```

一对 包起来的字符串中可以使用 `${}` 插值。现在看起来舒服多了。

## 简写属性

**在 ES5 中必须这么写：**

```
function createCoord(x, y) {
  return {
    x: x,
    y: y
  }
}
```

**ES6 以后可以使用简写属性：**

```
function createCoord(x, y) {
  return {
    x,
    y
  }
}
```

看起来更清爽了吧？

## 方法属性

方法属性是在对象中定义指向方法的属性。

**考虑下面一段 ES5 代码作为例子：**

```
const math = {
  add: function(a,b) { return a + b; },
  sub: function(a,b) { return a - b; },
  multiply: function(a,b) { return a * b; }
}
```

**ES6 以后只需这么写：**

```
const math = {
  add(a,b) { return a + b; },
  sub(a,b) { return a - b; },
  multiply(a,b) { return a * b; }
}
```

## 5、解构赋值

解构赋值有利于开发者本人的心理健康。

**考虑下面的代码：**

```
function handle(req, res) {
 const name = req.body.name;
 const description = req.body.description;
 const url = req.url;

 log( url endpoint , url);

 // 大量代码逻辑
 dbService.createPerson(name, description)
}
```

不管从什么角度来看，上面的代码都不完美，但它确实体现了一种应用场景，我们想要从对象的不同层次获取数据。你也许会问，这里有什么问题？好吧，我可以不用声明这么多变量，省下一些敲击键盘的次数。

```
function handle(req, res) {
 const { body: { name, description }, url } = req;

 log( url endpoint , url);

 // 大量代码逻辑
 dbService.createPerson(name, description)
```

看，我们上面的代码将三行压缩成了一行。

解构赋值并不仅仅局限于对象。它同样适用于数组。

**考虑下面的代码：**

```
const array = [1,2,3,4,5,6];
const a = array[0];
const c = array[2];
```

**上面的代码可以用更优雅的方式改写：**

```
const array = [1,2,3,4,5,6];
const [a, ,c, ...remaining] = arr;

// remaining = [4,5,6]
```

我们可以使用上面的模式匹配分解数组的值。我们使用 , , 跳过某些值。上面提到过的剩余参数这里也能用，在这里我们通过剩余参数捕获了剩余的数组成员。

解构赋值还可以用于函数和参数。函数有不止 `2-3` 个参数时，使用一个对象收集所有参数是 JavaScript 的事实标准。

**例如，下面一个函数：**

```
function doSomething(config) {
  if(config.a) { ... }
  if(config.b) { ... }
  if(config.c) { ... }
}
```

**有更好的写法：**

```
function doSomething({ a, b, c }) {
  if(a) { ... }
  if(b) { ... }
  if(c) { ... }
}
```

## 数组方法

**ES6 引入了许多有用的数组方法，例如：**

- `find()`，查找列表中的成员，返回 null 表示没找到
- `findIndex()`，查找列表成员的索引
- `some()`，检查某个断言是否至少在列表的一个成员上为真
- `includes`，列表是否包含某项

**下面的代码有助于你理解它们的用法：**

```
const array = [{ id: 1, checked: true }, { id: 2 }];
arr.find(item => item.id === 2) // { id: 2 }
arr.findIndex(item => item.id === 2) // 1
arr.some(item => item.checked) // true

const numberArray = [1,2,3,4];
numberArray.includes(2) // true
Promises + Async/Await
```

## 异步方案

```
function doSomething(cb) {
  setTimeout(() =>  {
    cb( done )
  }, 3000)
}

doSomething((arg) => {
 console.log( done here , arg);
})
```

我们使用回调是因为有些操作是异步的，需要时间来完成。后来我们有了 `promise` 库，人们开始使用它。然后 JavaScript 逐渐加入了对 `promise` 的原生支持。

```
function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>  {
      resolve( done )
    }, 3000)
  })
}

doSomething().then(arg => {
 console.log( done here , arg);
})
```

**我们甚至可以这样调用，将 promise 串起来：**

```
getUser()
  .then(getOrderByUser)
  .then(getOrderItemsByOrder)
  .then(orderItems => {
    // 处理排序后的成员
  })
```

后来生活更加美好，我们有了 `async/await`

**上面一段代码可以这样写：**

```
async function getItems() {
  try {
    const user = await getUser();
    const order = await getOrderByUser(user);
    const items = await getOrderItemsByOrder(order);
    return items;
  } catch(err) {
    // 在这里处理错误，建议返回某个值或者重新抛出错误
  }
}

getItems().then(items => {
  // 处理排序后的成员
}
```

## 模块

差不多任何编程语言都支持模块这一概念，也就是将代码分为多个文件，每个文件是一个自我包含的单元（模块）。

**考虑下面的代码：**

```
// math.js

export function add(a,b) { return a + b; }
export function sub(a,b) { return a - b; }

export default mult(a,b) => a * b;

// main.js
import mult, { add, sub } from  ./math ;

mult(2, 4) // 8
add(1,1)   // 2
sub(1,2)   // -1
```

我们在上面用 export 关键字注明了 `add` 和 `sub` 这两个结构对任何引入该模块的模块都公开可见。`export default` 关键字则注明仅仅 `import` 模块时得到的结构。在 `main.js` 中，我们将导入的 default 命名为 `mult`，同时指明我们引入 `add()` 和 `sub()` 这两个方法。箭头函数和字典作用域 `this。`