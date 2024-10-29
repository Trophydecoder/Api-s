var express = require('express');
var router = express.Router();
const TodoControllers = require('../TodoControllers/todosController')

/*HTTP Verbs*/

/* GET home page. */
router.get('/', TodoControllers.list);


/* GET Edit page. */
router.get('/todo-edit/:id', TodoControllers.edit);

// /* Post  */
// router.post('/update/:id', TodoControllers.addlist);

/*get */
router.get('/add-todo', TodoControllers.addtodo);

/*Post */
router.post('/add-list', TodoControllers.add);

// router.get('/delete/:id', TodoControllers.delete);

module.exports = router;
