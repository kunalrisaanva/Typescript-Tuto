function addTwo(num:number): number {
    return num+2
}

addTwo(5)


function getUpperCase(value:string): string {
    return value.toLocaleUpperCase()
}

getUpperCase("kunal");


function userSighnUp(name:string,email:string,isPaid:boolean){

}

userSighnUp("kunal","Kunalrissanva2#gmail.com",true);


let loginUser = (name:string,email:string,isPaid:boolean = false) => {}


loginUser("kunal","k@gmail.com")

export {}



//// beeter approch 

function addThree (num:number):number {
    return num+3
}

let result = addThree(2)
console.log(result);


///


// function check(myVal:number):string | boolean {
//     if(myVal < 5){
//         return true
//     }

//     return "200 ok"
// }

// check(5)


const heros = ["thor","spiderMan","ironman"];
// const heros = [1,2,3];


heros.map((data):string => `hero is ${data}`);

// function consoleError(errMessage:string):void {
//     console.log(errMessage)
// }

function handleError(errMessage:string):never {
    throw new Error(errMessage)
}


// consoleError("")

handleError("")

