const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.database_host,
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database,
});

exports.register = (request, response) => {
  console.log(request.body);
  const first_name = request.body.firstName;
  const last = request.body.lastName;
  const email = request.body.email;
  const password = request.body.password;
  const confirmPassword = request.body.passwordConfirm;

  db.query(
    "SELECT email from students WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return response.render("student_register", {
          message: "That email is already taken",
        });
      } else if (password !== confirmPassword) {
        return response.render("student_register", {
          message: "The passwords do not match",
        });
      }

      let hashPassword = await bcrypt.hash(password, 8);
      console.log(hashPassword);
    }
  );
};