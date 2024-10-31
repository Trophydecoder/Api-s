const mongoose = require('mongoose');
const { TodoSchema } = require('../schemas/schema');

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
