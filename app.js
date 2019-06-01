// const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


//Get single Post 

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// CreateData

// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom post'
// }

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });


// Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });


// ARROW FUNCTIONS

// const sayHello = function() {
//   console.log('Hello');
// }


// const sayHello = () => {
//   console.log('Hello');
// } 


// One line function does not need braces
// const sayHello = () => console.log('Hello');


// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// Return object
// const sayHello = () => ({msg: 'Helo'});

// Single param does not need parenthesis

// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firsName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');


const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
// return name.length;
// });

// Shorter

const nameLengths = users.map((name) => {
  return name.length;
  });

  // Shortest
  const nameLengths = users.map(name => name.length);

console.log(nameLengths)