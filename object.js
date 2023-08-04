//object
//object declare:
const persion={
    name:'Monir',
    age:25,
    nationality:'Bangladesh'
}
console.log(persion.name);//dot notation
console.log(persion['age']);//bracket notation
//

const student={
    name:'Jubayed',
    Roll:12,
    subject: 'Science',

    funInsideObj: function sum(a,b){
        return a+b;
    }

}
console.log(student.funInsideObj(2,3));

