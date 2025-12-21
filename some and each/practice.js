const peoples = ["huxn", "jordan", "alex"];
const ans=peoples.every((people)=>people.length==4);
const res2 = peoples.some((people) => people.length < 3);
console.log(ans);
console.log(res2);
const posts = [
    { id: 1, content: "Good Post" },
    { id: 1, content: "funny Post" },
    { id: 1, content: "sad Post" },
];
  
const postRes = posts.find((post) => post.content === "funny post");
console.log(postRes);