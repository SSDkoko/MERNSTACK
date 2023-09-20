const mongoose=require("mongoose")
const dbName=process.env.DB
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
.then(()=>console.log('established a connection to the product manager'))
.catch(err=>console.log('Sorry wait for a second',err)) 