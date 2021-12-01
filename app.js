const express = require("express");
const mysql = require("mysql");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 5002;
const app = express();

dotenv.config({ path: "./.env" });
const db = mysql.createConnection({
  host: process.env.database_host,
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database,
});
db.connect((error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("MySQL Connected");
  }
});


const publicDirectory = path.join(__dirname, "./views");
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

//define route
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5002);
