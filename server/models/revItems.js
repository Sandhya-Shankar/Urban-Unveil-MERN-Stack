const mongoose = require("mongoose");


const RevSchema = new mongoose.Schema({
    ID:String,
    name:String,
    review:String
});

const RevModel = mongoose.model("Reviews", RevSchema);

module.exports = RevModel;


