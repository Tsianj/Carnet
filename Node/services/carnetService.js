const conn = require("./database");

const fetchCarnet = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT c.id_carnet, n.titre, n.contenu
                    FROM carnet AS c
                    JOIN notes AS n ON c.id_carnet = n.id_carnet`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports= {
    fetchCarnet
}