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

module.exports = { addUser, getUsers };
