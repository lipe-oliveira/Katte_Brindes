const mongoose = require("../../database/index");
const mongoose_paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    objetivos:{
        type:String,
        required:true
    },
    funcionamento: {
        type: String,
        required:true
    },
    imgs:[
        {
        imagem:{
            type: String,
            setMaxListeners: 100000000000000000000000000000000000000000000000        
        }
    }
    ],

    img:{
        type: String,
        required:false
    }

    createdAt:{
        type: Date,
        default: Date.now
    }
});

schema.plugin(mongoose_paginate);

const Sobre = mongoose.model("Sobre", schema);
module.exports = Sobre;