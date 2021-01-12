const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne('burger_name', req.body.burger_name,(res) => {
        res.json({ id: res.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne();
})

//Export routes for server.js to use
module.exports = router;