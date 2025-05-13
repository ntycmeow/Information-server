const db = require('../config/dbConfig');

const addUser = (user, callback) => {
  const query = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
  db.query(query, [user.name, user.email, user.phone], (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

const getUsers = (callback) => {
  const query = 'SELECT id, name, email, phone, created_at FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

const getUserById = (id, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

const updateUser = (id, user, callback) => {
  const query = 'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?';
  db.query(query, [user.name, user.email, user.phone, id], (err, result) => {
    if (err) {
      console.error('Error updating data: ', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data: ', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
