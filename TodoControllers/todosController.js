const Todos = require('../models/Todoslist')

//list//
module.exports.list = function(req,res){
    res.render(/*HBS*/, 
    { title: 'Todos' ,Todos : Todos});
}