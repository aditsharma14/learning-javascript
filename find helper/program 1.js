const peoples = [
    { name: "huxn", age: 17 },
    { name: "john", age: 18 },
    { name: "alex", age: 20 },
    { name: "jimmy", age: 30 },
    { name: "alex", age: 30 },
  ];
const res=peoples.find((person)=>person.name=="alex");
const filterRes = peoples.filter(person => person.name === 'alex')
console.log(res);
console.log(filterRes);
