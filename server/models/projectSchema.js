const {Schema, mongoose} = require("../database/database");
var projectSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: true},
    description: { type: String, required: true},
    score: { type: Number, required: true },
    studentId: {type: mongoose.Schema.Types.ObjectId, ref: "Student"}
})

var Project = mongoose.model("Project", projectSchema);
module.exports = Project