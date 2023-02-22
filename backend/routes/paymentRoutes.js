const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const authMiddleware = require('../middleware/authMiddleware');
const app = express();

// route de paiement de test
router.post('/test-payment', authMiddleware, async (req, res) => {
  // récupération des données de paiement du formulaire
  const { amount, currency, paymentMethodId, paymentIntentId, userId } = req.body;

  try {
    // création d'un paiement de test avec Stripe
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method: paymentMethodId,
      payment_intent: paymentIntentId,
      customer: userId, // associer le paiement à l'utilisateur connecté
      confirm: true,
    });
    console.log(payment);
    // envoi de la réponse de succès au client
    res.status(200).send({ success: true });
  } catch (error) {
    // envoi de la réponse d'erreur au client
    res.status(400).send({ error: error.message });
  }
});

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));

module.exports = router;
