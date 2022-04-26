const mongoose = require('mongoose')

const deletedOrderSchema = new mongoose.Schema(
{
    delOrders:{}
}
)

const DeletedOrder = mongoose.model('DeletedOrder',deletedOrderSchema)

module.exports = DeletedOrder