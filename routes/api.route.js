var express = require('express')

var router = express.Router()
var origami = require('./api/origami.route')


router.use('/origami', origami);


module.exports = router;