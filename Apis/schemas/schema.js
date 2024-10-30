const mongoose = require('mongoose')

//definining a schema
const Schema = mongoose.Schema

//Todos(top level)(parent-document)
const TodoSchema = new Schema({
    "title": {type :String, required:true},
})

module.exports = {TodoSchema}