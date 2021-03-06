// ARROW FUNCTIONS AND CONTEXT

let user = {
  name: "kristen",
  changeNameFunc: function () {
    console.log("value of this where arrow func is defined:\n", this);
    return (newName) => {
      // console.log('value of this inside arrow func:\n', this);
      this.name = newName;
      this.speak();
    };
  },

  noChangeNameFunc: function () {
    return function (newName) {
      // console.log('value of this inside regular func:\n', this);
      this.name = newName;
      this.speak();
      // console.log(`hi my name is ${this.name}`)
    };
  },

  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },

  print: () => {
    console.log(this);
  },

  printTwo: function () {
    console.log(this);
  },

  whatIsThis: console.log(this),

  regularFunc: function () {
    console.log(this);
  },
};

user.whatIsThis;

user.regularFunc();

// let noChangeName = user.noChangeNameFunc();
// // noChangeName('bob'); // TypeError: this.speak is not a function

let changeName = user.changeNameFunc();
changeName("bob");
// console.log(user);

// user.print() // {}
// user.printTwo();

// NO BINDING WITH ARROW FUNCTIONS

// let badger = {
// 	name: 'badger'
// }

// let noReturnName = () => {
// 	console.log(this.name);
// }
// // noReturnName() // undefined

// let notBound = noReturnName.bind(badger);
// // notBound(); // undefined

// let returnName = function() {
// 	console.log(this.name);
// }

// let bound = returnName.bind(badger);
// bound() // badger
