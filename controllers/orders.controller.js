const createError = require('http-errors')
const Order  = require('../models/Order.model')
const Holders = require('../models/Holders.model')


module.exports.create = (req, res, next) => {
    Holders.findOne()
    .then(response => {
        console.log("HOLDERS:",response)
        const hold1 = response.hold1.items
        const newOrder=req.body
        hold1.push(newOrder)
        return response.save()
         .then(() => res.json({}))
        // res.status(200).json(response)
    })
    .catch(next)



    // Order.create(req.body)
    // .then(response => res.status(201).json(response))
    // .catch(next)
}

module.exports.getOrders = (req,res, next) => {
    Order.find()
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.createHolders = (req,res, next) => {
    console.log(req.body)

    Holders.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(next)
}

module.exports.getHolders = (req,res, next) => {
    Holders.find()
    .then(response => res.status(200).json(response))
    .catch(next)
}

module.exports.putHolders = (req,res, next) => {
    Holders.findOneAndUpdate({},req.body, {new:true})
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(next)
}