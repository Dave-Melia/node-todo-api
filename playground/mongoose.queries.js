const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af9ffdc067c8b590ed1ea79';

User.findById(id).then((todo) => {
  if(!todo) {
    return console.log('User not found');
  }

  console.log('Todo', todo);
}).catch((e) => console.log(e));

// var id = '5afb6510d6b54380226e3c022';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
