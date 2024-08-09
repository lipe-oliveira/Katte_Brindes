const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://articusarname:Z1tpN37LxwFokVKm@articcluster.vnr4w.mongodb.net/');
mongoose.Promise = global.Promise;

module.exports = mongoose;