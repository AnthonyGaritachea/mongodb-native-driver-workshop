const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('unable to connect to database')
    }
   const db = client.db(database)

//    db.collection('users').insertOne({
//        name: 'Anthony',
//        age: '22'
//    })
    // db.collection('users').insertMany([
    //     {
    //         name: "Jen",
    //         age: 28
    //     },
    //     {
    //         name: "Gunther",
    //         age: 27
    //     }
    // ])
    db.collection('tasks').insertMany([
        {
            description: 'finish projects',
            completed: false
        },
        {
            description: 'change engine oil',
            completed: true
        },
        {
            description: 'shop for groceries',
            completed: false
        }], (error, result) => {
            if (error) {
                return console.log(error)
            }
            console.log(result.ops)
        } 
    )
});
