// modèle de paiement de test
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testPaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  paymentMethodId: {
    type: String,
    required: true
  },
  paymentIntentId: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const TestPayment = mongoose.model('TestPayment', testPaymentSchema);

module.exports = TestPayment;
