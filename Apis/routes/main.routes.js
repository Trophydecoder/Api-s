var express = require('express');
var router = express.Router();
const maincontroller = require('../Controllers/maincontroller')

// /*HTTP Verbs*/
//HTTP VERBS : POST,GET,PUT,DELETE//
//ON CRUD ITS CREATE,READ(ALL,ONE),UPDATE ,DELETE

//post todos//
router.post('/todos',maincontroller.create)

/* get(READALL)*/
router.get('/todos',maincontroller.readAll);

/*Get(READONE)*/
router.get('/todos/:id',maincontroller.readOne);

/*Put (Update todo)  */
router.put('/todos/:id',maincontroller.update);

/*deleteONE*/
router.delete('/todos/:id',maincontroller.deleteOne);

/*deleteALL*/
router.delete('/todos',maincontroller.deleteAll);

module.exports = router;
