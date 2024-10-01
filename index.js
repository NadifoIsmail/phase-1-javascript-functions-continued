function saturdayFun(activity = 'roller-skate'){
 return `This Saturday, I want to ${activity}!`
}
console.log (saturdayFun());
console.log (saturdayFun('swim'));

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}
console.log(mondayWork());
console.log(mondayWork('work from home'));

function wrapAdjective(par1 = '*') {
    return function (par2 = 'special') {
        return `You are ${par1}${par2}${par1}!`
    } 
}

let results1 = wrapAdjective()();
let results2 = wrapAdjective('||')('a dedicated programmer');

console.log(results1);
console.log(results2);