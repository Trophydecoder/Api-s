var express = require('express');
var router = express.Router();
const TodoControllers = require('../TodoControllers/todosController')

/*HTTP Verbs*/

/* GET home page. */
router.get('/', TodoControllers.list);


/* GET Edit page. */
router.get('/todo-edit/:id', TodoControllers.edit);

// /* Post Update todo  */
router.post('/update/:id', TodoControllers.update);

/*get add todo  */
router.get('/add-todo', TodoControllers.addtodo);

/*Post a todo*/
router.post('/added-todo', TodoControllers.add);

// router.get('/delete/:id', TodoControllers.delete);

module.exports = router;
