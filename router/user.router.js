const express = require('express')
const user = require('../controller/user.controller.js')
const router = express.Router()

const { authMiddleware } = require('../controller/user.controller.js')

router.get('/users',user.getUsers)
router.post('/register', user.register)
router.post('/register1', user.register1)

router.post('/login', user.login)
router.delete('/deleteUser/:id',user.deleteUser)
router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router