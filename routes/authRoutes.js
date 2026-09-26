const express = require("express");

const {
    register,
    login,
    getMe
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const {
    registerValidation,
    loginValidation,
    handleValidation
} = require("../validators/authValidators");

const router = express.Router();

router.post(
    "/register",
    registerValidation,
    handleValidation,
    register
);

router.post(
    "/login",
    loginValidation,
    handleValidation,
    login
);

router.get(
    "/me",
    authMiddleware,
    getMe
);

module.exports = router;