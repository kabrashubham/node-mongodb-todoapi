var express = require('express');
var bodyparser = require('body-parser');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyparser.json());


app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    })
    todo.save().then((doc)=>{
        // console.log(doc)
        res.send(doc);
    },(e)=>{
        res.send(e)
        // console.log('Error')
    })
// console.log(req.body);
})



app.listen(3000,()=>{
    console.log('Started on port 3000')
})

module.exports = {app};