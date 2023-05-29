const db = require("./db");
function listarSalas() {
    return db.findALL("salas");
}

let buscarSala = async(idsala)=>{
    db.findOne("salas",idsala);
}

let atualizarMensagens= async(sala)=>{
    return await db.update("salas",sala,{_id:sala._id});
}
module.exports = {listarSalas}

let buscarMensagens = async(idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.timesamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}