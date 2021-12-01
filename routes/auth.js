const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/student_register", authController.register);

module.exports = router;
