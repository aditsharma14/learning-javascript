const obj={
    name:"adit sharma",
    age:23,
    greet:function(){
    return `the name is ${this.name} and his age is ${this.age}`
}
}
console.log(obj.greet());