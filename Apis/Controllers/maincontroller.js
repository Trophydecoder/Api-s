var Todos = require("../models/Todoslist");
const Todo = require("../mongodb/mongo");
const {ObjectId} = require('mongodb')
//CRUD OPERATIONS(CREATE(post),  READ(get),  UPDATE(put),  DELETE(delete))//


//this is a function to check if list has data//
function isEmptylist(obj) {
    return !obj || obj.length == 0 || Object.keys(obj).length == 0;
  }

  //this is a function to handle all the Errors
function handleError(res, error) {
    res.status(200);
    res.send("Somnething is wrong .\n" + error);
  }

  //based on CRUD we start with//
  //CREATE//
  //POST
//url:/api/providers
module.exports.create = function (req, res) {
    ///create random ID//
    if (isEmptylist(Todos)) {
      Todos = [];
    }
    var id = req.body.id;
    if (existTodo(id)) {
      res.status(400);
      res.send("Duplicate ID is not allowed");
      id = getUniqueID(); //getNewID//
    }
  
    var Todo = req.body; //get new Todo
    Todo.id = id;
  
    //pushing new todo to TODOS//
    Todos.push(Todo);
    res.status(200);
    res.send(Todo);
  };