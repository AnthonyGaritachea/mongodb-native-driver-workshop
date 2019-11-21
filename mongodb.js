const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionUrl, (error, client) => {
    if(error){
        return console.log('unable to connect to database')
    }
   const db = client.db(database)
});
