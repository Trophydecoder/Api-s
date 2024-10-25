const Todos = require('../models/Todoslist')

//the list//
module.exports.list = function(req,res){
    res.render('./home', 
    { title: 'Todos' ,Todos : Todos});
}
