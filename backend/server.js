require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const trackRoutes = require('./routes/trackRoutes');
const artistRoutes = require('./routes/artistRoutes');
const userRoutes = require('./routes/userRoutes');
const resetPasswordRoute = require('./routes/resetPasswordRoute');
const port = process.env.PORT || 3001;
const mongoString = process.env.DATABASE_URL;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('./model/userModel');

const app = express();

// Start server
app.use(cors());
app.use(express.json());
app.use('/track', trackRoutes);
app.use('/user', userRoutes);
app.use('/reset-password', resetPasswordRoute);
app.use('/:userId/:token', resetPasswordRoute);
app.use('/artist', artistRoutes);

app.use(express.json())
app.use(express.static('public'))

// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', error => console.error(error));
database.once('open', () => console.log('Connected to database'));

// Middleware
app.use(cors());
app.use(express.json());

// Route to create a Stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
  const email = req.body.email;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    // Update user subscription status
    await User.findOneAndUpdate(
      { email: email },
      { isSubscribe: true }
    ).exec();

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.use('/artist', artistRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));