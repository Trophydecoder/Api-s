const mongoose = require('mongoose')
const {Todo} = require('../models/todoslist')

//connect to uri mongo//
const uri ='mongodb://localhost:27017/Todos'

//making connection(asynchronous//
mongoose.connect(uri)
    .then(result => {
    console.log('Connected successfuly!!')
    })
    .catch(error => console.log(error))


 

    module.exports = Todo