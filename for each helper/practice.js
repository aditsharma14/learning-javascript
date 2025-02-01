let colors = ["teal", "blue", "red", "green"];
colors.forEach(color => {console.log(color)});
const words = ["hello", "bird", "table", "football", "pipe", "code"];
const capWords = words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});
  
console.log(words);
let numbers = [1, 2, 3, 4, 5];
let sum=0;
function adder(number){
    sum=sum+number;
}
numbers.forEach(num => {
    adder(num);
});
console.log(sum);
