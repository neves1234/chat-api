const db = require("./db");
function listarSalas() {
    return db.findALL("salas");
}

module.exports = {listarSalas}