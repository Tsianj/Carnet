const express = require("express");

const carnetService = require("../services/carnetService");
const router = express.Router();

router.get("/", (req, res) => {
    carnetService.fetchCarnet().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

module.exports = router;