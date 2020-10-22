const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_blog_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log("Thanh Cong")
    } catch (error) {
        console.log('That Bai')
    }
}

module.exports = { connect }