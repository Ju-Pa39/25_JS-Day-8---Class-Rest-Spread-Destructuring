//------------Class-------------//

// Lab 1

// class Calculator {
//   constructor(init = 0){
//     this.value = init
//   }
//   add(num){
//     this.value += num
//     return this.value
//   }
//   sum(num2) {
//     this.value -= num2
//     return this.value
//   }
//   multi(num3) {
//     this.value *= num3
//     return this.value
//   }
//   divide(num4) {
//     this.value /= num4
//     return this.value
//   }
//   show(){
//     console.log(`value = ${this.value}`)
//   }
// }
// let result = new Calculator(10)
// result.show()
// console.log(result.add(50))
// console.log(result.sum(2))
// console.log(result.multi(50))
// console.log(result.divide(50))



// Lab 2

// class Sale{
//   constructor(_name, _amount, _price){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice(){
//     return this.amount * this.price
//   }
// }

// class Beverage  extends Sale {
//   constructor(_amount,_price){
//     super(_amount, _price)
//     this.amount = _amount
//     this.price = _price
//   }
// }
// let beverage = new Beverage(5,20)
// beverage.name = 'Pepsi'
// console.log(beverage)
// console.log(beverage.calcPrice())



//----------isArray-----------//

// function isArray(a){
//   return Array.isArray(a)
// } 
// // let checArr = (a) => {
// //   return Array.isArray(a)
// // }

// let arr = '[1233]'
// console.log(isArray(arr))


//-------Object keys, values, entries--------//


// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values

//lap1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let keys = Object.keys(salaries)
// console.log(keys)
// let sumSalaries = keys.reduce((prev,curr)=>{
//   return prev += salaries[curr]
// },0)
// console.log(sumSalaries)

// let value = Object.keys(salaries)
// console.log(value)
// let sumSalaries2 = value.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log(sumSalaries2)



//lap2
// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice() {
//     return this.amount * this.price
//   }
// }

// class Beverage extends Sale {
//   constructor(_name, _amount, _price) {
//     super(_name, _amount, _price)
//   }
// }

// let result = new Beverage('Pepsi', 5, 20)
// console.log(result.calcPrice())



//--------Rest Parameter----------//


// Lab 1

// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     sum *= num
//   }
//   return sum
// }
// let result = calMulti(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)



// Lab 2

// let filterOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     return item % 2 == 0
//   })
//   return odd
// }

// let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)



// Lap 3

// let mergeObj = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'Ju',
//   lname: 'ji'
// }
// let obj2 = {
//   nickName: 'J'
// }
// let result = mergeObj(obj1, obj2)
// console.log(result)


//----------Spread Syntax----------//



//lap 4

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let num3 = [5,...nums1,-6,-1,...nums2]
// console.log(num3)
// let sum = num3.reduce((prev,curr) => {
//   return prev+curr
// },0)
// console.log(sum)


// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 
// โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง


//lap 5

// let createNewArr = (arr) => {
//   let new_arr = arr
//   arr[3] **= 2 
//   return new_arr 
// }
// arr = [1,2,3,4,5,6,7]
// console.log(createNewArr(arr))


//lab 6 

// let recieve = (name,surname,...hobby) => {
//   return [name,surname,...hobby, hobby.length]
// } 
// console.log(recieve('f','h','music','swimming'))



//lab7

// let doubleAndReturnArgs = (arr,...number) =>{
//   return ([...arr,...number.map((item) => item*item)])
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));



//lap 9 

// let name = [1,2,3,4]
// let cloneArray = (arr) => {
//   return [...arr]
// }
// let e = cloneArray(name)
// console.log(name)



//lap 10

// let name = {a:1, b:2, c:3, d:4}
// let cloneArray = (arr) => {
//   return {...arr}
// }
// let e = cloneArray(name)
// console.log(name)


//-----------Destructuring-------------//



// Lap 11

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // ตอบ Maya
// console.log(second); // ตอบ Marisa
// console.log(third); // ตอบ Chi



// Lap 12

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // ตอบ Raindrops on roses
// console.log(whiskers); // ตอบ whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ตอบ Array 0:Bright copper kettles, 1:warm woolen mittens



// Lap 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // ตอบ [10, 30, 20]

// Lap 14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // ตอบ 8
// console.log(yearNeptuneDiscovered); // ตอบ 1846

// Lap 15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // ตอบ { yearMarsDiscovered:1659,yearNeptuneDiscovered:1846 }


// Lap 16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // ตอบ `Your name is Alejandro and you like purple`
// getUserData({ firstName: 'Melissa' }); // ตอบ `Your name is Melissa and you like green`
// getUserData({}); // ตอบ Your name is undifined and your like green


// Lap 17
// let guest = 'Jane';
// let admin = 'Pete';
// let [new_guest,new_admin] = [admin,guest]
// console.log(new_guest, new_admin) // Pete Jane

//  Lab 18
// let user = { firstName: "Aaa", lastName: "Bbb", age: 19 }
// let checkAge = ({ firstName, lastName, age }) => {
//     age > 18 ? console.log(`Welcome ${firstName} ${lastName}`) : console.log("No authorized");
// }
// checkAge(user)


// Lap 19
// let user = {
//     name: 'John',
//     years: 27
//   };


// let {
//     name,
//     years:age,
//     isadmin = false
// } = user


// console.log(name);
// console.log(age);
// console.log(isadmin);


// Lab 21

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


// Lab 22

// const obj = { prop: 5, prop2: 10 };
// let { prop: a, prop2: b } = obj

// console.log(a);
// console.log(b);

// Lab 23
// let a, b;
// let { a, b } = { a: 1, b: 2 };
// console.log(a)
// console.log(b)



// Lap 24

// const [, , , a, b] = [1, 2, 3];
// console.log(a)
// console.log(b)



// lab25

// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2: [, y] } = q

// console.log(x);
// console.log(y);



// Lap 26

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y,]
//     }
//   }
// } = q

// console.log(x);
// console.log(y);


// Lap 27

// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' }
//   ];



// for (let key of names){
//     let{firstName , lastName} = key
//     fullname = ${firstName}  ${lastName}
//     console.log(fullname)
// }


// lab 28
// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];


//   for (let i of users){
//     let {user,age="unknown"} = i
//     console.log(user,age);

//   }