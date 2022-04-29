const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware')
// Controllers
const usersController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')

const ordersController = require('../controllers/orders.controller')
const holdersController = require('../controllers/holder.controller')
const billsController = require('../controllers/bills.controller')
const menuController = require('../controllers/menu.controller')

router.get('/', (req, res, next) => {
  console.log('hola desde routes.js');
  res.status(200).json({ ok: true })
})

/* Auth */
router.post('/login', authMiddleware.isNotAuthenticated, authController.login)

/* Users */
router.post('/users',   authController.create)
router.get('/users/me', authMiddleware.isAuthenticated, usersController.getCurrentUser)
router.get('/users',          usersController.getUsers)
router.get('/users/:id',      usersController.getUserById)

/* Order */
router.post('/orders/create', ordersController.createOrder)
router.patch('/orders/:id',   ordersController.editOrder)
router.delete('/orders/:id',  ordersController.deleteOrder)
router.patch('/orders/isdone/:id',ordersController.editIsDone)

/* Holders */
router.post('/holders',       holdersController.createHolders)
router.get ('/holders',       holdersController.getHolders)
router.put ('/holders',       holdersController.putHolders)

/* Bills */
// router.post('/bills/create',  billsController.createBill)

/* Menu */
router.post('/menu', menuController.create)
router.get('/menu', menuController.getMenu)

module.exports = router


