// problem 01
// var number = 5;
// if ( number > 6){
//     console.log('The number is positive');
// }
// else if(number >10){
//     console.log('This is the right number');
// }
// else if(number > 0){
//     console.log('Real number');
// }
// else{
//     console.log('The number is not positive');
// }

// // problem 02

// var number = 30;
// if(number % 3 === 0){
//     console.log('The number is even');
// }
// else{
//     console.log('The number is odd');
// }

// problem 03
// var num1 = 10;
// var num2 = 15;
// if (num1 > num2){
//     console.log('num1 is greater');
// }
// else if(num1 < num2){
//     console.log('First number is greater than others number');
// }
// else{
//     console.log('Num2 is greater');
// }

// problem 04: 
// var score = 33;
// var grade;
// if(score >= 90){
//     grade = 'A';
// }
// else if(score >=80){
//     grade = 'B';
// }
// else if(score >= 70){
//     grade = 'C';
// }
// else if(score >=60){
//     grade = 'D';
// }
// else {
//     grade = 'F';
// }
// console.log('Grade: ' + grade);

// problem 05:

// var age = 25;
// var ticketPrice;
// if(age < 12){
//     ticketPrice = 5;
// }
// else if(age > 12 && age <18){
//     ticketPrice = 10;
// }
// else if(age >=18 && age < 60){
//     ticketPrice = 20;
// }
// else{
//     ticketPrice = 15; 
// }
// console.log('Ticket price: $' + ticketPrice);


// problem 06:
var year = 2024;
if(year %4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(year + ' is a leap year');
}
else{
    console.log(year + ' is not a leap year');
}