const mongoose = require('mongoose')
const {TodoModel} = require ('../models/TodoModel')

//connect to uri mongo//
const uri ='mongodb://localhost:27017/Todos_database'

//making connection(asynchronous//
mongoose.connect(uri)
    .then(result => {
    console.log('Connected successfuly!!')
    })
    .catch(error => console.log(error))


module.exports = TodoModel;