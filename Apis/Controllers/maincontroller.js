var Todos = require('../models/Todoslist');

//CRUD OPERATIONS(CREATE(post),  READ(get),  UPDATE(put),  DELETE(delete))//

module.exports.create = function (req,res){
    ///create random ID//
    let min = 1000
    let max = 9999
    let id = Math.floor(Math.random() * (max-min) + min)

//new todo object
let Todo = {
    id :id,
    title:req.body.title
    }
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