const createError = require('http-errors')
const Menu  = require('../models/Menu.model')

module.exports.create = (req, res, next) => {
    const newItem = req.body

    if (req.file) {
        newItem.image = req.file.path
    }
    Menu.create(newItem)
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
    const newItem = req.body

    if (req.file) {
        newItem.image = req.file.path
    }
    // console.log(newItem);
    Menu.findByIdAndUpdate(req.params.id, newItem, { new: true })
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.deleteMenuItem = (req, res, next) => {
    Menu.findByIdAndDelete(req.params.id)
    .then(() => res.status(202).json())
    .catch(next)
}