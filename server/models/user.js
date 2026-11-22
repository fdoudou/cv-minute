let mysql = require('mysql');
let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

const db = con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL');
});

const getUserModel = db.query("SELECT user_id, user_name, email, password, registration_date FROM user WHERE user_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const createUserModel = db.query("INSERT INTO user (user_name, email, password) VALUES (?,?,?)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const updateUserModel = db.query("UPDATE user SET user_name = ?, email = ?, password = ? WHERE user_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const deleteUserModel = db.query("DELETE FROM user WHERE user_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

module.exports = {getUserModel, createUserModel, updateUserModel, deleteUserModel}