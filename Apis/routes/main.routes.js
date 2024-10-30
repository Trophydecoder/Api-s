var express = require('express');
var router = express.Router();
const maincontroller = require('../Controllers/maincontroller')

/*HTTP Verbs*/

// /* GET home page. */
// router.get('/',maincontroller.list);


// /* GET Edit page. */
// router.get('/todo-edit/:id',maincontroller.edit);

// // /* Post Update todo  */
// router.post('/update/:id',maincontroller.update);

// /*get add todo  */
// router.get('/add-todo',maincontroller.addtodo);

/*Post a todo*/
router.post('/Todos',maincontroller.create);

// router.get('/delete/:id',maincontroller.deleteOne);

module.exports = router;
