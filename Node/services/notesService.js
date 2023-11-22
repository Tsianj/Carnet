const conn = require("./database");


const fetchNotes = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM notes`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const addNotes = (notes) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO notes(titre, contenu) VALUES ('${notes.titre}', '${notes.contenu}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
module.exports= {
    fetchNotes,
    addNotes
}