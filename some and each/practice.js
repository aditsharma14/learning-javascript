const peoples = ["huxn", "jordan", "alex"];
const ans=peoples.every((people)=>people.length==4);
const res2 = peoples.some((people) => people.length < 3);
console.log(ans);
console.log(res2);