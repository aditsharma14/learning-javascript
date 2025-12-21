const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};
map.set(keyOne,"value of key one");
map.set(keyTwo,"value of key two");
map.set(keyThree,"value of key 3");
console.log(map);