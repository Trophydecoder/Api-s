const mongoose = require('mongoose')
const { Todoschema } = require('../Schemas/Schemas')


//creating a provider model//
const TodoModel = mongoose.model('Todos',Todoschema)

module.exports = { TodoModel}