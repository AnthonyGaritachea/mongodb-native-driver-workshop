const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('unable to connect to database')
    }
   const db = client.db(database)
                     // CREATE

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
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'finish projects',
    //         completed: false
    //     },
    //     {
    //         description: 'change engine oil',
    //         completed: true
    //     },
    //     {
    //         description: 'shop for groceries',
    //         completed: false
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log(error)
    //         }
    //         console.log(result.ops)
    //     } 
    // )

                           // READ

    // db.collection('users').findOne({}, (error, user) => {
    //     if (error){
    //        return console.log(error) 
    //     }
    //     console.log(user)
    // });

    // db.collection('users').find({}, (error, user) => {
    //     if (error){
    //        return console.log(error) 
    //     }
    //     console.log(user)
    // });
                
    // db.collection('users').findOne({_id : new ObjectID("5dd5e1b441e1b11db23c5210")}, (error, user) => {
    //     if (error){
    //        return console.log(error) 
    //     }
    //     console.log(user)
    // });

    // db.collection('tasks').findOne({_id: new ObjectID('5dd5eb5e2884117efbef15c6')}, (error, task) => {
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(task)
    // });
            
    // db.collection('users').find({name: "Gunther"}).toArray((error, users) => {
    //     console.log(users)
    // });
    
    // db.collection('tasks').find({completed: false}).toArray((error, task) => {
    //     console.log(task)
    // });

    // db.collection('users').find({name: "Gunther"}).count((error, count) => {
    //     console.log(count)
    // });
                    // Updating 
        // db.collection('users').updateOne({
        //     _id: new ObjectID("5dd71ffcc5e85359bf360109")},{ $set: {name: 'Raul'}})
        //     .then(user => {
        //         console.log(user)
        //     }).catch(error => {
        //         console.log(error)
        //     });

        // db.collection('users').updateOne({
        //     _id: new ObjectID("5dd71ffcc5e85359bf360109")}, {$inc: {age: 1}})
        //     .then(user => {
        //         console.log(user)
        //     }).catch(error => {
        //         console.log(error)
        //     })

        db.collection('tasks').updateMany({completed: false}, {$set : {completed: true}})
            .then(results => {
                console.log(results.modifiedCount)
            }).catch(error => {
                console.log(error)
            });
});
