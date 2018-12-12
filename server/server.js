var express = require('express');
var bodyparser = require('body-parser');
const _ = require('lodash');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyparser.json());


app.get('/users/me',(req,res)=>{
    var token = req.header('x-auth');

    User.findByToken(token).then((user)=>{
        if(!user){

        }
        res.send(user);
    })
})






app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        // console.log(doc)
        res.send(doc);
    }, (e) => {
        res.send(e)
        // console.log('Error')
    })
    // console.log(req.body);
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.send(e);
    })
});



app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    
    user.save().then(() => {
        // res.send(user);
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e) => {
        res.send(e)
    })

});




app.listen(port, () => {
    console.log('Started')
})

module.exports = { app };