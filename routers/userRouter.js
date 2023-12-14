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
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {

    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
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
        res.status(500).json(err);
    });

});

router.get('/getbyemail/:email', (req, res) => {

    Model.find({ email : req.params.email })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbyid/:_id', (req, res) => {
    // Model.findById(req.params.id)
    Model.find({ _id : req.params._id})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.delete('/delete/:_id', (req, res) => {

    Model.findByIdAndDelete(req.params._id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

router.get('/update/:_id', (req, res) => {

    Model.findByIdAndUpdate(req.params._id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;