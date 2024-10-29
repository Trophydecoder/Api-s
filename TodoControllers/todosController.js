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

module.exports.update = function(req,res){
    let id = req.params.id;
    let Todo = Todos.find(Todo => Todo.id == id)
    Todos.title = req.body.title;
    res.render('./update', 
    {  id : id ,title: 'update' });
}

module.exports.addtodo = function(req,res){
    res.render('./add-todo', {title: 'addtodo' });
}

module.exports.add = function(req,res){
    ///create random ID//
    let min = 1000
    let max = 9999
    let id = Math.floor(Math.random() * (max-min) + min)

//new todo object
let Todo = {
    id :id,
    title:req.body.title,
    }
    //pushing new todo to TODOS//
    Todos.push(Todo)
    res.render('./added-Todo', 
    {  id : id ,title: 'added' });

}