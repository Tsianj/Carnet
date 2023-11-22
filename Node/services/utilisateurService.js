const conn = require("./database");

const fetchUtilisateur = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const addUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateur(nom, prenom, email, password) VALUES ('${utilisateur.nom}', '${utilisateur.prenom}', '${utilisateur.email}', '${utilisateur.password}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const connUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur WHERE email = '${utilisateur.email}' AND password =  '${utilisateur.password}';`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
module.exports= {
    fetchUtilisateur,
    addUtilisateur,
    connUtilisateur
}