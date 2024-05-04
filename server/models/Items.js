const mongoose = require("mongoose");

const RestSchema = new mongoose.Schema({
    restId: String,
    restName: String,
    area: String,
    Desc: String,
    price: Number,
    ratings: Number,
    Cuisine: String,
    imageURL: String
});

const RestModel = mongoose.model("restaurants", RestSchema);



module.exports = RestModel;


