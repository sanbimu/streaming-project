const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    favTracks: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);