const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isSubscribed: true,
    hobbies: ["Reading", "Running", "Cooking"],
    address: {
      city: "New York",
      zipCode: "10001",
    },
};
const s=JSON.stringify(person);
console.log(s);
const y=JSON.parse(s);
console.log(y);