const mongoose = require('mongoose')


const item = new mongoose.Schema(
{
    tableInfo:{},
    food:{},
    drink:{}
},
{
    timestamps: true
})

const holdSchema = new mongoose.Schema(
{
    name: String,
    items: [item]
})

const holdersSchema = new mongoose.Schema(
{ 
    hold1: holdSchema,
    hold2: holdSchema,
    hold3: holdSchema,
    hold4: holdSchema
}
)

const Holders = mongoose.model('Holders',holdersSchema)

module.exports = Holders