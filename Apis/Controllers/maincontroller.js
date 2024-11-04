var Todos = require('../models/Todoslist');
const Todo = require('../Mongodb/mongo');
const { ObjectId } = require('mongodb');
//CRUD OPERATIONS(CREATE(post),  READ(get),  UPDATE(put),  DELETE(delete))//


//this is a function to check if list has data//
function isEmptylist(obj) {
    return !obj || obj.length == 0 || Object.keys(obj).length == 0;
  }

  //this is a function to handle all the Errors
function handleError(res, error) {
    res.status(400);
    res.send("Something is wrong .\n" + error);
  }
// //function to check if there ID we generated doesnt exist//
function  existTodo(id){
return Todos.find(Todo => Todo.id==id)
}


//locasthost300/api/todos//
//Get all Lists
module.exports.readAll = function (req, res) {
  Todo.find()
    .then((result) => {
      if (isEmptylist(result)) {
        res.status(404).send("List is empty");
      } else {
        res.status(200).send(result);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

//locasthost300/api/todos/id//
//getOne inside of list//
module.exports.readOne = function (req, res) {
    let id = new ObjectId(req.params.id);
    Todo.find({'_id':id})
      .then(result =>{
          if (isEmptylist(result)) {
              res.status(404).send("List is empty");
              } else {
            res.status(200).send(result);
              }
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("Internal Server Error");
            });
  };

//   //put//
// //localhost/api/Todos/:id(123)
// module.exports.update = function (req, res) {
//   if (isEmptylist(Todos)) {
//     res.status(404).send("List is empty,We cannot update");
//   }
//   let id = req.params.id;
//   let Todo = Todos.find((Todo) => Todo.id == id);
//   Todo.title = req.body.title;
//   res.status(200).send(Todo);
// };