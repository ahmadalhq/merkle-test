'use strict'

const db = require("../db/database.js");

class GuestsController {
 static findAllNote(req, res, next) {
  var sql = "select name, note from guest";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({
        "error":err.message
      });
      return;
    }
    res.json({
      "message":"success",
      "data":rows
    })
  });
 };

 static postNote(req, res, next) {
  var errors = [];
  
  if (!req.body.name) {
    errors.push("name is empty");
  }

  if (!req.body.address) {
    errors.push("address is empty");
  }

  if (!req.body.phone) {
    errors.push("nomor telepon is empty");
  }

  if (!req.body.note) {
    errors.push("note is empty");
  }

  if (errors.length) {
    res.status(400).json({
      "error": errors.join(",")
    });
    return;
  }

  var data = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    note: req.body.note
  }

  var query = `INSERT INTO guest (name, address, phone, note) VALUES (?, ?, ?, ?)`
  var params = [data.name, data.address, data.phone, data.note]

  db.run(query, params, function (err) {
    if (err){
      res.status(400).json({
        "error": err.message
      })
      return;
    }
    res.json({
      "message": "success",
      "data": data,
      "id" : this.lastID
    })
  });
 };


}

module.exports = GuestsController;