var express = require('express');
var router = express.Router();
const maincontroller = require('../Controllers/maincontroller')

// /*HTTP Verbs*/
//HTTP VERBS : POST,GET,PUT,DELETE// //ON CRUD ITS CREATE,READ(ALL,ONE),UPDATE ,DELETE
//post todos//
router.post('/todos',maincontroller.create)

/* GET home page. */
router.get('/todos',maincontroller.readAll);

/*Post a todo*/
router.get('/todos/:id',maincontroller.readOne);

/* Post Update todo  */
router.put('/todos/:id',maincontroller.update);

/*delete*/
router.delete('/todos/:id',maincontroller.deleteOne);

module.exports = router;
