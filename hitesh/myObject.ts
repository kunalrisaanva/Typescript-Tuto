// const User = {   // simple object 
//  name:"kunal",
//  email:"k@gmail.com",
//  isActive: true
// }

// function createUser({name:string,isPaid:bollean}){}

// let newUser = {name:"kunal",isPaid:false,email:"k@gmail.com"}   // odd behavier 

// createUser(newUser);  

// function createCourse():{name:string,price:number}{
//     return {name:"react js",price:77777}
// }




//  alise  

// type User= {
//     name:string;
//     email:string;
//     isActive:boolean;
// }


// function createUser(user:User):User {
//    return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})


type User= {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditInfo?:string
}


let userOne:User = {
    _id:"99",
    name:"kunal",
    email:"kgmail.com",
    isActive:true
}


userOne.email = "rgmail.com"
// userOne._id = 98


type CardNumber = {
    cardNumber:string
}


type CardDate  = {
    cardDate:string
}


type CardDetails = CardNumber & CardDate & {
    cvv:string
}




export {}