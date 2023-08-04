//destructuring
//array destructuring
const arr=[1,2,3,4,5];
const [num1,,num2,,num5]=arr;
console.log(num1,num2,num5);

//example-2:

const fruits=['apple','mango','orange'];
const [apple,,orange]=fruits;
console.log(apple,orange);

//object destructuring
//example-1;
const persion={
    Name:'Monir',
    fullName:'Mostafizur Rahman',
    birthYear: 1998,
}
const {Name,fullName,birthYear}=persion;
console.log(Name);

//Nested destructuring:
const programmingLanguage=[
    ['c','c++','c#'],
    ['java','javascript','pyton'],
];

const [[c,,],[java,,pyton]]=programmingLanguage;
console.log(c,java,pyton);

//nested object destructuring
const obj={
    grandParent:{
        parent:{
            child:['child1','child2']
        },
    },
};

const result=obj.grandParent.parent.child[0];
console.log(result);