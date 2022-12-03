const UserController = require('../controllers/users')
const express = require('express')

const router = express.Router()

router.get('/allUsers', UserController.findAllUsers)

router.get('/:id', UserController.findById)

router.post('/register', UserController.register)

module.exports = router