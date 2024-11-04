var express = require('express');
var router = express.Router();
const maincontroller = require('../Controllers/maincontroller')

/*HTTP Verbs*/

/* GET home page. */
router.get('/todos',maincontroller.readAll);

/*Post a todo*/
router.get('/todos/:id',maincontroller.readOne);

// /* GET Edit page. */
// router.get('/todo-edit/:id',maincontroller.edit);

// // /* Post Update todo  */
// router.post('/update/:id',maincontroller.update);

// /*get add todo  */
// router.get('/add-todo',maincontroller.addtodo);



// router.get('/delete/:id',maincontroller.deleteOne);

module.exports = router;
