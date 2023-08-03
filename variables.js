//type of variables:
//var,let,const:

//var:
//Global Scope:
var name='Sakib';//declare
console.log(name);//Output: Sakib;
fullNmae='Sakib Al Hasan';//Re-assign
console.log(fullNmae);//Output: Sakib Al Hasan;

var fullName='Tamim Iqbal';//Re-declare
console.log(fullName);//Output: Tamim Iqbal;

//let:
//block scope:
 let fruits='apple';//declare
 console.log(fruits);//Output:apple
 fruits='orange'//re-assign
 console.log(fruits);//Output: orange

//  let fruits='mango';// not possible re

//const:
//block scope:
const playerName='Messi';//declare
console.log(playerName);//Messi
// playerName = "Neymar";//re assign not possible
// console.log(playerName);
// const playerName='Cr7'//re-declare not possible

//withouth variable:
//can't create any scope
language='javascript';
console.log(language);