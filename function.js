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
// function declaration:
console.log(positveAdder([2,3,-6,12,-20]));//because of hoistiing
function positveAdder(arr){
    let sum = 0;
    
    for(let num of arr){
     if(num>0){
        sum+=num;
     }

    }
    return sum;
}

//max number
function max(arr){
    let max=[0];
    for(let num of arr){
        if(num>max){
            max=num;
        }
    }
    return max;
}
console.log(max([1,3,4,5,6,7]));

//function Expression:
const positveAdder=function(arr){
    let sum=0;
    for(let num of arr){
        if(num>0){
            sum+=num;
        }
    }
    return sum;
}
console.log(positveAdder([1,23,-3]));



//max number
const findMax=function(arr){
    let max=[0];
    for(let num of arr){
        if(max<num){
            max=num;
        }
    }
    return max;
}
console.log(findMax([2,4,5,6,7]));

//arrow function
const findMin=(arr)=>{
    let min=arr[0];

    for(let num of arr){
        if(num<min){
            min=num;
        }
    }
    return min;
}
console.log(findMin([2,4,5,1,0]));