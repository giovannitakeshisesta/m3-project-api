const createError = require('http-errors')
const Menu  = require('../models/Menu.model')

module.exports.create = (req, res, next) => {
    console.log(req.body);
    Menu.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.getMenu = (req, res, next) => {
    Menu.find()
    .then(response => res.status(201).json(response))
    .catch(next)
}


module.exports.getMenuDetails = (req, res, next) => {
    Menu.findById(req.params.id)
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.editMenuDetails = (req, res, next) => {
    Menu.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.deleteMenuItem = (req, res, next) => {
    console.log(req.params.id)
    Menu.findByIdAndDelete(req.params.id)
    .then(() => res.status(202).json())
    .catch(next)
}