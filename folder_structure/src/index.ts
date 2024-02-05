let perosonName:string = "kunal";
let personAge:number = 22;
let check:boolean = true


let thirdPersonName: string = "manoj"

// second stynex 

let fourthPersonName = <string> "sonu" 

// union varible multiple data type

let checkI :string | boolean = "lets'go"

// let kunal: unknown = "kunal"; avoid any use unknown 


// funtion example leter it cover it fully explained

const plus = (n: number , m: number): number =>{
   return n+m
}

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



// aray 

// const arr = [1,3,4,5,6]

// arr
const array: number [] = [23.,12,32,4,3];
const array2: string [] = ["kunal","jangra"];
const array4 = <number []>[1,2,3,4]
const array5 = <string []>["kunal","jangra"];
const array6: Array<number> = [12,21,32423,2];
const array7:Array<string> = ["kunal","jangra"]

// tuple 

const array8: readonly [number,number,string] = [21,12,"kunal"]; // multiple data types store 

// array.map( data => data.)  // data.  return  all number method 



// objects 

// long 

// const obj:{
//     age: number;
//     perosonName: string;
// } = {
//     age :99,
//     perosonName:"kunal"
// }

// short 

// type Obj = {
//     age: number,
//     nambo: string,
//     isAlive?: boolean  /// ? make them optional 
// }

// interface Obj {
//     age: number,
//     nambo: string,
//     isAlive?: boolean  /// ? make them optional 
// }



// const ob2:Obj ={
//     age:22,
//     nambo:"kunal",
//     isAlive:true
// }

// const ob3:Obj ={
//     age:12,
//     nambo:"raman",
   
// }

// type FuncType = (n: number , m: number) => void;
// interface NewObje extends Obj {
//   soler:boolean
//   func?:FuncType
// }

// const gigi:NewObje = {
//  nambo:"kunal",
//  age:22,
//  soler:true,
//  func:(n,m)=>{
//     console.log(n,m);
//  }
 
// }


// funtions in typeScript 


// ------------------------------------


// type Func = (a: number , b: number ,l?: number)=> number | string
// optional parameter 
// const funct:Func = (a,b,l)=> {
//     if(typeof l === "undefined") return a*b
//   return a*b*l
// }



// const res = funct(2,2,2)
// console.log(res);



// type Func = (a: number , b: number ,l?: number)=> number | string
// // default parameter 
// const funct:Func = (a,b,l = 2)=> { 
//     // const funct = (a:number , b: number , l: number = 2 ): number => {
   
//   return a*b*l
// }



// const res = funct(2,2)
// console.log(res);



// rest operator

// type FuncType = (...a: number []) => number []


// // const funct = (...a: number []) => { 
// const funct:FuncType = (...a) => {
//   return a
// }

// funct(1,1,1,1)



// funtion 

// type FuncType = (...a: number []) => number

// // function lol (n: number):number{
//     // return n
// // }

// const lol:FuncType  = function data(a){
//   return a
// }


// function with object


// const getData = (prduct:{name:string , stock: number , price: number}) => {
//    console.log(prduct);
// }


interface Product{
name:string;
stock:number;
price:number;
readonly photo:string;  // cannot change it later 
}


type GetDataType = (product: Product) => void


const getData:GetDataType = (product) => {
  console.log(product);
}

const product: Product = {
    name:"kunal",
    stock:2,
    price:999,
    photo:"sdds"
}



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
const btn =  document.getElementById("btn")!;

btn.onclick

const image = document.getElementById("image") as HTMLImageElement

image.src


const form = document.getElementById("myform") as HTMLFormElement
const myInput = document.querySelector("form > input ") as HTMLInputElement
form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault()
    const values =  Number(myInput.value)
    console.log(values);
    console.log(typeof values);
    //  to do add 20 number and write into html 
}

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



 