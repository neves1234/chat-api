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

let findOne = async(collection, _id)=>{
    const db = await connect();
    let obj= await
    db.collection(collection).find({'_id':new objectId(_id)}).toArray();
    if(obj)
        return obj[0]
    return false;
}

let updateOne = async (collection, Object, param)=>{
    const db = await connect();
    let result = await
db.collection(collection).updateOne(param, {$set: Object});
return result;
}