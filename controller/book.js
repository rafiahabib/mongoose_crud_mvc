const Book=require('../model/book');
const addBook = async(req,res)=>{

    const data = req.body
    const book =await Book.create(data)
    res.json({"message":"book created successfully",book})
    }

const getSingleBook = async(req,res)=>{
    const id = req.params.id
    const book = await Book.findById({_id:id})
    res.json({"message":"book read successfully",book})
    }

const updateBook=async(req,res)=>{
    const id=req.params.id
    const book= await Book.findByIdAndUpdate({_id:id.req.body})
    res.json({"message":"update succesfully",book})
}
const deleteBook=async(req,res)=>{
    const id=req.params.id
    const book= await Book.findByIdAndDelete({_id:id})
    console.log("deleted")
    res.json({"message":"delete successfully",book})
}

module.exports = {
    addBook,
    getSingleBook,
    updateBook,
    deleteBook

}