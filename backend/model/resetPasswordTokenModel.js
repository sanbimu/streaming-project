const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const resetPasswordTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600, // expire after 1 hour
  },
});

const ResetPasswordToken = mongoose.model('ResetPasswordToken', resetPasswordTokenSchema);

module.exports = ResetPasswordToken;
