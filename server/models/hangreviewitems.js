const mongoose = require("mongoose");

const HangrevSchema = new mongoose.Schema({
    HId: String, 
    Hname: String, 
    Hreview:String,
    Hrating: Number, 
})
const HangrevModel = mongoose.model("hangreviews", HangrevSchema);



module.exports = HangrevModel;


