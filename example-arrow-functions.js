var names = ['Andrew', 'Winnie', 'Liam'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name+'!';
// console.log(returnMe('Winnie'));

var person = {
  name: 'Winnie',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};
//without the arrow function, you lose the 'this' binding to the parent
//element

person.greet();

//statement arrow function
var addStatement = (a, b) =>{
  return a + b;
}
console.log(addStatement(4, 7));

//expression arrow function
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
