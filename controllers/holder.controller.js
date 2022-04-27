const Holders = require('../models/Holders.model')

// ---------HOLDERS-----------
module.exports.createHolders = (req,res, next) => {
    Holders.create(req.body)
    .then((response) => res.status(201).json(response))
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