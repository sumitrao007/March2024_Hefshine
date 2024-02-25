// User Defined Function 

// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type

// 1 function without parameter & without return type

function add1(){
    console.log("U r in first Type of Function ")
}

// add1();

// 2 function with parameter & without return type

function add2(a:number,b:number){
    console.log("Addition is "+(a+b));
}

// add2(10,2);


// 3 function without parameter & with return type

function add3():number{
    return (8+8);
}

// let res= add3();

// console.log(res);

// 4 function with parameter & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

// add4(40,5)

console.log(`
    Addition is ${add4(40,5)}
`);






