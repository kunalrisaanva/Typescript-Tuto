let score:number | string = 33
score = "winner"

type User = {
    name:string;
    id:number;
}


type Admin = {
    username:string;
    id:number;
}


let kunal:User | Admin = {
    name:"kkunal",
    id:2
} 

kunal = {
    username:"kuu",
    id:12
}

// function getDbId(id: string| number){

//     console.log(`DB ID IS:${id}`);
// }

// getDbId(2)



// union nerrowing 

function getDbId(id: string| number){

    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }

    if(typeof id === "number"){
        id + 2
    }

}

getDbId(2)



// array 

const data: number [] = [12,3,2,2];
const dat2: string [] = ["","",""];
const dat3: number [] | string [] = [12,3,2,2];
const dat4: (number | string | boolean ) [] = [12,3,2,"f","df",true];


let expreince : "beginer" | "intermidate" | "pro"

expreince = "intermidate";






export {}
