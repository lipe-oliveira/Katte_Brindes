const express = require('express');
const router = express.Router();
const Produtos = require("../models/produtos");

router.post('/post_produto', async(req, res) => {
    try{
        const{nome, desc, valor} = req.body;

        const produto = await Produtos.create(req.body);

        return res.send(produto);
    }
    catch(err){
        console.log(err);
    }
});

router.get('/get_produtos', async (req, res)=>{
    try{
        const {page = 1} = req.query;

        return res.send(await Produtos.paginate({}, {page, limit:10}));
    }
    catch(err){

    }
});

module.exports = (app) => app.use('/server', router);