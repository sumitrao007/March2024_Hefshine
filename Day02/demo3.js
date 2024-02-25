// Anonymous function 
// function does not have any name 
// function execute there itself
var temp1 = function () {
    console.log("U r in first type Anonymous function ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp2(10,5));
// Fat Arrow function / Arrow function 
// Advnaced version of Anonymous function 
var temp3 = function () {
    console.log("fat Arrow function is called");
};
//  temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(10, 8);
console.log("Result is " + res1);
