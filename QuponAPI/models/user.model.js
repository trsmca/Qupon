const db = require('./db');

exports.findByPhone = phone =>
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE phone = ?', [phone], (err, res) => {
      if (err) reject(err);
      else resolve(res[0]);
    });
  });

exports.findById = id =>
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
      if (err) reject(err);
      else resolve(res[0]);
    });
  });

exports.createUser = user =>
  new Promise((resolve, reject) => {
    db.query('INSERT INTO users SET ?', user, (err, res) => {
      if (err) reject(err);
      else resolve(res.insertId);
    });
  });

exports.updateProfile = (id, data) =>
  new Promise((resolve, reject) => {
    db.query('UPDATE users SET ?, isProfileComplete=1 WHERE id = ?', [data, id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });