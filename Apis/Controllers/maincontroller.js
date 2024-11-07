var Todos = require("../models/Todoslist");
const Todo = require("../mongodb/connnection");
const {ObjectId} = require('mongodb')

//CRUD OPERATIONS(CREATE(post),  READ(get),  UPDATE(put),  DELETE(delete))//

//util functions//

//check if list has data//
function isEmptylist(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

//function to check if there ID we generated doesnt exist//
function existTodo(id) {
  return Todos.find((Todo) => Todo.id == id);
}
function handleError(res, error) {
  res.status(200);
  res.send("Somnething is wrong .\n" + error);
}

module.exports.create = function (req, res) {

var todo = req.body; //get new Todo

try {
  Todo.create(todo)
  .then(result => {
    res.status(201).send(result)
  })
.catch((error) => handleError(res, error));
} 
catch (error) {
  handleError(res, error);
}
}
module.exports.readAll = function (req, res) {
  try {
    Todo.find()
      .then((result) => {
        if (isEmptylist(result)) {
          res.status(404).send("Cant read ,Todo List is empty");
        }
        res.status(200).send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.readOne = function (req, res) {
  try{
    let id = new ObjectId(req.params.id);
    Todo.find({'_id':id})
      .then(result =>{
          if (isEmptylist(result)) {
              res.status(404).send("Cannot Read, Todo List is empty");
            }
          
          //  let provider = providers.find((provider) => provider.id == id)
            res.status(200).send(result);
      })
      .catch((error) => handleError(res, error));
  } 
  catch (error) {
    handleError(res, error);
  }
}

module.exports.update = function (req, res) {
  if (isEmptylist(Todos)) {
    res.status(404).send("Todo List Is Empty,Cannot Update");
  }
  let id = req.params.id;
  let Todo = Todos.find((Todo) => Todo.id == id);
  Todo.title = req.body.title;
  res.status(200).send(Todo);
};

module.exports.deleteOne = function (req, res) {
  if (isEmptylist(Todos)) {
    res.status(404).send("Todo List Is Empty,Cannot Delete");
  }
  let id = req.params.id;
  let Todo = Todos.find((Todo) => Todo.id == id);
  let index = Todos.indexOf(Todo);

  //remove  the element at the index of idx
  Todos.splice(index, 1);
  res.status(200);
  res.send(Todo);
};

module.exports.deleteAll = function (req, res) {
  if (isEmptylist(Todos)) {
    res.status(404).send("Todo List is Empty Cannot Delete");
  }
  Todos = [];
  res.status(200).send("all Todos deleted");
};
