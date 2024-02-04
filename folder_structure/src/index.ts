let perosonName:string = "kunal";
let personAge:number = 22;
let check:boolean = true



// another type 

let secondPersonName = <string>"raman";

// union varible multiple data type

let reached:string|boolean;

reached = true



// const test = (n: number , m:number): number =>{
//     console.log(n,m);
//     return n*m
// }



// type alises

// type Username = string | number

// type Username = (n:number , b:number) => number

// const test:Username = (a,b) =>{
//     console.log(a,b);
//     return a*b
// } 


//aray 

// const arr = [1,3,4,5,6]

// arr

// const arr: number[] = [12,31,12,];
// const arr2: string[] = ["kunal","jangra"]

// const array3: Array<string> = ["kunal"] alag tarika 
// const array: Array<string | number> = [22] both value accept 


// const num: number[] = [2,2,2]
// const array: Array<string> = ["kunal","jangra"]
// const num: [number,number,number] = [2,2,2]  tuple

// array.map( data => data.length)



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