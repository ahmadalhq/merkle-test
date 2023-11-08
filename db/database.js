const sqlite3 = require('sqlite3').verbose();
const dbFile = __dirname + "/be_test.db";

const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE IF NOT EXISTS guest(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(64),
      address VARCHAR(155),
      phone VARCHAR(155),
      note VARCHAR(155)
    )`,
    (err) => {
      if (err) {
          // Table already created
      } else {
          // Table just created, creating some rows
          var insert = 'INSERT INTO guest (name, address, phone, note) VALUES (?, ?, ?, ?)'
          db.run(insert, ["ahmad","tangerang selatan","08123456","selamat berbahagia selalu"])
          db.run(insert, ["rudi", "jakarta barat", "08123123", "turut berbahagia ya"])
      }
    });
    db.run(`CREATE TABLE IF NOT EXISTS user(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(64),
      password VARCHAR(64),
      role VARCHAR(64)
    );`,
    (err) => {
      if (err) {
          // Table already created
      } else {
          // Table just created, creating some rows
          var insert = 'INSERT INTO user (username, password, role) VALUES (?, ?, ?)'
          db.run(insert, ["ahmad", "ahmad123", "admin"])
          db.run(insert, ["rudi", "rudi123", "guest"])
      }
    });
  }
});

module.exports = db;