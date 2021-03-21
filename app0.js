onst express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

//NEW MIDDLEWARE BELOW
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//GET ROUTES BELOW
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});

//SERVER CONNECTION BELOW
let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(
    `Your server is running successfully on http://localhost:${port}`
  );
});
