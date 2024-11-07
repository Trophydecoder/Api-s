var Todos = require('../models/Todoslist');

//CRUD OPERATIONS(CREATE(post),  READ(get),  UPDATE(put),  DELETE(delete))//

//util functions//

//check if list has data//
function isEmptylist(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

//function to check if there ID we generated doesnt exist//
function  existTodo(id){
return Todos.find(Todo=> Todo.id==id)

}
// generateUniqueID function//
function getUniqueID(Todos){
     ///create random ID//
     let min = 1000
     let max = 9999
     do{
     var id = Math.floor(Math.random() * (max-min) + min)
     }while (existTodo(id)) ;
     return id;
}

module.exports.create = function (req,res){
  //create a random iD//
  if (isEmptylist(Todos)) {
    providers = [];
  }

  var id = req.body.id;
  if (existTodo(id)) {
    res.status(400).send("Duplicate ID is not allowed");
    id = getUniqueID(); //getNewID//
  }

  var Todo = req.body; //get new Todo
  Todo.id = id;

//new todo object
// let Todo = {
//     id :id,
//     title:req.body.title
//     }
    //pushing new todo to TODOS//
    Todos.push(Todo)
    res.status(200).send(Todo)
}

module.exports.readAll = function(req,res){
  res.status(200).send(Todos)
}


module.exports.readOne= function(req,res){
  let id = req.params.id
  let Todo = Todos.find(Todo => Todo.id == id)
  res.status(200).send(Todo);
}

module.exports.update = function(req,res){
  let id = req.params.id;
  let Todo = Todos.find(Todo => Todo.id == id)
  Todo.title = req.body.title;
  res.status(200).send(Todo);
}

module.exports.deleteOne = function(req,res){
  let id = req.params.id
  let Todo =Todos.find(Todo => Todo.id == id)
  let index = Todos.indexOf(Todo)

  //remove  the element at the index of idx
  Todos.splice(index,1)
  res.status(200);
  res.send(Todo);
}