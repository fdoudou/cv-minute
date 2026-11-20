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

const getCV = db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const getCVs = db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const getPublicCVs = db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const createCV = db.query("INSERT INTO cv (cv_name, is_private, template, accent_color, professional_summary) VALUES (?,?,?,?,?)", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const updateCV = db.query("UPDATE cv SET cv_name = ?, is_private = ?, template = ?, accent_color = ?, professional_summary = ? WHERE cv_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

const deleteCV = db.query("DELETE FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

module.exports = {getCV, getCVs, getPublicCVs, createCV, updateCV, deleteCV}