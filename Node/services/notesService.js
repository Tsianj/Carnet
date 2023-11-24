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
        let sql = `INSERT INTO notes(titre, contenu, id_utilisateur) VALUES ('${notes.titre}', '${notes.contenu}', ${notes.id_utilisateur})`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const fetchNotesByIdUti = (user) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM notes WHERE id_utilisateur = ` + user;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const deleteNoteById = (notesId) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM notes WHERE id_notes = ` + notesId;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
module.exports= {
    fetchNotes,
    addNotes,
    fetchNotesByIdUti,
    deleteNoteById
}