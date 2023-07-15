const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(express.json());
app.use(cors());


app.post('/api/request/register', (req, res) => {
  const { Email, Username, Password } = req.body;

  const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
  const values = [Email, Username, Password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Error inserting data' });
    } else {
      console.log('Successfully registered');
      res.json({ message: 'Successfully registered' });
    }
  });
});

app.post('/api/request/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying the database');
      res.status(500).json({ message: 'Error occurred' });
      return;
    }

    if (results.length > 0) {
      res.json({ message: 'Login successfully', currentUser: username });
    } else {
      res.json({ message: 'Invalid username or password' });
    }
  });
});


app.listen(3000, () => console.log('Listening on port 3000'));
