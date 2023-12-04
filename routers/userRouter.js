const express = require('express');
const Model = require('../models/userModel')

// creating a router
const router = express.Router();

router.post('/add', (req, res) => {

    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});

router.get('/getall', (req, res) => {

    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

});

// : denotes url parameter
router.get('/getbylocation/:location', (req, res) => {
    console.log(req.params.location);
    Model.find({ location : req.params.location})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

});

router.get('/getbyemail', (req, res) => {
    res.send('Response From Get All Route')
});

router.get('/getbyid', (req, res) => {
    res.send('Response From User Add Route')
});

router.get('/update', (req, res) => {
    res.send('Response From User Add Route')
});

router.get('/delete', (req, res) => {
    res.send('Response From User Add Route')
});

module.exports = router;