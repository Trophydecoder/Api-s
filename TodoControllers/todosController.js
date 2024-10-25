const Todos = require('../models/Todoslist')

//the list//
module.exports.list = function(req,res){
    res.render('./home', 
    { title: 'Todos' ,Todos : Todos});
}
//editform//
module.exports.edit = function(req,res){
    let id = req.params.id
    let Todo = Todos.find(Todo => Todo.id == id)
    res.render('./todo-edit', 
    {  id : id ,title: 'edit' ,Todo: Todo});
}
