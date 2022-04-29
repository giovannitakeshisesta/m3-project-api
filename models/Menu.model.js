const { text } = require('express')
const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema(
{
    type:{
        type:String,
        required: [true, 'A type is required']
    },
    name : {
        type:String,
        required: [true, 'A name is required'],
        trim: true,
        minlength: [3, 'An Item must have at least 3 characters']
    },
    description:{
        type:String,
        required: [true, 'A description is required']
    },
    price:{
        type:Number,
        required: [true, 'A price is required'],
    },
    allergens:[],
    // vegetarian:{
    //     type:Boolean
    // },
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