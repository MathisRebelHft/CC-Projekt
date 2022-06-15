const express = require('express');
const mongoose = require('mongoose');

// --------------setup------------------
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// -----find ip-------------------------
var exec = require('child_process').exec;
// Stack overflow magic
const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
var ipadress = execSync('hostname -I', { encoding: 'utf-8' });  // the default is 'buffer'
// ---------Connect to MongoDB---------------

mongoose
  .connect(
    'mongodb://mongo:27017/web',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Item = require('./models/Item');

app.get('/', (req, res) => {
  // runs linux command to find ip
  ipadress = execSync('hostname -I', { encoding: 'utf-8' });  // the default is 'buffer'
  Item.find()
    .then(items => res.render('index', { items, ipadress: ipadress }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.get('/crash', (req, res) => {
  res.redirect('/');
  process.exit(1);
});

app.post('/item/add', (req, res) => {
  ipadress = execSync('hostname -I', { encoding: 'utf-8' });  // the default is 'buffer'
  const newItem = new Item({
    name: req.body.name,
    ip: ipadress
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 5000;
app.listen(port, 'web', () => console.log(`app ${ipadress} listening version:2`));