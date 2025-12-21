const numbers=[1,2,3,4,5,3,2,2,4,2,4];
let sum=0;
function adder(number){
    sum=sum+number;
}
numbers.forEach(adder);
console.log(sum);