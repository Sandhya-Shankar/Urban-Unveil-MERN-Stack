const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://sandhyashankar:Guruji_1961@cluster0.lazglkl.mongodb.net/?retryWrites=true&w=majority');
        console.log('MongoDB Connected');

    } catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;