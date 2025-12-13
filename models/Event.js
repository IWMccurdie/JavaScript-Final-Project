const mongo=require('mongoose')
const EventSchema=new mongo.Schema({
    id: Number, 
    name:{
        type:String,
        required:true
    },
    location:{
         type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})
const event=mongo.model('Event',EventSchema)
module.exports=event