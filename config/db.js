const mongo=require('mongoose')
require('dotenv').config()

const connectDB=async()=>{
await mongo.connect(process.env.mongo_uri)
console.log("connected")
}
module.exports=connectDB