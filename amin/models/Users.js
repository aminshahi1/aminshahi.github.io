const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id : {type: Number, required: false},
    first_name : {type: String , required : false},
    last_name : {type: String, required: false},
    password : {type: String, required: true},
    age : {type: Number, required: false},
    email : {type: String, required: true}
});

module.exports = mongoose.model("Amin Shahi", userSchema,"Amin Shahi");