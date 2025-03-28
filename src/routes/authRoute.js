const express = require("express");
const auth = require('./../middleware/auth')
const {
    signUp,
    signIn,
    deleteAccount,
    verifyEmail,
    forgotPassword,
    resetPassword,
    refreshToken,
    resendVerificationCode
} = require("./../controllers/authController");

const studentRoute = new express.Router();

studentRoute.post("/create", signUp);
studentRoute.post("/login", signIn);
studentRoute.post("/resend-verification-code", resendVerificationCode);
studentRoute.post("/verify-email", verifyEmail);
studentRoute.post("/refresh-token", auth, refreshToken);
studentRoute.post("/forgot-password", forgotPassword);
studentRoute.post("/reset-password", resetPassword);
studentRoute.delete("/delete/:id", deleteAccount);

module.exports = studentRoute;
