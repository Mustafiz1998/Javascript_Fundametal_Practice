//condition:
//if...else
//example-1:
const tk=200;
const pocketmoney=0;
if(tk>0){
  console.log('I have pocketmoney');
}else{
    console.log('I dont have pocketmoney');;
};

//example-2:
const money=500;
if(money>=200){
    console.log('I will buy Football');
}else{
    console.log('I will buy tennis ball');
};

//Exapmple-3:
const isRaining=true;
if(!isRaining){
    console.log('i stay home');
}else{
    console.log('i will go to school');
}

//if...else if...if
//example-1:
const isHoliday=false;
if(isHoliday){
    console.log('i will go to park');
}else if(!isHoliday){
    console.log('i will go to office');
}else{
    console.log('duty on');
}

//example-2:
const bazarKoroch=2000;

if(bazarKoroch==2000){
    console.log('mach,gosto or sobji kinbo');
}else if(bazarKoroch<=1000){
    console.log('gosto ar sobji kinbo');
}else{
    console.log('kicui kinbona');
}

//example-3:
const appleJuice=200;
const mangoJuice=400;
const haveMoney=100;

if(haveMoney>=appleJuice){
    console.log('buy appleJuice');
}else if(haveMoney>=mangoJuice){
    console.log('buy mango juice');
}else{
    console.log('buy water');
}
//if...if
const ifhaveMoney=500;
if(ifhaveMoney>=200){
    console.log('buy applejuice');
}
if(ifhaveMoney>=400){
    console.log('buy mango juice');
}
//switch case
//example-1:
const day='sun';
switch(day){
    case 'sat':
        console.log('sat');
        break;

        case 'sun':
            console.log('holiday');
            break;
            case 'mon':
                console.log('mon');
                break;
                default:
                    console.log('nothing');
}

//example-2:

//ternery operator
//example-1:
const age=18;
const calAge=age>=18?'Adult':'Child';
console.log(calAge);

//example-2:
 const appleKg=200;
 const applePrice=appleKg>200?'apple kinbo na':'apple kinbo';
 console.log(applePrice);
