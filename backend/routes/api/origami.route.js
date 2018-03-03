var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var OrigamiController = require('../../controllers/origami.controller');


// Map each API to the Controller FUnctions

router.get('/', OrigamiController.getOrigami)

router.post('/add', OrigamiController.addData)
router.post('/upload', OrigamiController.upload)
/*
router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)*/


// Export the Router

module.exports = router;