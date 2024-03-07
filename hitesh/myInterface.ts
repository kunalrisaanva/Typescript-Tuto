interface User {
    readonly dbId:number
    name:string
    email:string
    googleId?:string;
    // printName:() => string
    printName():string  // anothher function 
    getCupon(num:string,value:number):number
}


interface User {
    githubId:string
}

interface Admin extends User {
   role:"adming" | "user" | "learner"
}

const kunal:Admin = {
   dbId:1,
   githubId:"token",
   name:"kunal",
   role:"learner", 
   email:"",
   printName:() => "",
   getCupon:(name:"kunal",off:10) => {
    return 10
   }
   
}