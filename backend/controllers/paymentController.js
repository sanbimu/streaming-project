const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const TestPayment = require('../model/paymentModel');

exports.createTestPayment = async (req, res) => {
  console.log(paymentIntent.id);
  // récupération des données de paiement du formulaire
  const { amount, currency, paymentMethodId, paymentIntentId } = req.body;

  try {
    // récupération de l'ID de l'utilisateur à partir de la session de l'utilisateur
    const userId = req.session.userId;

    // création d'un paiement de test avec Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd",
      payment_method_types: ["card"],
      payment_method: "pm_card_be",
    });
    
    console.log(paymentIntent.id);

    // enregistrement du paiement de test dans la base de données de test
    const testPayment = new TestPayment({
      amount: amount,
      currency: currency,
      paymentMethodId: paymentMethodId,
      paymentIntentId: paymentIntentId,
      user: userId
    });
    await testPayment.save();

    // envoi de la réponse de succès au client
    res.status(200).send({ success: true });
  } catch (error) {
    // envoi de la réponse d'erreur au client
    res.status(400).send({ error: error.message });
  }
};
