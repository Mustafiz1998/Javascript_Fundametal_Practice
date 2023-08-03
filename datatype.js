//data type:
//primitive:
//1. string
const name='Monir';

//2. number
const number=100;

//3. bolean
const isRaining=true;
console.log(typeof(isRaining));//bolean


//4. null,
//5. undefined,
//6. symbol
//non primitve:

//Naming convension:
// const @='monir';//not possible
// const 7y=100;//not possible;
// const $name='variable';//possible
//  const my_variable='const';//possible
//  const new-year= 2023;//not possible
// const camelCase='camelcase'//possible

//Math Operator:
const a=10;
const b=5;

console.log(sum=a+b);//add 15
console.log(sub=a-b);//sub 5
console.log(mutiply=a*b);//50
console.log(divided=a/b);//2
console.log(modulus=a%b);//0
console.log(power=a**b);//100000

//tofixed():
const num1=0.1;
const num2=0.2;

const add=num1+num2;
console.log(add.toFixed(2));

console.log(add.toFixed(1));

console.log(add.toFixed(5));

//Number constructor:
console.log(Number(add.toFixed(3)));
console.log(Number('10'));//10
console.log(Number('10'+'10'));//10
console.log(Number('12px'));//NaN
console.log(parseInt('12px'));//12
console.log(+add.toFixed(1));//shortcut way of number constructor


