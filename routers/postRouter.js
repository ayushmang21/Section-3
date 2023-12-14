const express = require('express');
const Model = require('../models/postModel')

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

router.get('/getbysender/:sender', (req, res) => {

    console.log(req.params.sender);

    Model.find({ sender : req.params.sender})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbycontent/:content', (req, res) => {

    Model.find({ content : req.params.content})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbyimage/:image', (req, res) => {

    Model.find({ image : req.params.image})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbyid/:_id', (req, res) => {
    
    Model.find({ _id : req.params._id})
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

router.get('/delete/:_id', (req, res) => {
    
    Model.findByIdAndDelete(req.params._id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

module.exports = router;