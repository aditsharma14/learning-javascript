let numbers = [1, 2, 3, 4, 5];
let double=numbers.map((num)=>num*num);
console.log(double);
let peoples = [
    { firstName: "Macom", lastName: "Reynolds" },
    { firstName: "Kaylee", lastName: "Frye" },
    { firstName: "Jayne", lastName: "Cobb" },
];
let output=peoples.map((person)=>{
    return [person.firstName,person.lastName]});
console.log(output);
const number = [65, 44, 12, 4];
let answer=number.map((num)=>num*10);
console.log(answer);

