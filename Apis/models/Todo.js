const mongoose = require('mongoose')
const {TodoSchema} = require('../schemas/schema')


//creating a todo model//
const Todo = mongoose.model('Todo',TodoSchema)

module.exports = {Todo}