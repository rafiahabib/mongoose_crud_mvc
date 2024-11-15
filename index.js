const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Router=require('./router/book');

mongoose.connect('mongodb://localhost:27017/library')
.then(()=> console.log('mongodb connected'))
.catch((err)=> console.error(err))

app.use(express.json());
app.use('/book',Router);
app.use('/book/:id',Router);
app.use('/book/update/:id',Router);
app.use('/book/delete/:id',Router);

app.listen(3000,()=>{
    console.log("server starting at port 3000")
})
