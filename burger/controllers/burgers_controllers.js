const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll();
});

router.post("/api/burgers", (req, res) => {
    burger.createOne();
});

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne();
})

//Export routes for server.js to use
module.exports = router;