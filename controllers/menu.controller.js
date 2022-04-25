const createError = require('http-errors')
const Menu  = require('../models/Menu.model')

module.exports.create = (req, res, next) => {
    console.log(req.body);
    Menu.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(next)
}