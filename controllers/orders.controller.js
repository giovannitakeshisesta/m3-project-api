const createError = require('http-errors')
const Order  = require('../models/Order.model')
const Holders = require('../models/Holders.model')

// --------- ORDERS -----------
module.exports.createOrder = (req,res, next) => {
    Order.create(req.body)
        .then((order) => {
            return Holders.findOneAndUpdate({}, { "$push": { "hold1.items": order._id }}, { new: true })
                .then(response => {
                    res.status(200).json(response)
                })
    })
    .catch(next)
}


module.exports.editOrder = (req,res, next) => {
    Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(order => {
            res.status(200).json(order)
        })
        .catch(next)
}


// ---------HOLDERS-----------

module.exports.createHolders = (req,res, next) => {
    console.log(req.body)

    Holders.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(next)
}

// populate each hold with each orderID
module.exports.getHolders = (req,res, next) => {
    const populateOptions = (hold) => {
        return (
            {
                path: hold,
                populate: {
                    path: 'items',
                    model: 'Order'
                }
            }
        )}

    Holders.find()
    .populate(populateOptions("hold1"))
    .populate(populateOptions("hold2"))
    .populate(populateOptions("hold3"))
    .populate(populateOptions("hold4"))
    .then(response => res.status(200).json(response))
    .catch(next)
}

// update the holders every time they change
module.exports.putHolders = (req,res, next) => {
    Holders.findOneAndUpdate({},req.body, {new:true})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(next)
}




// module.exports.addOrderToHold1 = (req, res, next) => {
    
// }


// module.exports.getOrders = (req,res, next) => {
//     Order.find()
//     .then(response => res.status(201).json(response))
//     .catch(next)
// }
