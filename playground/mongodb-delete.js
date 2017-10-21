const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server!');
    }
    console.log('Successfully connected to the MongoDB server!');

    // db.close();

    // TODO: deleteMany
    // db.collection('Todods').deleteMany({text: 'Make lunch'}).then((result) => {
    //     console.log(result;
    // });
    // TODO: deleteOne
    // db.collection('Todos').deleteOne({text: 'Make lunch'}).then((result) => {
    //     consle.log(result);
    // });
    // TODO: findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Zachary'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('59ea713af7ff1d779e4c2f05')}).then((result) => {
        console.log(result);
    });
});
