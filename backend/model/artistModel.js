const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    external_urls: {
        type: Object,
        required: false
    },
    followers: {
        type: Object,
        required: false
    },
    genres: {
        type: Array,
        required: false
    },
    href: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false,
    },
    images: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    popularity: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    uri: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Artist', artistSchema);

