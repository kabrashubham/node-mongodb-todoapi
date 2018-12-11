// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongo');
    }
    console.log('Connected')
    
    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5c0f48e578be130e7140f793') },{
         $set:{
             text : 'Lunch and Dinner'
         }   
        },{
            returnOriginal :false
        }
        
        ).then((result) => {
        console.log('Todos', result);
    });
    // db.close();
})
