var Todos = require("../models/Todoslist");
const Todo = require("../mongodb/connnection");
const { ObjectId } = require("mongodb");

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
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
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
  try {
    let id = new ObjectId(req.params.id);
    Todo.find({ _id: id })
      .then((result) => {
        if (isEmptylist(result)) {
          res.status(404).send("Cannot Read, Todo List is empty");
        }

        res.status(200).send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.update = function (req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let todo = req.body;
    Todo.findOneAndUpdate({ _id: id }, todo, { new: true })
      .then((result) => {
        if (isEmptylist(result)) {
          res.status(404).send("Todo List Is Empty,Cannot Update");
        }
        res.status(200).send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.deleteOne = function (req, res) {
  try {
    let id = new ObjectId(req.params.id);
    Todo.findOneAndDelete({ _id: id })
      .then((result) => {
        if (isEmptylist(result)) {
          res.status(404).send("Todo List Is Empty,Cannot Delete");
        }
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.deleteAll = function (req, res) {
  try {
    Todo.deleteMany({})
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).send("Todo List is Empty Cannot Delete");
        }
        res.status(200).send("all Todos deleted ]n" + result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
