const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const BookSchema=new Schema({
    title:{Type:String,require:true,unique:true},
    author: String,
    genre: String,
    year: Number,
    pages:Number
})
const Book = mongoose.model('Book',BookSchema)
module.exports = Book;