const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'products_db'
});

db.connect(err => {
  if (err) throw err;
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/products', (req, res) => {
  db.query('INSERT INTO products SET ?', req.body, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3001);