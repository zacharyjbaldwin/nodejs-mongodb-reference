const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server!');
    }
    console.log('Successfully connected to the MongoDB server!');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59ea5bbaf7ff1d779e4c2c43')
    // }).toArray().then((documents) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('59ea5bbaf7ff1d779e4c2c43')
    // }).count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Zachary'}).toArray().then((documents) => {
        console.log(documents);
    });

    db.close();
});
