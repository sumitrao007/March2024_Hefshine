//array 
// u can create homogenous as well hetrogenous array 
// array is growable & shrinkable dynamically 
// let a:number[]=[10,20,50,60];
var a2 = [78, 90, 63, 75];
var a3 = [2.5, 'Sumit', 78];
var a4 = [78, 96, 52];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i])
// }
// console.log(a);
// console.log(a.join("  "));
// console.log(a.join("#"));
// console.log(a.join());
// console.log(a.join(" KuchBhi "));
//foreach method 
// a.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index is "+i+ "Array is "+arr )
// });
//push & pop 
// LIFO Principal 
var a1 = [];
// a1.push(78);
// console.log(a1);
// a1.push(90,85,30);
// console.log(a1);
// let res=a1.pop();
// console.log(a1);
// console.log("Poped value is "+res);
// let a:number[]=[10,45,90,63];
// console.log(a);
// a.splice(3,0,100);
// console.log(a)
// a.splice(2,0,12,55,70);
// console.log(a);
// a.splice(3,1);
// console.log(a)
// a.splice(2,2);
// console.log(a);
// a.splice(2,1,801);
// console.log(a);
// map function 
// element by operation 
var a = [2, 3, 4, 5, 6];
var sqrarr = a.map(function (value) {
    return (value * value);
});
console.log("\n    Original Array ".concat(a, "\n\n    Squared Array ").concat(sqrarr, "\n\n"));
