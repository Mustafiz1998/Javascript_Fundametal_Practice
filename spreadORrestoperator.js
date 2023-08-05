//spread operator
const number=[1,2,3,4,5];
const numbers=[0,...number,6];
console.log(numbers);

const obj={name:'a', age:24};
const obj1={...obj}
obj1.name='b';
console.log(obj,obj1);

//rest operator
const arr=[1,2,3,4,5,6];
const [a,b,...rest]=arr;
console.log(a,b,...rest);

const fruits={
    name:'apple',
    color:'green',
    weight: '60gm',
}

const {name,...rests}=fruits;
console.log(name,rests);

//default parameter
function defaultparam(num1,num2,num3=0){
    return num1+num2+num3;
}

console.log(defaultparam(10,20));