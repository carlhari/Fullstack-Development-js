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

app.get('/api', (req, res) => {
  res.send('hello');
});

app.post('/api/request', (req, res) => {
  const { Lusername, Lpassword } = req.body;
  res.json({ message: 'Submitted' });
});

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

app.listen(3000, () => console.log('Listening on port 3000'));
