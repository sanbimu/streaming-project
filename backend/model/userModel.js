const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    resetPasswordToken: {
        type: String,
    },
    resetTokenExpires: {
        type: Date,
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    favTracks: {
        type: Array,
        required: false
    },
    isSubscribe: {
        required: true,
        type: Boolean,
        default: false
    },
});


// Define a method to generate and store a reset password token for a user
userSchema.methods.generateResetPasswordToken = async function () {
    const user = this;
    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetTokenExpires = Date.now() + 36000000; // 10 hour
    await user.save();
    return token;
};
//console.log("generateResetPasswordToken", generateResetPasswordToken)


// Define a static method to verify and remove a reset password token for a user
userSchema.statics.verifyAndRemoveResetPasswordToken = async function (userId, token) {
    const resetPasswordToken = await this.findOne({ userId, token });
    if (!resetPasswordToken) {
        throw new Error('Invalid or expired reset password token');
    }
    await resetPasswordToken.remove();
};
//console.log("verifyAndRemoveResetPasswordToken", verifyAndRemoveResetPasswordToken)

// Define a static method to reset a user's password
userSchema.statics.resetPassword = async function (token, newPassword) {
    // Find the reset password token
    const resetPasswordToken = await this.findOne({ resetPasswordToken: token });

    if (!resetPasswordToken) {
        throw new Error('Invalid or expired reset password token, ON GALERATE ICI ');
    }
    console.log("reserPasswordToken name", resetPasswordToken.username)

    // Find the user associated with the token
    const user = await this.findById(resetPasswordToken);
    console.log("user with the pw we want to reset ", user)
    // if (!user) {
    //     throw new Error('User not found');
    // }

    // Hash the new password
    console.log("newpassword is : ", newPassword)
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

};

// Create the User model and export it
const User = mongoose.model("User", userSchema);

module.exports = User;
