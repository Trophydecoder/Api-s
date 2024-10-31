const mongoose = require('mongoose');
const Todo = require('../models/Todo');
const uri = 'mongodb://localhost:27017/Todos';

mongoose.connect(uri)
  .then(() => console.log('Connected successfully!!'))
  .catch(error => console.error(error));

module.exports = Todo;
