// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {

        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

   //findOneAndUpdate
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID("5a15b5e89834bb6ea84b9079")
   }, {
       $set: {
           name: 'Adrian'
       },
       $inc: {
           age: 3
       }
   }, {
       returnOriginal: false
   })
   .then((result) => {
        console.log(result);
    });

    // db.close();
});