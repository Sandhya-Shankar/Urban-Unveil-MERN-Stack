const mongoose = require("mongoose");

const HangSchema = new mongoose.Schema({
    HId: String, 
    HName: String, 
    Harea: String, 
    HDesc: String, 
    Hprice: Number, 
    Hratings: Number, 
    Hmaps: String,
    HimageURL: String
})
const HangModel = mongoose.model("hangouts", HangSchema);



module.exports = HangModel;


