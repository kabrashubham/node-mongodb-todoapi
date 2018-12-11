// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongo');
    }
    console.log('Connected')
    // db.collection('Todos').find({completed : false}).toArray().then((docs)=>{
    // console.log('Todos',JSON.stringify(docs,undefined,2))
    // },(err)=>{
    // console.log(err)
    // });
    db.collection('Todos').find({ completed: false }).count().then((count) => {
        console.log('Todos', count)
    }, (err) => {
        console.log(err)
    });

    // db.collection('Users').find({name:'Shubham'}).count().then((count)=>{
    //     console.log('Todos',count)
    //     },(err)=>{
    //     console.log(err)
    //     });
    // db.close();
})
