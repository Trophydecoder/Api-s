var express = require('express');
var router = express.Router();
const TodoControllers = require('../TodoControllers/todoController')

/*HTTP Verbs*/

/* GET home page. */
router.get('/', TodoControllers.list);

/* GET Details page. */
router.get('/details/:id', TodoControllers.Details);

/* GET Edit page. */
router.get('/edit/:id', TodoControllers.update);

/* Post  */
router.post('/update/:id', TodoControllers.addlist);

/*Post */
router.post('/add-list', TodoControllers.add);

router.get('/delete/:id', TodoControllers.delete);

module.exports = router;
