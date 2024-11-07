const mongoose = require('mongoose')

//definining a schema
const Schema = mongoose.Schema
//providers providers(top level)(parent-document)
const Todoschema = new Schema({
    "title":{type :String, required:true},
})

module.exports ={ Todoschema}