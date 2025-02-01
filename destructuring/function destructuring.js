function getstudentinfo({name,age,courses}){
    return{name,age,courses};
};
const student = {
       name: "John Doe",
       age: 20,
       rollNumber: "A123",
       courses: ["Mathematics", "Science", "History"],
};

const { name, age, courses } = getstudentinfo(student);
console.log(name); 
console.log(age); 
console.log(courses); 