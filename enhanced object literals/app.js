function user(name, age, work) {
    return {
      name: name,
      age: age,
      work: work,
      intro: function () {
        console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
      },
    };
  }
  
  const info = user("Adit", 18, "Programmer");
  info.intro();