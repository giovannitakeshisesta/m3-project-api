const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
{
    tableInfo:{},
    food:{},
    drink:{}
},
{
    timestamps: true
}
)

const Order = mongoose.model('Order',orderSchema)

module.exports = Order