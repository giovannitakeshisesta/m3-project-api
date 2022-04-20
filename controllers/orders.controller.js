const createError = require('http-errors')
const Order = require('../models/Order.model')


module.exports.create = (req, res, next) => {
    Order.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.getOrders = (req,res, next) => {
    Order.find()
    .then(response => res.status(201).json(response))
    .catch(next)
}