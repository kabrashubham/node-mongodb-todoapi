var mongoose = require('mongoose');

// var newTodo = new Todo({
//     text :"    Hello World   "
// });

var User = mongoose.model('User',{
email:{
    type : String,
    required : true,
    minLength : 1,
    trim : true
}
})

// var newTodo = new Todo({
//     text :"Cook Dinner and Lunch",
//     completed:true,
//     completedAt: 12
// });

// newTodo.save().then((doc)=>{
// console.log(doc)
// },(e)=>{
//     console.log('Unable to save',e)
// });

module.exports = {User};