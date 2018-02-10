// ******* stringify() *********

// var obj = {
//   name: 'Valerie'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// ******** JSON.parse() ********

// var personString = '{"name": "Valerie", "age": 37}';

// var person = JSON.parse(personString);
// console.log(person)
// console.log(typeof person)

var fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);
// takes two arguments
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)