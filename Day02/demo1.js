// type assertion 
// any ,object,unknown 
// 1 Angle bracket => it is work in typescript 
// 2 as syntax => it is work in ts file as well as view file .html 
// 1 Angle bracket
var a;
var temp = a;
// temp.
// 2 as syntax
var temp2 = a;
// temp2.
// Operator 
// Airthmathic => +,-,*,/,%
// Logical => && ,|| ,!
// bitwise => &,|,^,~,>>,<<
// relational => >,<,>=,<=,==(It checks only value ),===(it checks data as well as data type of particular variable=> Strongly equality a===b )
// assignment => =,+=,-=,*=,/=,%=
// ternary=> condition?expression1:expression2
// unary => post/pre inc/dec a++,--a
// Sequential sat
// if,if-else,nested if-else,swaitch,break,continue 
var a1 = 21;
// if(a1<4){
//     console.log("Condition is true ")
// }else{
//     console.log("Condition is false ")
// }
var choice = 21;
// switch(choice){
//     case 1: 
//             console.log("U r in case 1 ");
//             break;
//     case 2: 
//             console.log("U r in case 2 ");
//             break;
//     default: 
//             console.log("U r in default case");
//             break;            
// }
// loop statement 
// while,do-while,for 
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do{
//     console.log("Count is "+count);
//     count--;
// }while(count!=0)
for (var i = 0; i < 4; i++) {
    console.log("Value of i " + i);
}
