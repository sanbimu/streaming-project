const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    album: {
        type: Object,
        required: false
    },
    artists: {
        type: Array,
        required: false
    },
    available_markets: {
        type: Array,
        required: false
    },
    disc_number: {
        type: Number,
        required: false
    },
    duration_ms: {
        type: Number,
        required: false
    },
    explicit: {
        type: Boolean,
        required: false
    },
    external_ids: {
        type: Object,
        required: false
    },
    external_urls: {
        type: Object,
        required: false
    },
    href: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    is_local: {
        type: Boolean,
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
    preview_url: {
        type: String,
        required: false
    },
    track_number: {
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

module.exports = mongoose.model('Track', trackSchema);
