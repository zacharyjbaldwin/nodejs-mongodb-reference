const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server!');
    }
    console.log('Successfully connected to the MongoDB server!');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59ea7129f7ff1d779e4c2ef9")
    }, {
        $set: {
            name: 'Zachary'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();

});
