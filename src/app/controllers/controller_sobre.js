const express = require('express');
const router = express.Router();
const Sobre = require('../models/sobre')

router.get('/get_logo', async(req, res) => {
    const spbre= await Sobre.findOne({});
    return( 
        res.send(sobre)
    )
});

module.exports = (app) => app.use('/server', router);