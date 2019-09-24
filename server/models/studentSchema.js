const {Schema, mongoose} = require("../database/database");
// const Project = require("./projectSchema");
var student = new Schema({
    // _id: {type: mongoose.Schema.Types.ObjectId},
    name: { type: String, required: true },
    age: { type: String, required: true },
    // image: { type: String, required: true }
})

var Student = mongoose.model("Student", student);
module.exports = Student