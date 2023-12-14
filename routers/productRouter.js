const express = require('express');
const Model = require('../models/productModel')

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
router.get('/getbycategory/:category', (req, res) => {
    console.log(req.params.category);
    Model.find({ category : req.params.category})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getbycolor/:color', (req, res) => {

    Model.find({ color : req.params.color })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbysize/:size', (req, res) => {

    Model.find({ size : req.params.size })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyprice/:price', (req, res) => {

    Model.find({ price : req.params.price })
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

module.exports = router;