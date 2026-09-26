const { body , validationResult } = require("express-validator");

const registerValidation = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({min: 2})
    .withMessage("Name must contain at least 2 characters"),

    body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

    body("password")
    .isLength({ min: 8})
    .withMessage("Password must contain at least 8 chatacters")
];

const loginValidation = [
    body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

    body("password")
    .notEmpty()
    .withMessage("Password is required")
];

const handleValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    registerValidation,
    loginValidation,
    handleValidation
};