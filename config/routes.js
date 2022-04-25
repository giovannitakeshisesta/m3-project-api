const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware')

const usersController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')
const ordersController = require('../controllers/orders.controller')
const menuController = require('../controllers/menu.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes.js');
  res.status(200).json({ ok: true })
})

/* Auth */
router.post('/login', authMiddleware.isNotAuthenticated, authController.login)

/* Menu */
router.post('/menu',   menuController.create)

/* Users */
router.post('/users',   authController.create)
router.get('/users/me', authMiddleware.isAuthenticated, usersController.getCurrentUser)
router.get('/users',     usersController.getUsers)
router.get('/users/:id', usersController.getUserById)

/* Order */
router.post('/orders/create', ordersController.createOrder)
router.patch('/orders/:id',   ordersController.editOrder)

/* Holders */
router.post('/holders',   ordersController.createHolders)
router.get ('/holders',   ordersController.getHolders)
router.put ('/holders',   ordersController.putHolders)

module.exports = router


// router.post('/orders',   ordersController.addOrderToHold1)
// router.get('/orders',    ordersController.getOrders)