const express = require("express");

const notesService = require("../services/notesService");
const router = express.Router();

router.get("/", (req, res) => {
    notesService.fetchNotes().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});
router.post('/', (req, res) => {
    let data = req.body;
    notesService.addNotes(data).then(result => {
        res.status(201)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.send({"message" : "Votre ajout ne s'est pas bien passé"})
    })
});
router.get("/:user", (req, res) => {
    const utilisateur = req.params.user;
    notesService.fetchNotesByIdUti(utilisateur).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});
router.get("/:notesId", (req, res) => {
    const deleteNotes = req.params.notesId;
    notesService.deleteNoteById(deleteNotes).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});
module.exports = router;