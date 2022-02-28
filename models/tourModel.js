import mongoose from 'mongoose'

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'A tour must have name'],
        unique : true,
    }, 
    rating: {
        type : Number, 
        default : 4.5,
    }, 
    price:{
        type : Number,
        required: [true, 'A tour must have a price']
    },
    address: {
        city: {type: String},
        postalcode: Number
    }
})

export const Tour = mongoose.model('tours', tourSchema)