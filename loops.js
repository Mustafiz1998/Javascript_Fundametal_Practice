//type of loop
//for loop:
//example-1:
let num=[];
for(let i=0; i<5; i++){
    num+=i;
}
console.log(num);//01234

//example-2:
//forward
for(let i=0; i<10; i++){
    console.log(i);
}
//backward
for(let i=10; i>0; i--){
    console.log(i);
}
//break
for(let i=0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(i);

}
//continue
for(let i=0; i<10; i++){
    if(i==6){
        continue;
    }
    console.log(i);
}

//while loop
let j=0;
while(j<=5){
    console.log(j);
    j++;
};

//backword
let n=5;
while(n>=0){
    console.log(n);
    n--;
}
//do while loop

let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

let k=5;
do{
    console.log(k);
    k--;
}while(k>=0);
