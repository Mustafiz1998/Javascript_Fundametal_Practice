// //higher order function
// function sawMill(tree,fn){
//     return fn(tree);
// }
// function treeCutter(tree){
//     return tree*4;
// }
// function furnitureMaker(tree){
//     return tree*0.1;
// }

// console.log(sawMill(255,treeCutter));
// console.log(sawMill(255,furnitureMaker));

// //callback function:
// const callback=(n)=>{
//     return n**2
// }
// function cube(callback,n){
//     return callback(n)*n
// }
// console.log(cube(callback,3));

//example-2:

// function square(x){
//     return x*2;
// }
// function higherOrderFunction(num,callback){
//     return callback(num);
// }
// // console.log(higherOrderFunction(6,square));

function funName(param,fun){
    return fun(param);
}

function mutifly(param){
    return param*3;
}
console.log(funName(3,mutifly));


