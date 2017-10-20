// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server!');
    }
    console.log('Successfully connected to the MongoDB server!');

    // db.collection('Todos').insertOne({
    //     text: 'Somethings to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo.');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Zachary',
    //     age: 17,
    //     location: 'Texs'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert into Users');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
