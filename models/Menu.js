const mongo=require('mongoose')
const MenuSchema=new mongo.Schema({
    id: Number, 
    name:{
        type:String,
        required:true
    },
    description:{
         type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    url:{
        type:String,
    }
})
const menu=mongo.model('Menu',MenuSchema)
module.exports=menu