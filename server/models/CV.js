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

const getCVModel = function (id) {
  db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const getCVsModel = function (id) {
  db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const getPublicCVsModel = function (id) {
  db.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const createCVModel = function ([...datas]) {
  db.query("INSERT INTO cv (cv_name, is_private, template, accent_color, professional_summary) VALUES (?,?,?,?,?)", [...datas], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const updateCVModel = function (id) {
  db.query("UPDATE cv SET cv_name = ?, is_private = ?, template = ?, accent_color = ?, professional_summary = ? WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const deleteCVModel = function (id) {
  db.query("DELETE FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

module.exports = {getCVModel, getCVsModel, getPublicCVsModel, createCVModel, updateCVModel, deleteCVModel}