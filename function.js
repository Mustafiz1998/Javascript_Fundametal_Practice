//function
//function declaration:
//eaxample-1:
function funDeclare(params){
    return params;
}
console.log(funDeclare('this is function declaration'));
//example-2:
function add(a,b){
    return a+b;
}
console.log(add(5,5));

//example-3:
function substract(a,b){
    return a-b;
}
console.log(substract(10,5));


//function expression:
//example-1;
const funExpression=function(parameter){
    return parameter;
}
const param='this is function expression';
console.log(funExpression(param));

//example-2:
const multifly=function(x,y){
    return x*y;
}
console.log(multifly(5,5));

//example-3:
const divide=function(x,y){
    return x/y;
}
console.log(divide(2,10));

//Arrow function:
//example-1:
const arrowFun=(a,b)=>a+b;
console.log(arrowFun(2,2));

//example-2:
const modulus=(a)=>{
  return a%2
}
console.log(modulus(10));