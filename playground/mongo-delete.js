// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongo');
    }
    console.log('Connected')
    
    // db.collection('Todos').deleteMany({ text: 'Lunch' }).then((result) => {
    //     console.log('Todos', result)
    // });
    // db.collection('Todos').deleteOne({ text: 'Lunch1' }).then((result) => {
    //     console.log('Todos', result)
    // });
    db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
        console.log('Todos', result);
    });
    // db.close();
})
