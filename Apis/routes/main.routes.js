var express = require('express');
var router = express.Router();
const maincontroller = require('../Controllers/maincontroller')

// /*HTTP Verbs*/
//HTTP VERBS : POST,GET,PUT,DELETE//

// //post todos//
// router.post('/todos',mainController.create)

/* GET home page. */
router.get('/todos',maincontroller.readAll);

/*Post a todo*/
router.get('/todos/:id',maincontroller.readOne);

// /* Post Update todo  */
// router.put('/todos/:id',maincontroller.update);

// /*get add todo  */
// router.get('/add-todo',maincontroller.addtodo);

// router.get('/delete/:id',maincontroller.deleteOne);

module.exports = router;
