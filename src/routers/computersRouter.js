const express = require('express');
const { lte, gte } = require('sequelize').Op;
const Computer = require('../models/computersModel');

const router = new express.Router();

router.post("/create-computer", async (req, res) => {
    try {
        const computer = await Computer.create(req.body);
        res.send(computer);
    } catch (err) {
        console.log(err);
    }
});

router.post("/find-computers", async (req, res) => {
    const filters = req.body.filters || {};
    if (req.body.price) {
        let price = {};
        if (req.body.price?.lte) price = { [lte]: req.body.price.lte };
        if (req.body.price?.gte) price = { ...price, [gte]: req.body.price.gte };
        filters.price = price;
    }

    try {
        const computers = await Computer.findAll({ where: filters });
        if (computers) res.send(computers);
        else res.send([]);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;