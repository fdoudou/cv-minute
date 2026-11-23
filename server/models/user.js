const mysql = require('mysql');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

let con = mysql.createConnection({
  host: process.env.TIDB_HOST,
  port: process.env.TIDB_PORT,
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE,
  ssl: process.env.TIDB_ENABLE_SSL === 'true' 
    ? {
        minVersion: 'TLSv1.2',
        // Optional: Uncomment the line below if your environment requires an explicit CA certificate
        ca: fs.readFileSync('./isrgrootx1.pem')
      } 
    : undefined
});

const db = con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL');
});

const getUserModel = function (id) {
  db.query("SELECT user_id, user_name, email, password, registration_date FROM user WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
} 

const createUserModel = function (user_name, email, password) {
  db.query("INSERT INTO user (user_name, email, password) VALUES (?,?,?)",[user_name, email, password], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

const updateUserModel = function (user_name, email, password, id) {
  db.query("UPDATE user SET user_name = ?, email = ?, password = ? WHERE user_id = ?", [user_name, email, password, id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

const deleteUserModel = function (id) {
  db.query("DELETE FROM user WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
} 

module.exports = {getUserModel, createUserModel, updateUserModel, deleteUserModel}