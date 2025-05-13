const userModel = require('../models/userModel');

const addUser = (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = { name, email, phone };

  userModel.addUser(newUser, (err, result) => {
    if (err) {
      res.status(500).send('Error inserting data');
    } else {
      res.status(201).send('User added successfully');
    }
  });
};

const getUsers = (req, res) => {
  userModel.getUsers((err, users) => {
    if (err) {
      res.status(500).send('Error fetching data');
    } else {
      res.json(users);
    }
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  userModel.updateUser(id, {name, email, phone}, (err, result) => {
    if (err) {
      res.status(500).send('Error updating user');
    } else {
      res.status(200).send('User updated successfully');
    }
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  userModel.deleteUser(id, (err, result) => {
    if (err) {
      res.status(500).send('Error deleting user');
    } else {
      res.status(200).send('User deleted successfully');
    }
  });
};

module.exports = { addUser, getUsers, updateUser, deleteUser };
