const mongoose = require('mongoose')

const billSchema = new mongoose.Schema(
{
    orderId : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Order"
    },
    tableInfo:{},
    items:[],
}
)

const Bill = mongoose.model('Bill',billSchema)

module.exports = Bill