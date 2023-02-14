const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../model/userModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
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
    const resetUrl = `${process.env.CLIENT_URL}/reset/${user._id}/${token}`;
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>Please click the following link to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`,
    });

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
