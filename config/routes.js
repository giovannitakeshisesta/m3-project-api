const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware')

const usersController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes.js');
  res.status(200).json({ ok: true })
})

/* Auth */

router.post('/login', authMiddleware.isNotAuthenticated, authController.login)

/* Users */

router.post('/users', authController.create)
router.get('/users/me', authMiddleware.isAuthenticated, usersController.getCurrentUser)


module.exports = router

// // pruebas
router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUserById)