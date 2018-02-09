console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// *************-.uniq()*************
var filteredArray = _.uniq(['Valerie', 'Matt', 8, 'Valerie', 8, 2, 9, 11]);

console.log(filteredArray)

// *********_.isString()*****************
// console.log(_.isString(true));
// console.log(_.isString('Valerie'));


// **************os***************
// var user = os.userInfo(); 
// var res = notes.addNote();

// console.log('Result:', notes.add(9, -2));
// console.log(res);
// console.log(user)

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('unable to write')
//   }
// });

