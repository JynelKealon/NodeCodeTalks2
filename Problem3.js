// regular function 
const person1 = {
    name: 'Alice',
    age: 5,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
  };
  
  person1.introduce();

  //arrow function
  const person = {
    name: 'Alice',
    age: 5,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
  };
  
  person.introduce();