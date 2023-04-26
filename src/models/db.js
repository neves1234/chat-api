const { MongoClient, objectId} = require("mongodb"); 

let sigleton;

async function connect(){
    if(singleton) return singleton;
   
    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton;
}

async function findALL(collection){ 
    const db = await connect();
    return db.collection(collection).findALL().toArray();
}
module.exports = { findALL}