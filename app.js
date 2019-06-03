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


// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
// return name.length;
// });

// Shorter

// const nameLengths = users.map((name) => {
//   return name.length;
//   });

  // Shortest
//   const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

const http = new EasyHTTP;


// Get users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)

// .then(data => console.log(data))
// .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)

// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')

.then(data => console.log(data))
.catch(err => console.log(err));


// Async & Await
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


  // async function getUsers() {
  //   // await response of the fetch call
  //    const response = await fetch
  //    ('https://jsonplaceholder.typicode.com/users');

  // // Only proceed once its resolved
  // const data = await response.json();

  // // only proceed once second promise is resolved
  // return data;
  // }

  // getUsers().then(users => console.log(users));

