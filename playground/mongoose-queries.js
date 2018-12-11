const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c0f8060514daf4133f09135';
Todo.find({
    _id:id
}).then((todos)=>{
console.log(todos);
})

Todo.findOne({
    _id:id
}).then((todo)=>{
console.log(todo);
})

Todo.findById(id).then((todo)=>{
console.log(todo);
});