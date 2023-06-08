// Example function that returns a Promise
function sayHello(name) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous task with a setTimeout
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`); // Resolve the Promise with a greeting
        } else {
          reject('No name provided.'); // Reject the Promise with an error message
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the Promise
  sayHello('Alice')
    .then(greeting => {
      console.log(greeting); // Output: Hello, Alice!
    })
    .catch(error => {
      console.error(error); // Output: No name provided.
    });
  