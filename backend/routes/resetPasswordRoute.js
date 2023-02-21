const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const bcryptjs = require('bcryptjs');

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net'
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user associated with the email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Generate and store a reset password token for the user
    const token = await user.generateResetPasswordToken();

    // Send an email to the user containing a link to reset their password
    const resetUrl = `http://localhost:3001/reset-password/${user._id}/${token}`;
    console.log(resetUrl);

    const msg = {
      to: user.email,
      from: 'Wave <noreply@nodestarter.eu>',
      subject: 'Password Reset Request',
      text: `Bonjour,

             Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :

             ${resetUrl}

             Ce lien expirera dans 1 heure.

             Si vous n'avez pas demandé de réinitialisation de mot de passe, veuillez ignorer ce message.

             Cordialement,

             L'équipe Wave`,

      html: ` <html>
                <body>
                  <p>Bonjour,</p>
                  <p>Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                  <p><a href="${resetUrl}">${resetUrl}</a></p>
                  <p>Ce lien expirera dans 1 heure.</p>
                  <p>Si vous n'avez pas demandé de réinitialisation de mot de passe, veuillez ignorer ce message.</p>
                  <p>Cordialement,</p>
                  <p>L'équipe Wave</p>
                </body>
              </html>`
    };

    await client.messages.create(process.env.MAILGUN_DOMAIN, msg)
      .then(msg => console.log(msg))
      .catch(err => console.log(err));

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/:userId/:token', async (req, res) => {
  const { userId, token } = req.params;
  const { newPassword } = req.body;
  
  
  try {
    // Reset the user's password
    await User.resetPassword(token, newPassword);
    
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for password reset form
router.post('/reset-password/', async (req, res) => {
  const { userId, token, password } = req.body;

  try {
    const user = await User.findOne({
      _id: userId,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset password token' });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await updateUser(user._id, user);

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;

