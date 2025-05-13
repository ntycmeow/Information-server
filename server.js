const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/api/users', userController.addUser);
app.get('/api/users', userController.getUsers);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
