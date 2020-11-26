const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://behl:homemaranha@cluster.2kqq4.mongodb.net/Katte_Brindes?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;