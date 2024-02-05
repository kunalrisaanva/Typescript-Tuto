"use strict";
let perosonName = "kunal";
let personAge = 22;
let check = true;
// another type 
let secondPersonName = "raman";
// union varible multiple data type
let reached;
reached = true;
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
///// clasess ------------------
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
