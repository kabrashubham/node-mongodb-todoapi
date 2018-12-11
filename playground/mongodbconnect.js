// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
if(error){
   return console.log('Unable to connect to mongo');
}
console.log('Connected')
// db.collection('Todos').insertOne({
// text:'Spmething to do',
// completed : true
// },(err,result)=>{
// if(err){
//     return console.log('unable to do')
// }
// console.log(JSON.stringify(result.ops,undefined,2))
// })

// db.collection('Users').insertOne({
//     name:"Shubham",
//     age : 24,
//     location:"Pune"
//     },(err,result)=>{
//     if(err){
//         return console.log('unable to do')
//     }
//     console.log(JSON.stringify(result.ops,undefined,2))
//     })

db.close();
})
