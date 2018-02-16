var square = (x) => x * x; //if you have only one argument, you don't need ()

var user = {
  name: 'Valerie',
  sayHi: () =>{
    console.log( `Hi`);
    
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  }
}

console.log(square(9));
user.sayHi();
user.sayHiAlt(1,2,3);