const mongoose = require('mongoose');
const Todo = require('../models/Todo');
//connect to uri mongo//
const uri = 'mongodb://localhost:27017/Todos';

//making connection(asynchronous//
mongoose.connect(uri)
.then(result => {  console.log('Connected successfully!!')
})
  .catch(error => console.error(error));
  

module.exports = Todo;
