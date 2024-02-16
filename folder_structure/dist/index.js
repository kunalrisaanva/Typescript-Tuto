"use strict";
let perosonName = "kunal";
let personAge = 22;
let check = true;
let thirdPersonName = "manoj";
// second stynex 
let fourthPersonName = "sonu";
// union varible multiple data type
let checkI = "lets'go";
// let kunal: unknown = "kunal"; avoid any use unknown 
// funtion example leter it cover it fully explained
const plus = (n, m) => {
    return n + m;
};
// const ans = plus(2,2)
// console.log(ans);
// type alises
// type Test = string | number
// const nambo : Test = 1992
// type Username = (n:number , o:number) => number
// const testingFuntion : Username = (a ,b) => {
//    return a+b
// }
// const ans = testingFuntion(3,3)
// console.log(ans);
// -----------------------------------------
// aray 
// const arr = [1,3,4,5,6]
// arry
const array = [23., 12, 32, 4, 3];
const array2 = ["kunal", "jangra"];
const array4 = [1, 2, 3, 4];
const array5 = ["kunal", "jangra"];
const array6 = [12, 21, 32423, 2];
const array7 = ["kunal", "jangra"];
// tuple 
const array8 = [21, 12, "kunal"]; // multiple data types store 
const personObject = {
    personName: "kunal",
    age: 22,
    isAvailble: true
};
const newPersonObj = {
    personName: "raman",
    age: 88,
    location: "kharak",
    isAvailble: true // optional becouse we use ? to make it optional 
};
const func = (a, b) => {
    return a + b;
};
const ans = func(8, 2);
const addFunction = (a, b, l = 10) => {
    return a + b + l;
};
// const ansofFunc = addFunction(2,2)
// console.log(ansofFunc);
// again practise of funtions in TS
// type Person  = (fName:string , lName:string) => string;
const fullName = (f, n) => {
    return f + " " + n;
};
const fname = fullName("kunal", "jangra");
// console.log(fname);
//-----------------------------------
// rest parameter operator
// type SpreadOp = (...data: number []) => number [] // preDefine 
// const spread:SpreadOp = (...data) => {
const spread = (...data) => {
    return data;
};
const ansOfSpread = spread(2, 3, 4);
console.log(ansOfSpread);
const getData = (product) => {
    console.log(product);
};
const product = {
    name: "kunal",
    stock: 2,
    price: 999,
    photo: "sdds"
};
// getData(product)
// never type 
// const err = new Error()
// const errorHandler = (): never => {
//     throw new Error();
// }
// type themeMode = "light" | "dark"
// const mode: themeMode = "dark"
///// clasess ---------------------
// class Player {
//   // private cannot access direct but can access into funtion 
//   // public by default its public 
//   // protected cannot access current class but cann acess into subclassess
//     constructor(private height:number,public weight: number , protected power:number){
//         // this.height = height;
//         // this.weight = weight;
//     }
//     getMyHeight = () => this.height
// }
// const abhi = new Player(100,200,23);
// console.log(abhi.getMyHeight);
// cover it later after revising oops in js
// ---------------------------------------------
// type Assertion > dom manupulation 
// const btn = document.getElementById("btn") as HTMLElement
// const btn = <HTMLElement> document.getElementById("btn")!;
const btn = document.getElementById("btn");
btn.onclick;
const image = document.getElementById("image");
image.src;
const form = document.getElementById("myform");
const myInput = document.querySelector("form > input ");
form.onsubmit = (e) => {
    e.preventDefault();
    const values = Number(myInput.value);
    console.log(values);
    console.log(typeof values);
    //  to do add 20 number and write into html 
};
// one more asserstion cover it later 
//------------------------------------------------------
// Type utility 
// Partial <Type>
// Required <Type>
// Readonly <Type>
// parital type
//  type User = {
//     name: string;
//     email: string;
//  }
//  type User2 = Partial<User>
// required type - oppostire of partial 
// type User = {
//     name?: string;
//     email?: string;
//  }
//  type User2 = Required<User>
//Read ONly -- make every property read only 
// type User = {
// readonly name:string;
//  email:string;
// }
// const user :User ={
//     name :"kunal",
//     email : "kunalrisaanva.com"
// }
// user.name ="raman" // errr cannot change readonly values 
// Record key , Types
// type User = {
//     name:string;
//     email:string;
// }
// type User2 = Record<"name"|"email" | "gender", string>
// expamle =>>>>
// interface UserInfo {
//     name:string;
//     email:string;
// }
// type Username = "john" | "levi" | "elon" | "jack"
// to do try rest of Type of utility 
//----------------------------------------------------
// Generics in Ts
// const func = <T>(n:  T): T =>{
//     return n
// }
// const ans = func(1);
// const ans2 = func("kunal");
// interface Person {
//     name: string;
//     age: number;
// }
// const func = <T>( n: T): T =>{
//   return n
// }
// const person1:Person ={
//     name:"kunal",
//     age:12
// }
// const ans = func<Person>(person1);
// console.log(ans.name);
// const func2 = (n: number): number => {
//   return n
// }
// const ans2 = func2(2);
// console.log(ans2);
// const getData2 = (key:number):number => {
//   return key
// }
// const ans3 = getData(3);
// const printLog = <T>(value: T):T => {
//   console.log(value);
//   return value
// }
// const a = printLog(2)
// const b = printLog("2")
// type Person = {
//   name:string;
//   age:number
// }
// const perons1 : Person = {
//   name:"kunla",
//   age:22
// }
// const printLog = <T>(value: T):T => {
//   console.log(value);
//   return value
// }
// const a = printLog<Person>(perons1)
// const b = printLog("2")
