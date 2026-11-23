let mysql = require('mysql');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

let con = mysql.createPool({
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

// const db = con.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected to MySQL on host'+ process.env.TIDB_HOST+" and port "+ process.env.TIDB_PORT);
// });

const getCVModel = function (id) {
  con.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const getCVsModel = function (id) {
  con.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const getPublicCVsModel = function (id) {
  con.query("SELECT cv_id, cv_name, is_private, template, accent_color, professional_summary, num_views, num_shares, num_downloads, creation_date, last_modified FROM cv WHERE user_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const createCVModel = function ([...datas]) {
  con.query("INSERT INTO cv (cv_name, is_private, template, accent_color, professional_summary) VALUES (?,?,?,?,?)", [...datas], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const updateCVModel = function (id) {
  con.query("UPDATE cv SET cv_name = ?, is_private = ?, template = ?, accent_color = ?, professional_summary = ? WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

const deleteCVModel = function (id) {
  con.query("DELETE FROM cv WHERE cv_id = ?", [id], function (err, result, fields) {
    if (err) throw err;
    return result;
  });
} 

module.exports = {getCVModel, getCVsModel, getPublicCVsModel, createCVModel, updateCVModel, deleteCVModel}