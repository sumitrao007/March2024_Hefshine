
// Anonymous function 
// function does not have any name 
// function execute there itself

 let temp1=function (){
        console.log("U r in first type Anonymous function ")
    }

    // temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);

}

// console.log("Addition is "+temp2(10,5));


// Fat Arrow function / Arrow function 
// Advnaced version of Anonymous function 
   
 let temp3= ()=>{
    console.log("fat Arrow function is called");
 }

//  temp3();

let temp4=(a:number,b:number):number=>{
    return (a+b);
}

let res1= temp4(10,8);

console.log("Result is "+res1);









