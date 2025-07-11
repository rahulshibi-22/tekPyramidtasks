// function oddOreven(number) {

//     console.log(number);

//     if (number % 2 == 0)
//         return "Give Number " + number + " Is Even";
//     else {
//         return "Give Number " + number + " Is Odd"
//     }
// }
// console.log(oddOreven(1));

function oddOreven(number) {
    return `Given number ${number} is ${number%2===0 ? "Even" : "Odd"}`;
}
console.log(oddOreven(8));
