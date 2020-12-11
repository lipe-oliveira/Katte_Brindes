const express = require('express');
const router = express.Router();
const Sobre = require('../models/sobre')

router.get('/get_logo', async(req, res) => {
    const {img} = await Sobre.findOne({});
    return( 
        res.send(img)
    )
});

module.exports = (app) => app.use('/server', router);