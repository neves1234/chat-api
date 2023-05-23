const { connect } = require("../../api");
const db = require("./db");
async function registrarUsuario(nick){
    return await db.insertOne("Usuario",{"nick":nick});

}

module.exports = {registrarUsuario}

async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}