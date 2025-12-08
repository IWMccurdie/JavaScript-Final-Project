const express=require('express')
const app=express()
const port=3000
const connectDB=require("./config/db")
connectDB()

//middleware
app.use(express.static('public'))
app.use(express.json())

//routes
// app.use('/api/v1',require('./routes/api/v1/menu'))
app.use('/api/v1',require('./routes/api/v1/events'))
app.use('/',require('./routes/pages/menu'))

//server
const url='http://localhost:3000/'
const message=`Server is running on port ${port}.Visit ${url}`
app.listen(port,()=>console.log(message))