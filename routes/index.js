var express = require('express');
var router = express.Router();
const TodoControllers = require('../TodoControllers/todosController')

/*HTTP Verbs*/

/* GET home page. */
router.get('/', TodoControllers.list);


// /* GET Edit page. */
// router.get('/edit/:id', TodoControllers.update);

// /* Post  */
// router.post('/update/:id', TodoControllers.addlist);

// /*Post */
// router.post('/add-list', TodoControllers.add);

// router.get('/delete/:id', TodoControllers.delete);

module.exports = router;
