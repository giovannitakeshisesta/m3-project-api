const { text } = require('express')
const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema(
{
    type:{
        type:String,
        required: [true, 'A type is required backend']
    },
    name : {
        type:String,
        required: [true, 'A name is required backend'],
        trim: true,
        minlength: [3, 'An Item must have at least 3 characters backend']
    },
    description:{
        type:String,
        required: [true, 'A description is required backend']
    },
    price:{
        type:Number,
        required: [true, 'A price is required backend'],
    },
    allergens:[],
    line:[],
    quantity:{
        type:Number,
        default: 0
    },
    message:{
        type:String,
        default: ""
    },
    course:{
        type:Number,
        default: 1
    },  
    isDone:{
        type:Boolean,
        default:false
    },
    image: {
      type: String
    }
    
},
{
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
            return ret
        }
      }
}
)

const Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu