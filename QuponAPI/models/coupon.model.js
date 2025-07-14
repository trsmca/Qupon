const db = require('./db');

exports.create = data =>
  new Promise((resolve, reject) => {
    db.query('INSERT INTO coupons SET ?', data, (err, res) => {
      if (err) reject(err);
      else resolve(res.insertId);
    });
  });

exports.getAll = () =>
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM coupons', (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

exports.block = id =>
  new Promise((resolve, reject) => {
    db.query('UPDATE coupons SET status="blocked" WHERE id=?', [id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });