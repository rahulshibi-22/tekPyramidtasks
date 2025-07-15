
// console.log("1.no-name 2.buhari 3.location 4.bishmi")
// let userSelectedhotel = Number(prompt("Select the hotel"));
// let num = 10.2222;
// console.log(typeof num);

// let n = 10;
// console.log("value of n is"+n);
// console.log("value of num is",n);
// console.log(`value of n is ${n}`);

// console.log(1==true);
// console.log(0==false);

// ------------------------------------------------PRIME NUMBER---------------------------------------------------
// function primeNumber(number) {

//     console.log(number);
//     if (number < 2) {
//         return "Not Prime number";

//     }
//     for (let i = 2; i < number / 2; i++) {
//         if (number % i == 0) {
//             return "Not Prime number";
//         }
//     }
//     return "Prime number";

// }
// console.log(primeNumber(8));


// NON PRIMITIVE
// OBJECT4

// let obj = {
//   fullName : "Vishwa", age :  22, hobbies : ["","","",[""]]
// };

// for (const key in obj) {
//   console.log(key);
// }
// ---------------------------------------HOISTING-----------------------------
// var a = 0;
// console.log(a);
// var a = 10;
// var a = 20;
// ----------------------------------------FUNCTION CALL----------------------------------
// myFun();
// function myFun(){
//   console.log("wubcbwbcawhbvc");

// }

// let greet =  function myFun(){
//   console.log("HElloooooo");
// }
// greet();
// console.log(greet);

// console.log(greet);
// let greet =  function(){
//   console.log("HElloooooo");
// }
//  --------error

// console.log(greet());
// let greet =  function() {
//   console.log("HElloooooo");
// }
// greet();

// console.log([2,3,4,5] +","+ [1,2,4,5]);

// if ([]) {
//   console.log("HAHAHAHAHAHAHA");

// }

// console.log([1,2,3].push(12));

// console.log("Hello" < "Hello");
// console.log("Hello" == "Hello");
// console.log("Hello" > "hello");
// console.log([1,2]=="1,2");

// In a script tag or a regular .js file (not a module)

// let scriptVariable = "I am in script scope";
// const scriptConstant = 123;

// function myFunction() {
//   console.log(scriptVariable); // Accessible
// }

// myFunction();
// console.log(scriptConstant); // Accessible

// console.log(window.scriptVariable); // Undefined (not a property of the global object)

// var a = 10;
// function myFun(){
//   b = 10;
//   console.log(a);
//   console.log(b);
// }
// console.log(b);
// myFun();
// -------------------------------------------------LEXICAL SCOPE-------------------------------------------------
// function outerFun() {
//   let name = "Rahul Shibi";
//   var name2; name2 = "Vishwa";
//   function innerFun() {
//     console.log(name);
//     console.log(name2);

//   }
//   innerFun();
// }
// outerFun();
// --------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------GLOBAL SCOPE--------------------------------------------------
// a = 10; // global

// function show() {
//   a = 10;
//   console.log(a); // ✅ can access global
// }
// show();

// function show1(){
//   console.log(a);
// }
// show1()

// console.log(window.a);
// -----------------------------------------------------------------------------------------------------------------------

// let a ;
// a+=10;
// console.log(10 != "10");

// ----------------------------------------------------LOGICAL OPERATOR---------------------------------------------------

// console.log(30 & 444);

// let a = 10;
// let b = 4;
// let res = ++a;
// let res1 = a++;
// let b = a++;
// let c = ++b;
// console.log(res +","+ res1);
// console.log(a +","+ b +","+c);

// let n = 4
// let m = n++
// console.log(n);
// console.log(m)

// if (true) {
//   var y = 30;
//   var z = 40;
//   console.log(y, z); // ✅
// }
// console.log(y, z); // ❌ ReferenceError

// --------------------------------------------OUTPUT BASED QUESTIONS-------------------------------------------------
// console.log(typeof Array);
// console.log((1,2,3,4,8));
// console.log(0.1+0.2);
// console.log(Math.round(0.1+0.3));

// let a = 5 + "5"
// console.log(a) ; console.log(a)

// var _$ = 10;
// console.log(_$);

// var arr=[1,"string",true,undefined,3.5555555555555555555555555555,null,{names:'abc',age : 22,address : ["vadapalani","Chennai",600026]}]
// console.log(arr)

// console.log("Hello"=="hello");

// (function sum(a,b){
//     console.log(a+b);

//     (function sub(a,b){
//         console.log(a+b-c);
//     })

//     (4,4)
// })


// -----------------------------------------------------------------------------FUNCTIONS-------------------------------------------------------------------------------


// let arr = [12,10,4,8,[33,65,[42,11,[110,20,[3333]]]]];
// let arr1 = [100,222];
// console.log(arr.pop);
// console.log(arr);
// let str = "Rahul Shibi";
// console.log(arr.concat(arr1));
// console.log(arr1.slice(1,2));

// console.log(str.slice(2,-2));
// console.log(str.trim());
// console.log("----USING SPLIT----");
// console.log(str.split(" ").join(""));
// console.log("--------USING SPLIT AND JOIN--------");
// let str = "Rahul Shibi";
// console.log(str.replace(" ",""));

// let res = arr.reduce((acc,cur)=>{
//     console.log();
    
//     return 
// })
// -------------------------------REDUCE-----------------------------
// let res = arr.reduce((acc,cur)=>acc+cur,0)
// console.log(res);
// --------------------------------SOME--------------------------------
// let someRes = arr.some((ele)=>ele<0)
// console.log(someRes);
// ---------------------------------FLAT--------------------------------
// console.log(arr.flat(Infinity));

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
let a = [22,4,57,7,2];
for (let i = 0; i < a.length; i++) {
    const element = "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
    console.log(element);
    for (let j = 0; j < a.length; j++) {
        const element = a[j];
        console.log(element);
    }
}