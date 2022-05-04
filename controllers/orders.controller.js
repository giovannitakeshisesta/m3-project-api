const Order = require('../models/Order.model')
const Holders = require ('../models/Holders.model')

module.exports.createOrder = (req,res, next) => {
    Order.create(req.body)
        .then((order) => {
            return Holders.findOneAndUpdate({}, { "$push": { "hold1.items": order._id }}, { new: true })
                .then(response => {
                    res.status(201).json(response)
                })
    })
    .catch(next)
}


module.exports.editOrder = (req,res, next) => {
    Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((order) => { res.status(200).json(order) })
        .catch(next)
}


module.exports.deleteOrder = (req,res, next) => {
    Order.findByIdAndDelete(req.params.id)
        .then((order) => res.status(202).json(order))
        .catch(next)
}


module.exports.editIsDone = (req, res, next) => {
    const type = req.body.type
    const name = req.body.name
    Order.findById(req.params.id)
        .then((response) => { 
            const target = response[type].find(el => el.name===name)
            target.isDone=!target.isDone

            response.markModified(type)
            return response.save()
                .then((order) => {
                    console.log(order);
                    res.json(order)
                })
        })
        .catch(next)
}