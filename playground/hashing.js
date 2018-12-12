const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');



var data={
    id:4
};
var token = jwt.sign(data,'abc123')
console.log(token)
var decoded = jwt.verify(token,'abc123')
console.log(decoded)

// var message = 'I am user number 7';
// var hash = SHA256(message).toString();

// console.log(message)
// console.log(hash)

// var data={
//     id:4
// };

// var token ={
//     data,
//     hash:SHA256(JSON.stringify(data) +  'some data').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'some data').toString();

// if(resultHash === token.hash){
//     console.log('data was not changed')
// }
// else{
//     console.log('Data was changed')
// }