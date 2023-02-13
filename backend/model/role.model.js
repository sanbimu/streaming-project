const mongoose = require('mongoose');

const role = mongoose.model(
  'Role',
  new mongoose.Schema({
    name: String,
  })
);

module.exports = role;