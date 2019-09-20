const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/dbmappingmongo", {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

module.exports = {Schema, mongoose} 