const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: 'api',
  key: "f33a1ad05243ec379a0936b73bc2b426-ca9eeb88-e33ade4c",
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
    const resetUrl = `http://${process.env.MAILGUN_DOMAIN}/reset/${user._id}/${token}`;

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

module.exports = router;