const express = require('express');
const router = express.Router();


router.get("/", (request, response, next) => {
    response.render("index.ejs");
  });

  router.get("/student_login", (request, response, next) => {
    response.render("studentLogin.ejs");
  });
  
  router.get("/student_register", (request, response) => {
    response.render("studentSignUp.ejs");
  });

  module.exports = router;

