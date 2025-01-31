let person={
    name:"Adit",
    age:"19",
    profession:"student"
};
for(let key in person){
    console.log(key,":",person[key]);
}
let list = ["one", "two", "three", "four"];
for(let index in list){
    console.log(index,":",list[index]);
}
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}
const testScores = {
       Math: 90,
       Science: 85,
       History: 78,
       English: 92,
       Geography: 88,
};
function calculateaveragescore(score){
    let totalscore=0;
    let num=0;
    for(let subject in score){
        totalscore=totalscore+score[subject];
        num=num+1;
        
    }
    return totalscore / num;
}
console.log(calculateaveragescore(testScores));